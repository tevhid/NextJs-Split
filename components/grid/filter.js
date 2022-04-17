import SettingsMenu from "../dropdown/settingsMenu";

const GridFilter = (props) => {
    const {
      onFilterChange,
        onSettingsMenuItemsClick,
        column,
        checked,
        filter,
    } = props;
    return(
        <>
            <div className="flex w-full table-filter justify-between items-center p-2 bg-slate-500">
              <div className="flex items-center flex-row  w-32">
                <select className=" bg-slate-300 rounded-lg p-2 border w-full" onChange={(e)=>{onFilterChange(e)}}>
                  <option value="">All</option>
                  { 
                    filter?.map((item,index) => {
                      return (
                        <option key={index} value={item}>{item}</option>
                      )
                    })
                  }
                </select>
              </div>                                            
              <SettingsMenu column={column} onClick={onSettingsMenuItemsClick}/>                              
            </div>        
        </>
    )
}

export default GridFilter

