import { getCategories, getColors } from "../../statics";
import FilterOptionGroup from "./FilterOptionGroup";
import FilterPriceRange from "./FilterPriceRange";

const FilterSideNav = (props) => {
  const colorOptions = new Set(getColors());
  const tagOptions = getCategories();

  const closeHandler = () => {
    props.onClose();
  };

  const colorSelectedHandler = (value) => {
    let colorFamilyArr = props.filter.colorFamily;
    const foundIndex = colorFamilyArr.findIndex((color) => color === value);
    if (foundIndex >= 0) {
      colorFamilyArr.splice(foundIndex, 1);
    } else {
      colorFamilyArr.push(value);
    }
    props.onModifiedFilter({ ...props.filter, colorFamily: colorFamilyArr });
  };

  const categorySelectedHandler = (value) => {
    let categoryTagsArr = props.filter.categoryTags;
    const foundIndex = categoryTagsArr.findIndex((tag) => tag === value);
    if (foundIndex >= 0) {
      categoryTagsArr.splice(foundIndex, 1);
    } else {
      categoryTagsArr.push(value);
    }
    props.onModifiedFilter({ ...props.filter, categoryTags: categoryTagsArr });
  };

  const priceMaxRangeHandler = (value) => {
    props.onModifiedFilter({ ...props.filter, priceMax: value });
  };

  const priceMinRangeHandler = (value) => {
    props.onModifiedFilter({ ...props.filter, priceMin: value });
  };

  const applyFilterHandler = () => {
    props.onApplyFilter();
    props.onClose();
  };

  return (
    <div
      id="drawer-example"
      className="fixed z-40 h-screen p-4 overflow-y-auto bg-white w-80 dark:bg-gray-800"
      tabIndex="-1"
      aria-labelledby="drawer-label"
    >
      <h5
        id="drawer-label"
        className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
      >
        Filter
      </h5>
      <button
        type="button"
        data-drawer-dismiss="drawer-example"
        aria-controls="drawer-example"
        onClick={closeHandler}
        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <svg
          aria-hidden="true"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="sr-only">Close menu</span>
      </button>

      <FilterOptionGroup
        options={[...colorOptions]}
        label="Colors"
        onBadgeClick={colorSelectedHandler}
        selectedOptions={props.filter.colorFamily}
        displayColor={true}
      ></FilterOptionGroup>
      <FilterOptionGroup
        options={tagOptions}
        label="Categories"
        onBadgeClick={categorySelectedHandler}
        selectedOptions={props.filter.categoryTags}
        displayColor={false}
      ></FilterOptionGroup>
      <FilterPriceRange
        label="Price Range"
        priceMaxChange={priceMaxRangeHandler}
        priceMinChange={priceMinRangeHandler}
        filter={props.filter}
      ></FilterPriceRange>

      <section className="mb-20">
        <button
          onClick={applyFilterHandler}
          className="text-white bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block"
        >
          Apply Filter
        </button>
      </section>
    </div>
  );
};

export default FilterSideNav;
