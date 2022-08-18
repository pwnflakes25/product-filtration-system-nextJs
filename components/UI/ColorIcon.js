const ColorIcon = (props) => {
  return (
    <div
      className="mr-2"
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
