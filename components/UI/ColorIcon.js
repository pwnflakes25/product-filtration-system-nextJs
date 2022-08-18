const ColorIcon = (props) => {
  return (
    <div
      className="mr-2 border-2 border-neutral-400"
      style={{
        backgroundColor: props.color,
        borderRadius: "50%",
        width: "20px",
        height: "20px",
      }}
    ></div>
  );
};

export default ColorIcon;
