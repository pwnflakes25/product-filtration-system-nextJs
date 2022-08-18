import ProductItem from "./ProductItem";

const Products = (props) => {
  return (
    <div className="mt-4 px-4 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {props.products.map((product) => (
        <ProductItem
          key={product.name}
          name={product.name}
          colorFamily={product.colorFamily}
          categoryTags={product.categoryTags}
          shopifyProductEu={product.shopifyProductEu}
        ></ProductItem>
      ))}
    </div>
  );
};

export default Products;
