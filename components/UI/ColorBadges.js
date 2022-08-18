import ColorIcon from "./ColorIcon";

const ColorBadge = (props) => {
  const badgeClickHandler = () => {
    props.onSelect(props.text);
  };

  const classes =
    (props.isSelected
      ? "border-4 border-indigo-200 border-l-indigo-500 "
      : "") +
    "bg-gray-100 text-gray-800 text-xl font-medium mr-2 px-2.5 py-0.5 inline-flex items-center rounded mr-2 mb-4 dark:bg-gray-700 dark:text-gray-300";
    
  return (
    <button onClick={badgeClickHandler}>
      <span className={classes}>
        {props.displayColor ? (
          // <div
          //   className="mr-2"
          //   style={{
          //     backgroundColor: props.text,
          //     borderRadius: "50%",
          //     width: "20px",
          //     height: "20px",
          //   }}
          // ></div>
          <ColorIcon color={props.text}></ColorIcon>
        ) : null}
        {props.text}
      </span>
    </button>
  );
};

export default ColorBadge;
