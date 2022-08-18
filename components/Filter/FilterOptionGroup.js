import ColorBadge from "../UI/ColorBadges";

const FilterOptionGroup = (props) => {
  const badgeSelectHandler = (value) => {
    props.onBadgeClick(value);
  };

  return (
    <section className="mb-10">
      <h2 className="text-2xl mb-5">{props.label}</h2>
      {props.options.map((option) => (
        <ColorBadge
          key={option}
          text={option}
          displayColor={props.displayColor}
          onSelect={badgeSelectHandler}
          isSelected={
            props.selectedOptions && props.selectedOptions.includes(option)
          }
        ></ColorBadge>
      ))}
    </section>
  );
};

export default FilterOptionGroup;
