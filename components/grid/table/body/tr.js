const Tr = (props) => {
    const {
        uid,
        children,
    } = props;

    return (
        <tr uid={uid.toString()} className={`hover:bg-slate-200`}>
            {children}
        </tr>
    )
}

export default Tr;