const MenuItem = (props) => {
    const {
        items,
        onClick,
    } = props;
    
    return (
        <>
            {
                items && items.map((item,index) => {                                 
                    return (
                        <a href="#" key={index} className="dropdown-item">
                            <div className="flex items-center">
                                <label className="inline-flex items-center mt-3">
                                    <input type="checkbox" name={item.field} onClick={(e)=>{onClick(e)}} defaultChecked={item.status ? true : false} className={`form-checkbox h-5 w-5 text-slate-700 ${item.status ? "checked" : null}  `}/><span className="ml-2 text-slate-700">{item.name}</span>
                                </label>
                            </div>
                        </a>
                    )                                        
                })
            }                
        </>
    )
}

export default MenuItem;