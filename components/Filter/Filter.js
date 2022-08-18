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
    console.log(newFilterValue);
    modifyFilter(newFilterValue);
  };

  const applyFilterHandler = () => {
    props.changeFilter(filter);
  };

  return (
    <section>
      <div className="text-center">
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          type="button"
          data-drawer-target="drawer-example"
          data-drawer-show="drawer-example"
          aria-controls="drawer-example"
          onClick={drawerHandler}
        >
          Show drawer
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
    // <div>
    //   <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
    //     <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
    //       Filter
    //     </span>
    //   </button>
    // </div>
  );
};

export default Filter;
