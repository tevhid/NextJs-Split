import {useState} from 'react';
import Button from './button';
import MenuItem from './menuItem';

const  SettingsMenu = (props)=> {
  const {
    column,
    onClick,
  } = props
  const [open, setOpen] = useState(false);  
  return (
    <>
      <div className="flex items-center flex-row"> 
        <div className="flex justify-end">
          <Button onClick={()=>{setOpen(!open)}} open={open}/>
          <div className={`dropdown-menu dropdown-menu-left shadow-lg absolute flex-col justify-center ${open ? "" : "hidden"} top-[4.3rem] border border-slate-700 bg-slate-400 p-4 shadow-sm rounded`}>
            <MenuItem items={column} onClick={onClick} />
          </div>
        </div>
      </div>
    </>
  )
}

export default SettingsMenu;
