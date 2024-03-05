/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

const AddProd = () => {
  const { register, handleSubmit, setValue } = useForm();
  const [formData, setFormData] = useState({
    type: '',
    name: '',
    price: '',
    colors: '',
    image: '',
    brand: '',
  });
  const [brandsData, setBrandsData] = useState([]);

  useEffect(() => {
    fetchBrandsData();
  }, []);

  const fetchBrandsData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/brands');
      const data = await response.json();
      setBrandsData(data);
    } catch (error) {
      console.error('Error fetching brands data:', error);
    }
  };

  const onSubmit = (data) => {
    console.log('Form Data Submitted:', data);
    // Your submission logic here
    // Reset the form after submission
    setFormData({
      type: '',
      name: '',
      price: '',
      colors: '',
      image: '',
      brand: '',
    });
  };

  return (
    <div>
      <h3>Add a Product</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="type">Type:</label>
        <input
          type="text"
          id="type"
          {...register('type', { required: 'Type is required' })}
        />

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          {...register('name', { required: 'Name is required' })}
        />

        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          {...register('price', { required: 'Price is required' })}
        />

        <label htmlFor="colors">Colors:</label>
        <input
          type="text"
          id="colors"
          {...register('colors')}
        />

        <label htmlFor="image">Image URL:</label>
        <input
          type="text"
          id="image"
          {...register('image')}
        />

        <label htmlFor="brand">Brand:</label>
        <select id="brand" {...register('brand')}>
          <option value="">Select a brand</option>
          {brandsData.map((brand) => (
            <option className='text-blue' key={brand._id} value={brand.brandName}>
              {brand.brandName}
            </option>
          ))}
        </select>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProd;
