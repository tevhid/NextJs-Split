const TR = (props) => {
    const {
        uid,
        className,
        children,
    } = props;

    return (
        <tr uid={uid?.toString()} className={className? `hover:bg-slate-200`: null}>
            {children}
        </tr>
    )
}

export default TR;