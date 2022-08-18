import { useState } from "react";
import FilterSideNav from "./FilterSideNav";

const Filter = (props) => {
  const [isDrawerOpen, toggleDrawer] = useState(false);
  const [filter, modifyFilter] = useState({
    colorFamily: props.filter.colorFamily,
    categoryTags: props.filter.categoryTags,
    priceMin: props.filter.priceMin,
    priceMax: props.filter.priceMax,
  });

  const drawerHandler = () => {
    toggleDrawer((prev) => !prev);
  };

  const filterModifiedHandler = (newFilterValue) => {
    modifyFilter(newFilterValue);
  };

  const applyFilterHandler = () => {
    props.changeFilter(filter);
  };

  return (
    <section>
      <div className="text-center">
        <button
          className="text-white mt-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          type="button"
          data-drawer-target="drawer-example"
          data-drawer-show="drawer-example"
          aria-controls="drawer-example"
          onClick={drawerHandler}
        >
          Filter
        </button>
      </div>

      {isDrawerOpen ? (
        <FilterSideNav
          onClose={drawerHandler}
          filter={filter}
          onModifiedFilter={filterModifiedHandler}
          onApplyFilter={applyFilterHandler}
        ></FilterSideNav>
      ) : null}
    </section>
  );
};

export default Filter;
