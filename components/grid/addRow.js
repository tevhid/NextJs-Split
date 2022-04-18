
const AddRow = (props) => {
    const {
        show,
        onAddRow,
        onFormSubmit,
    } = props;

    /**
     * There are many methods of getting the form.
     * I preferred the form submit event
     * 
     * It can be caught from the change event of the form elements. or reducer can be used.
     * */


  return (
    <>

        <div className={`flex flex-col w-full justify-center items-center p-4 bg-slate-300 border border-slate-600`}>
            <div className={`flex flex-row w-full justify-start items-center ${show ? "" : "hidden"} `}>
                <form method="POST" onSubmit={onFormSubmit} className='form flex flex-row w-full justify-start items-center' name='addNewRowForm'>
                    <input name='id' id="formId" className='w-full h-10 p-2 border-2 border-gray-400 rounded-lg' type="number" min={0} max={9999} required placeholder="0" />
                    <input name='contract' id="formContact" className='w-full h-10 p-2 border-2 border-gray-400 rounded-lg ml-1' type="number" min={2022} max={2071}  required placeholder="3" />
                    <input name='bidding' id="formBidding" className='w-full h-10 p-2 border-2 border-gray-400 rounded-lg ml-1'  type="text" maxLength={20} required placeholder="Teklif" />
                    <select name='data' id="formData" className=" w-full h-10 p-2 border-2 border-gray-400 rounded-lg ml-1">
                        <option value="Alış" >Alış</option>                                   
                        <option value="Satış">Satış</option>                                   
                    </select>               
                    <button type='submit' className=' w-52 h-10 p-2 border-2 border-gray-400 rounded-lg flex justify-center items-center ml-2'>
                        <svg className='w-6 h-6' fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span className='ml-2 text-xs'>Kayıt Et</span>
                    </button>
                </form>
            </div>
            <div className='flex flex-row w-full justify-start items-center mt-2'>
                <button onClick={onAddRow} className='w-30 h-10 p-2 border-2 border-gray-400 rounded-lg flex justify-center items-center'> 
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    <span className='ml-2 text-xs'>Yeni Ekle</span>
                </button>
            </div>

        </div>

    </>
  )
}

export default AddRow


