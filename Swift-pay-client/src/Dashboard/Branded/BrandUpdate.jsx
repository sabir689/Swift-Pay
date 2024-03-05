/* eslint-disable react/prop-types */
import  { useState } from "react";
import Swal from "sweetalert2";

const BrandUpdate = ({ product, onClose }) => {
  const [updatedProductData, setUpdatedProductData] = useState({
    name: product.name,
    price: product.price,
    // Add other fields as needed
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdateClick = async () => {
    try {
      await fetch(`http://localhost:5000/api/products/${product._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProductData),
      });

      // Assume you need to update the product data in the parent component
      // You might want to use a callback function passed as a prop for this
      // This is just a basic example, adjust it based on your actual implementation
      onClose();

      Swal.fire("Updated!", "Your product has been updated.", "success");
    } catch (error) {
      console.error("Error updating product:", error);
      Swal.fire("Error", "An error occurred while updating the product.", "error");
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Update Product</h2>
        {/* Add input fields for updating product data */}
        <input
          type="text"
          name="name"
          value={updatedProductData.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="price"
          value={updatedProductData.price}
          onChange={handleInputChange}
        />
        {/* Add other input fields as needed */}
        <button onClick={handleUpdateClick}>Update</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default BrandUpdate;
