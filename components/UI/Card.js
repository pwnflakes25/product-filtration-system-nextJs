function Card(props) {
    const classes = 'p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700' + props.className;
    return <div className={classes}>{props.children}</div>
}

export default Card;