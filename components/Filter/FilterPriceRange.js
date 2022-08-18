const FilterPriceRange = (props) => {
  const onMinPriceChange = (event) => {
    props.priceMinChange(event.target.value);
  };

  const onMaxPriceChange = (event) => {
    props.priceMaxChange(event.target.value);
  };

  return (
    <section>
      <h2 className="text-2xl mb-5">{props.label}</h2>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="priceMin"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Price Min
          </label>
          <input
            type="number"
            id="priceMin"
            value={props.filter.priceMin}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Minimum Price"
            onChange={onMinPriceChange}
          />
        </div>
        <div>
          <label
            htmlFor="priceMax"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Price Max
          </label>
          <input
            type="number"
            id="priceMax"
            value={props.filter.priceMax}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Maximum Price"
            onChange={onMaxPriceChange}
          />
        </div>
      </div>
    </section>
  );
};

export default FilterPriceRange;
