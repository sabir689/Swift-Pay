/* eslint-disable no-unused-vars */
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2';
import { AuthContext } from "../../provider/AuthProvider";

const BrandUpdate = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    size: "",
    color: "",
    image: "",
  });
  const [userProducts, setUserProducts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/brands/products/${productId}`);
        const data = await response.json();
        console.log(data);

        const userCategories = [
          "apparelBrands",
          "electronicsBrands",
          "beautyAndPersonalCareBrands",
          "homeAndLivingBrands",
          "sportsAndOutdoorsBrands",
        ];

        const userProduct = userCategories.flatMap((category) => {
          const userCategory = data.filter(
            (brand) => brand[category] && brand[category][0].userGmail === user.email
          );

          return userCategory.map((brand) => ({
            category,
            brandName: brand[category][0].brandName,
            products: brand[category][0].products,
          }));
        });

        setUserProducts(userProduct);

        // Find the product with the matching productId
        const foundProduct = userProduct.find((product) =>
          product.products.some((p) => p.productId === productId)
        );

        if (foundProduct) {
          // Set the product state with the found product data
          setProduct(foundProduct.products.find((p) => p.productId === productId));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [user, productId]);

  // Handle form submission logic
  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement your update logic here
    console.log("Form submitted with updated data:", product);

    // Show SweetAlert after successful update
    Swal.fire({
      icon: 'success',
      title: 'Brand Updated!',
      text: 'Your brand has been successfully updated.',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'OK',
    });
  };

  // Render the form
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Update Product ID: {productId}</h1>
      {product ? (
        <form onSubmit={handleSubmit}>
           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productName">
            Product Name:
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            id="productName"
            name="productName"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
          />

          <label className="block mt-4 text-gray-700 text-sm font-bold mb-2" htmlFor="productPrice">
            Price:
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            type="number"
            id="productPrice"
            name="productPrice"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
          />

          <label className="block mt-4 text-gray-700 text-sm font-bold mb-2" htmlFor="productSize">
            Size:
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            id="productSize"
            name="productSize"
            value={product.size}
            onChange={(e) => setProduct({ ...product, size: e.target.value })}
          />

          <label className="block mt-4 text-gray-700 text-sm font-bold mb-2" htmlFor="productColor">
            Color:
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            id="productColor"
            name="productColor"
            value={product.color}
            onChange={(e) => setProduct({ ...product, color: e.target.value })}
          />

          <label className="block mt-4 text-gray-700 text-sm font-bold mb-2" htmlFor="productImage">
            Image URL:
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            id="productImage"
            name="productImage"
            value={product.image}
            onChange={(e) => setProduct({ ...product, image: e.target.value })}
          />


          <button
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
            type="submit"
          >
            Update Product
          </button>
        </form>
      ) : (
        <p>Loading product data...</p>
      )}
    </div>
  );
};

export default BrandUpdate;
