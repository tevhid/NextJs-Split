import {useState, useEffect, useMemo} from 'react'
import Split from 'react-split'
import BottomLeftSplit from './bottom/bottomLeftSplit'
import BottomRightSplit from './bottom/bottomRightSplit'
import {useLocalStorage} from '../../hooks/useLocalStorage'
import { useDispatch } from 'react-redux'
import { setBottomSizes } from '../../app/features/splitPositionSlice';


const BottomSplit = (props) => {
  const {children } = props;

  const dispatch = useDispatch();
  const [options, setOptions] = useState({
    sizes: [60, 40],
    minSize: 0,
    gutterSize: 15,
    snapOffset: 10,
    className:"flex"
  })

  /* set and get local storage */
  const [bottomSplitStorageOptions,setBottomSplitStorageOptions] = useLocalStorage('bottomSplitOptions', options) 

  /* set default options */
  useEffect(() => {
    setOptions(bottomSplitStorageOptions)
  }, [bottomSplitStorageOptions])

  useEffect(() => {
    dispatch(setBottomSizes(options.sizes));
  }, [options.sizes])


  const splitOptions = useMemo (() => {
    return {
      ...options,
      onDragEnd: (e)=>{
        setBottomSplitStorageOptions({...options, sizes: [Math.round(e[0]), Math.round(e[1])]})
      }
    }
  }, [options])


  return (
    <> 
        <Split          
          {...splitOptions}                    
          >        
            <BottomLeftSplit/>
            <BottomRightSplit/>
        </Split>               
    </>
  )
}

export default BottomSplit


