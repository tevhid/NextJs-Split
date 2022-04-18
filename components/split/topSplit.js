import {useState, useEffect,useMemo} from 'react'
import Split from 'react-split'
import TopLeftSplit from './top/topLeftSplit'
import TopRightSplit from './top/topRightSplit'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useDispatch } from 'react-redux'
import { setTopSizes } from '../../app/features/splitPositionSlice';

const TopSplit = (props) => {
  const { children } = props

  const dispatch = useDispatch();
  const [options, setOptions] = useState({
    sizes: [60, 40],
    minSize: 0,
    gutterSize: 15,
    snapOffset: 10,
    className:"flex"
  })

  /* set and get local storage */
  const [topSplitStorageOptions,setTopSplitStorageOptions] = useLocalStorage('topSplitOptions', options) 

  /* set default options */
  useEffect(() => {
    setOptions(topSplitStorageOptions)
  }, [topSplitStorageOptions])

  
  useEffect(() => {
    dispatch(setTopSizes(options.sizes));
  }, [options.sizes])


  const splitOptions = useMemo (() => {
    return {
      ...options,
      onDragEnd: (e)=>{
        setTopSplitStorageOptions({...options, sizes: [Math.round(e[0]), Math.round(e[1])]})
      }
    }
  }, [options])
  
  return (
    <> 
        <Split          
          {...splitOptions}
          >
          <TopLeftSplit/>
          <TopRightSplit />                  
        </Split> 
    </>
  )
}

export default TopSplit


