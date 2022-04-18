import {useState, useEffect,useMemo} from 'react'
import Split from 'react-split'
import TopSplit from './topSplit'
import BottomSplit from './bottomSplit'
import {useLocalStorage} from '../../hooks/useLocalStorage'
import { useDispatch } from 'react-redux'
import { setMainSizes } from '../../app/features/splitPositionSlice';

const MainSplit = (props) => {   
  const { children } = props    

  const dispatch = useDispatch();
  
  const [options, setOptions] = useState({
    sizes: [60, 40],
    minSize: 0,
    gutterSize: 12,
    snapOffset: 10,
    direction: 'vertical',
    className:'h-screen'
  })

  /* set and get local storage */
  const [mainSplitStorageOptions,setMainSplitStorageOptions] = useLocalStorage('mainSplitOptions', options)

  /* set default options */
  useEffect(() => {
    setOptions(mainSplitStorageOptions);
  }, [mainSplitStorageOptions])


  useEffect(() => {
    dispatch(setMainSizes(options.sizes));
  }, [options.sizes])

  const mainSplitOptions = useMemo (() => {
    return {
      ...options,
      onDragEnd: (e)=>{
        setMainSplitStorageOptions({...options, sizes: [Math.round(e[0]), Math.round(e[1])]})
      }
    }
  }, [options])


  return (
    <>
      <Split {...mainSplitOptions}>
        <TopSplit/> 
        <BottomSplit/>   
      </Split>
    </>
  )
}

export default MainSplit
