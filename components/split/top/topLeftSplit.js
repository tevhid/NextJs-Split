import Grid from "../../grid/grid";

const TopLeftSplit = (props) => {
  return (
    <>        
        <div className='bg-gray-300'>
          <div className='p-4 flex flex-col justify-center items-center overflow-auto'>             
            <Grid/>
          </div>
        </div>
    </>
  )
}

export default TopLeftSplit


