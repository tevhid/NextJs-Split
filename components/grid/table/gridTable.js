const GridTable = ({children}) => {
    return (    
        <>
            <table className={`table-auto w-full border-collapse border border-slate-600 overflow-auto bg-slate-300`}>
                {children}
            </table>
        </>
    )
}

export default GridTable;
