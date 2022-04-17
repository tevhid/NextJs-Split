const TH = (props) => {
    const {
        children,
        uid,
        className,
    } = props;

    return (
        <th uid={uid?.toString()} className={`${className ? className : null}`}>
            {children}
        </th>
    )
}

export default TH;

