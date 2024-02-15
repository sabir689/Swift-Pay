/* eslint-disable react/prop-types */

const Category = ({ category, setCategory }) => {
  return (
    <div>
      <div className="mt-5 lg:mt-0">
        <div className="flex items-center justify-end">
          <p className="hidden lg:block mr-3 text-xs lg:text-sm text-purple-800 font-semibold">
            Shop by Category
          </p>
          <hr className="hidden lg:block  border-l-0 border-gray-400 border-[1px] h-[20px] mr-4" />
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="select w-40 bg-purple-400 border-none text-white px-4 py-2 join-item rounded-md"
          >
            <option value="">All</option>
            <option className="text-gray-800 bg-gray-100" value="Electronics">
              Electronics
            </option>
            <option className="text-gray-800 bg-gray-100" value="Photography">
              Photography
            </option>
            <option className="text-gray-800 bg-gray-100" value="Fitness">
              Fitness
            </option>
            <option className="text-gray-800 bg-gray-100" value="Cafe Corner">
              Cafe Corner
            </option>
            <option className="text-gray-800 bg-gray-100" value="Fashion">
              Fashion
            </option>
            <option className="text-gray-800 bg-gray-100" value="Art & Design">
              Art & Design
            </option>
            <option className="text-gray-800 bg-gray-100" value="Outdoor">
              Outdoor
            </option>
            <option className="text-gray-800 bg-gray-100" value="Appliances">
              Appliances
            </option>
            <option className="text-gray-800 bg-gray-100" value="Home Security">
              Home Security
            </option>
            <option className="text-gray-800 bg-gray-100" value="Home & Living">
              Home & Living
            </option>
            <option
              className="text-gray-800 bg-gray-100"
              value="Home Automation"
            >
              Home Automation
            </option>
            <option
              className="text-gray-800 bg-gray-100"
              value="Home & Kitchen"
            >
              Home & Kitchen
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Category;
