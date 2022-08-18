import { getTotalLength } from "../../statics";

const PaginationControl = (props) => {
  const nextPageHandler = () => {
    props.onNextPage();
  };

  const prevPageHandler = () => {
    props.onPrevPage();
  };

  return (
    <div className="flex flex-col my-10 items-center">
      <span className="text-sm text-gray-700 dark:text-gray-400">
        Showing{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {(props.pageIndex - 1) * 10}
        </span>{" "}
        to{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {(props.pageIndex - 1) * 10 + 10}
        </span>{" "}
        of{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {props.entriesCount}
        </span>{" "}
        Entries
      </span>
      <div className="inline-flex mt-2 xs:mt-0">
        <button
          disabled={props.pageIndex <= 1}
          onClick={prevPageHandler}
          className="py-2 px-4 text-sm font-medium text-white bg-gray-400 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Prev
        </button>
        <button
          disabled={(props.pageIndex - 1) * 10 + 10 > props.entriesCount}
          onClick={nextPageHandler}
          className="py-2 px-4 text-sm font-medium text-white bg-gray-400 rounded-r border-0 border-l border-gray-700 hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationControl;
