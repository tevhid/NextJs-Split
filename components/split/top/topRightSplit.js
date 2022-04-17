import {useEffect, useState} from 'react'
import { useLocalStorage } from "../../../hooks/useLocalStorage"

const TopRightSplit = (props) => {

  const [options, setOptions] = useState({});

  useEffect(() => {
      const mainSplitItem = localStorage.getItem("mainSplitOptions");
      const mainSplitOptions = mainSplitItem ? JSON.parse(mainSplitItem).sizes : [];

      setOptions({
          main: mainSplitOptions
      });
      console.log(options);
  }, []);
  

  const {
    children
  } = props
  return (
    <>        
        <div {...props} className='bg-gray-300'>
          <div className='p-4 flex flex-col justify-center items-center overflow-y-auto w-full'>
            <div className='text-left w-3/4 py-4'>
              <h1 className=" text-xl text-slate-900 font-bold uppercase">Ayarlaar</h1>
            </div>
            <div className='text-left w-3/4 mt-4 py-4'>
              <h1 className=" text-xl text-slate-900 font-bold uppercase">Yatay Pencere Değerleri</h1>
              <h2 className=" text-lg font-bold text-green-800">%{options?.sizes?.[0]} </h2>
            </div>
            <div className='text-left w-3/4 mt-4 py-4'>
              <h1 className=" text-xl text-slate-900 font-bold uppercase">Üst Pencere Değerleri</h1>
              <h2 className=" text-lg font-bold text-green-900"></h2>
            </div>
            <div className='text-left w-3/4 mt-4 py-4'>
              <h1 className=" text-xl text-slate-900 font-bold uppercase">Alt Pencere Değerleeri</h1>
              <h2 className=" text-lg font-bold text-green-900"></h2>
            </div>
          </div>
        </div>
    </>
  )
}

export default TopRightSplit


