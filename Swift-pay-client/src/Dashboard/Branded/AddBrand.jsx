import { useForm, useFieldArray } from "react-hook-form";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const AddBrand = () => {
  const { register, control, handleSubmit } = useForm();
  const { user } = useContext(AuthContext);
  const { fields, append, remove } = useFieldArray({
    control,
    name: "products",
  });

  const onSubmit = async (data) => {
    const formattedData = {
      [data.brandCategory]: [
        {
          brandName: data.brandName,
          userGmail: user.email, // Add the user's Gmail from the context
          products: data.products.map((product) => ({
            type: product.type,
            name: product.name,
            price: parseFloat(product.price),
            sizes: product.sizes ? product.sizes.split(",") : [],
            colors: product.colors ? product.colors.split(",") : [],
            image: product.image,
          })),
        },
      ],
    };

    try {
      const response = await fetch("http://localhost:5000/api/brands", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formattedData),
      });

      if (response.ok) {
        console.log("Data successfully posted.");
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Data successfully posted.",
        });
        window.location.reload();
      } else {
        console.error("Failed to post data.");
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "Failed to post data.",
        });
      }
    } catch (error) {
      console.error("Error:", error.message);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "An error occurred.",
      });
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded shadow">
      <h3 className="text-center text-2xl font-semibold mb-4">Add New Brand</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Select Brand Category:
          </label>
          <select
            {...register("brandCategory")}
            className="mt-1 p-2 w-full border rounded"
          >
            <option value="apparelBrands">Apparel Brands</option>
            <option value="electronicsBrands">Electronics Brands</option>
            <option value="beautyAndPersonalCareBrands">
              Beauty and Personal Care Brands
            </option>
            <option value="homeAndLivingBrands">Home and Living Brands</option>
            <option value="sportsAndOutdoorsBrands">
              Sports and Outdoors Brands
            </option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600">
            Brand Name:
          </label>
          <input
            {...register("brandName")}
            className="mt-1 p-2 w-full border rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">
            User Gmail:
          </label>
          <input
            {...register("userGmail")}
            value={user.email} // Populate the Gmail field with the user's email
            readOnly
            className="mt-1 p-2 w-full border rounded bg-gray-100"
          />
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">Products:</h4>
          {fields.map((product, index) => (
            <div key={product.id} className="space-y-2">
              <h5 className="text-md font-semibold mb-2">
                Product {index + 1}
              </h5>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Product Image:
                </label>
                <input
                  {...register(`products.${index}.image`)}
                  className="mt-1 p-2 w-full border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Product Type:
                </label>
                <input
                  {...register(`products.${index}.type`)}
                  className="mt-1 p-2 w-full border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Product Colors:
                </label>
                <input
                  {...register(`products.${index}.colors`)}
                  className="mt-1 p-2 w-full border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Product Name:
                </label>
                <input
                  {...register(`products.${index}.name`)}
                  className="mt-1 p-2 w-full border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Product Price:
                </label>
                <input
                  {...register(`products.${index}.price`)}
                  type="number"
                  step="0.01"
                  className="mt-1 p-2 w-full border rounded"
                />
              </div>
              <button
                type="button"
                onClick={() => remove(index)}
                className="mt-2 p-2 bg-red-500 text-white rounded"
              >
                Remove Product
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              append({ name: "", price: "", type: "", colors: "", image: "" })
            }
            className="mt-2 p-2 bg-green-500 text-white rounded"
          >
            Add Product
          </button>
        </div>

        <button
          type="submit"
          disabled={fields.length < 5}
          className={`mt-4 p-2 rounded ${
            fields.length < 5
              ? "bg-gray-400 text-gray-800 cursor-not-allowed"
              : "bg-blue-500 text-white"
          }`}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBrand;
