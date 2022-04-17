const Td = (props) => {
    const {
        children,
    } = props;

    return (
        <td className={`border px-4 py-2 border-slate-600 text-slate-900 text-base text-left`}>
            {children}
        </td>
    )
}

export default Td;

