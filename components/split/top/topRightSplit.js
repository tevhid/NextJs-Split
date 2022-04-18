import { useSelector } from 'react-redux'
import { getSizes } from '../../../app/features/splitPositionSlice';

const TopRightSplit = (props) => {

  const { mainSizes, topSizes, bottomSizes } = useSelector(getSizes);

  const {
    children
  } = props
  return (
    <>        
        <div {...props} className='bg-gray-300'>
          <div className='p-4 flex flex-col justify-center items-center overflow-y-auto w-full'>
            <div className='text-left w-3/4 py-2'>
              <h1 className=" text-base text-slate-900 font-bold uppercase">Ayarlar</h1>
            </div>
            <div className='text-left w-3/4 mt-2 py-2'>
              <h1 className=" text-base text-slate-900 font-bold uppercase">Yatay Pencere Değerleri</h1>
              <h2 className=" text-lg font-bold text-green-800"> Üst :%{mainSizes?.[0]} - Alt: %{mainSizes?.[1]}  </h2>
            </div>
            <div className='text-left w-3/4 mt-2 py-2'>
              <h1 className=" text-base text-slate-900 font-bold uppercase">Üst Pencere Değerleri</h1>
              <h2 className=" text-lg font-bold text-green-900">Sol: %{topSizes?.[0]} -  Sağ: %{topSizes?.[1]} </h2>
            </div>
            <div className='text-left w-3/4 mt-2 py-2'>
              <h1 className=" text-base text-slate-900 font-bold uppercase">Alt Pencere Değerleri</h1>
              <h2 className=" text-lg font-bold text-green-900">Sol:  %{bottomSizes?.[0]} - Sağ: %{bottomSizes?.[1]}</h2>
            </div>
          </div>
        </div>
    </>
  )
}

export default TopRightSplit


