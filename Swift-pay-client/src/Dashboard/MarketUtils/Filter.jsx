const Filter = ({ sorting, setSorting }) => {
  return (
    <div>
      <div className="">
        <div className="flex items-center justify-end">
          <p className="mr-3 text-purple-800 hidden lg:block ">Filter</p>
          <hr className="hidden lg:block  border-l-0 border-gray-400 border-[1px] h-[20px] mr-4" />
          <select
            value={sorting}
            onChange={(e) => setSorting(e.target.value)}
            className="select rounded-md join-item bg-transparent border-[1px] border-gray-800"
          >
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
