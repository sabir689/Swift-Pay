import { useContext, useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';

const AddProd = () => {
  const { handleSubmit, control } = useForm();
  const { user } = useContext(AuthContext);
  const [userProducts, setUserProducts] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/brands");
        const data = await response.json();
  
        const userCategories = [
          "apparelBrands",
          "electronicsBrands",
          "beautyAndPersonalCareBrands",
          "homeAndLivingBrands",
          "sportsAndOutdoorsBrands",
        ];
  
        const userBrandProducts = userCategories.flatMap((category) => {
          const userCategory = data.filter(
            (brand) => brand[category] && brand[category][0].userGmail === user.email
          );
  
          return userCategory.map((brand) => ({
            brandName: brand[category][0].brandName,
            category,
            products: brand[category][0].products,
          }));
        });
  
        setUserProducts(userBrandProducts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, [user]);
  

  const onSubmit = async (data) => {
    const formattedData = {
      brandCategory: data.brandCategory, 
      brandName: data.brandName,
      userGmail: user.email, // Add the user's Gmail from the context
      products: [
        {
          type: data.type,
          name: data.productName,
          price: parseFloat(data.price),
          sizes: data.sizes ? data.sizes.split(",") : [],
          colors: data.colors ? data.colors.split(",") : [],
          image: data.image,
        },
      ],
    };

    try {
      const response = await fetch(
        "http://localhost:5000/api/brands",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formattedData),
        }
      );

      if (response.ok) {
        console.log("Data successfully posted.");
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Congratulations! You are a brand owner now.",
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
    <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Add Product</h1>
      <h2 className="text-2xl">Welcome, {user && user.displayName}</h2>
      {userProducts.map((brand) => (
        <div key={brand.brandName}>
          <h3>
            {brand.brandName} - {brand.category}
          </h3>
        </div>
      ))}

      <form onSubmit={handleSubmit(onSubmit)}>
     
        <div className="mb-4">
          <label htmlFor="brandName" className="block text-sm font-medium text-gray-600">
            Product Name
          </label>
          <Controller
            name="productName"
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

        <div className="mb-4">
          <label htmlFor="colors" className="block text-sm font-medium text-gray-600">
            Colors:
          </label>
          <Controller
            name="colors"
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




