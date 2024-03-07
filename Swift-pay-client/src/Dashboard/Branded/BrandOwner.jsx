import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const BrandOwner = () => {
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

        const allUserProducts = userCategories.flatMap((category) => {
          const userCategory = data.filter(
            (brand) => brand[category] && brand[category][0].userGmail === user.email
          );

          return userCategory.map((brand) => ({
            category,
            brandName: brand[category][0].brandName,
            products: brand[category][0].products,
          }));
        });

        setUserProducts(allUserProducts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [user]);

  const handleDelete = async (productId) => {
    try {
      // Show a SweetAlert confirmation
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      // If the user clicks the confirm button
      if (result.isConfirmed) {
        // Send a request to your server to delete the product
        await fetch(`http://localhost:5000/api/brands/products/${productId}`, {
          method: "DELETE",

        });

        // Update the state to reflect the changes
        setUserProducts((prevProducts) =>
          prevProducts.map((brand) => ({
            ...brand,
            products: brand.products.filter((product) => product._id !== productId),
          }))
        );

        // Show a success SweetAlert
        Swal.fire("Deleted!", "Your product has been deleted.", "success");
      }
    } catch (error) {
      console.error("Error deleting product:", error);

      // Show an error SweetAlert
      Swal.fire("Error", "An error occurred while deleting the product.", "error");
    }
  };

  return (
    <div>
      <div className="flex  justify-between">
        <div >
          <h2 className="text-center text-bold">Welcome, {user.email}!</h2>
          <p>You can manage your products here:</p>
        </div>
        <Link to={"/dashboard/addProd"}>
          <div>
            <button className="btn btn-outline"> Add Prod To ur brand</button>
          </div>
        </Link>
      </div>
      <div>
        {userProducts.map((brand) => (
          <div key={brand.brandName}>
            <h3>{brand.brandName} - {brand.category}</h3>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid gap-6 mb-10">
              {brand.products.map((product) => (
                <div key={product._id}>
                  <div className="border-2 text-center  rounded-lg overflow-hidden shadow-md p-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover object-center mb-4"
                    />

                    <div className="mb-2">
                      <strong >{product.name}</strong>
                    </div>

                    <div className="mb-2">
                      <p className="text-gray-700">${product.price}</p>
                      <h3 className="text-gray-600">{product.type}</h3>
                      <h3 className="text-gray-600">{product.colors}</h3>
                      <div className="flex justify-center items-center gap-6 mt-5">
                        <button
                          className="btn btn-outline"
                          onClick={() => handleDelete(product._id)}
                        >
                          Delete
                        </button>
                        <Link to={`/dashboard/brandUpdate/${product._id}`}> <h3 className="btn btn-outline">Update</h3></Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandOwner;
