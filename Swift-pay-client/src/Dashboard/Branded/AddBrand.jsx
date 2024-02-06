
import { useForm, useFieldArray } from 'react-hook-form';

const AddBrand = () => {
  const { register, control, handleSubmit } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'products',
  });

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission logic here
  };

  return (
    <div>
      <h3 className="text-center">Fill up the form to post your brands</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Brand Name:</label>
          <input {...register('brandName')} />
        </div>

        <div>
          <label>Price:</label>
          <input {...register('price')} />
        </div>

        <div>
          <label>Type:</label>
          <input {...register('type')} />
        </div>

        <div>
          <label>Colors:</label>
          <input {...register('colors')} />
        </div>

        <div>
          <label>Image:</label>
          <input {...register('image')} />
        </div>

        <div>
          <h4>Products:</h4>
          {fields.map((product, index) => (
            <div key={product.id}>
              <h5>Product {index + 1}</h5>
              <div>
                <label>Product Name:</label>
                <input {...register(`products.${index}.name`)} />
              </div>
              <div>
                <label>Product Price:</label>
                <input {...register(`products.${index}.price`)} />
              </div>
              {/* Add more fields as needed, e.g., type, colors, image */}
              <button type="button" onClick={() => remove(index)}>
                Remove Product
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => append({ name: '', price: '' })}
          >
            Add Product
          </button>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddBrand;
