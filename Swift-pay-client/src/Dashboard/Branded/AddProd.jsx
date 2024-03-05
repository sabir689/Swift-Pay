
import { useForm, Controller } from 'react-hook-form';

const AddProd = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    // Handle form submission logic here
    console.log(data);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Add Product</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Name:
          </label>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => <input {...field} className="mt-1 p-2 border w-full rounded-md" />}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="type" className="block text-sm font-medium text-gray-600">
            Type:
          </label>
          <Controller
            name="type"
            control={control}
            defaultValue=""
            render={({ field }) => <input {...field} className="mt-1 p-2 border w-full rounded-md" />}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium text-gray-600">
            Price:
          </label>
          <Controller
            name="price"
            control={control}
            defaultValue={0}
            render={({ field }) => <input type="number" {...field} className="mt-1 p-2 border w-full rounded-md" />}
          />
        </div>

        {/* Add similar styling for other fields */}

        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-600">
            Image URL:
          </label>
          <Controller
            name="image"
            control={control}
            defaultValue=""
            render={({ field }) => <input type="url" {...field} className="mt-1 p-2 border w-full rounded-md" />}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="sizes" className="block text-sm font-medium text-gray-600">
            Sizes:
          </label>
          <Controller
            name="sizes"
            control={control}
            defaultValue={[]}
            render={({ field }) => <input type="text" {...field} className="mt-1 p-2 border w-full rounded-md" />}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProd;