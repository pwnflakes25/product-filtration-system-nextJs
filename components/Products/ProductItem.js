import Card from "../UI/Card";
import ColorIcon from "../UI/ColorIcon";
import CustomBadge from "../UI/CustomBadge";

const ProductItem = (props) => {
  const price =
    props &&
    props.shopifyProductEu &&
    props.shopifyProductEu.variants.edges[0].node.price;
  console.log(props);
  return (
    <Card>
      <h5
        style={{ minHeight: "8vh" }}
        className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        {props.name}
      </h5>
      {props.categoryTags && props.categoryTags.length
        ? props.categoryTags.map((category) => (
            <CustomBadge key={category} text={category}></CustomBadge>
          ))
        : null}

      <div className="mt-3 ml-1 flex">
        {props.colorFamily && props.colorFamily.length
          ? props.colorFamily.map((color) => (
              <ColorIcon key={color.name} color={color.name}></ColorIcon>
            ))
          : null}
      </div>

      <div className="mt-3 ml-1 flex">{price ? <h4>{price}</h4> : null}</div>
    </Card>
  );
};

export default ProductItem;
