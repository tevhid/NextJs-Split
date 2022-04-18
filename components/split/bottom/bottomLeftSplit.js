import BottomGrid from "../../grid/bottomGrid";

const BottomLeftSplit = (props) => {
  const {children } = props;
  return (
    <>        
        <div className='bg-gray-300'>
          <div className="p-4 flex flex-col justify-start items-center overflow-auto w-full h-full">
            <BottomGrid/>
          </div>
        </div>
    </>
  )
}

export default BottomLeftSplit


