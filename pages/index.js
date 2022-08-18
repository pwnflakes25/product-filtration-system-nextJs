import { useEffect, useState } from "react";
import Filter from "../components/Filter/Filter";
import Products from "../components/Products/Products";
import useSWR from "swr";
import PaginationControl from "../components/UI/PaginationControl";

const fetcher = async (url) => {
  const res = await fetch(url);
  return await res.json();
};

const Home = (props) => {
  const [filter, modifyFilter] = useState({
    colorFamily: [],
    categoryTags: [],
    priceMin: "",
    priceMax: "",
  });

  const [pageIndex, modifyPageIndex] = useState(1);

  const onFilterChangeHandler = (newFilterValue) => {
    modifyFilter(newFilterValue);
  };

  const nextPageHandler = () => {
    modifyPageIndex((pageIndexCurrent) => pageIndexCurrent + 1);
  };

  const prevPageHandler = () => {
    modifyPageIndex((pageIndexCurrent) => pageIndexCurrent - 1);
  };

  const url = `http://localhost:3000/api/initialproducts?page=${pageIndex}&colorFamily=${filter.colorFamily.join(
    "-"
  )}&categoryTags=${filter.categoryTags.join("-")}&priceMin=${
    filter.priceMin
  }&priceMax=${filter.priceMax}`;

  const { data, error } = useSWR(url, fetcher, {
    initialData: props.products,
  });

  if (error) return <div>Failed to Load...</div>;
  if (!data) return <div>Loading..</div>;

  return (
    <section>
      <Filter filter={filter} changeFilter={onFilterChangeHandler} />
      {data.products.length ? (
        <Products products={data.products}></Products>
      ) : (
        <h2 className="text-4xl text-center my-20">No Entries Found</h2>
      )}
      ;
      <PaginationControl
        entriesCount={data.entriesCount}
        onNextPage={nextPageHandler}
        onPrevPage={prevPageHandler}
        pageIndex={pageIndex}
      />
    </section>
  );
};

export default Home;

export async function getStaticProps() {
  // fetch data from an API

  const resp = await fetch("http://localhost:3000/api/initialproducts", {
    method: "GET",
  });

  const products = await resp.json();

  return {
    props: {
      products: products.products,
    },
  };
}
