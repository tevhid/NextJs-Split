import TR from "./thead/tr";
import TH from "./thead/th";
const GridThead = (props) => {
    const {
        column,
        children,
        className,
    } = props;

    return (
        <>
            <thead className={` ${className ?  className : null} bg-slate-700`}>
                <TR>
                    {column && column.map((item) => {
                        if (item.status) {
                            return (
                                <TH key={item.id} field={item.field} uid={item.field} className={`border px-4 py-2 border-slate-600 text-slate-200 text-base text-left`}>
                                    {item.name}
                                </TH>
                            )
                        }
                    })}
                </TR>
            </thead>
        </>
    )
}

export default GridThead;