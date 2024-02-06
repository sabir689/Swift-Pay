import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const Apparel = () => {
  const { user } = useContext(AuthContext);
  const [brands, setBrands] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/brands');
        const data = await response.json();
        setBrands(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const showDetails = (product) => {
    setSelectedProduct(product);
  };

  const closeDetails = () => {
    setSelectedProduct(null);
  };
  const addToCart = async () => {
    try {
      if (!user) {
        console.error('User not authenticated.');
        return;
      }

      const response = await fetch('http://localhost:5000/api/bookmarks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: user.email, product: selectedProduct }),
      });

      if (response.ok) {
        console.log('Product added to cart successfully!');

        closeDetails();
      } else {
        console.error('Failed to add product to cart.');
      }
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };

  return (
    <div>
      {brands.map((brand) => (
        <div key={brand._id}>
          {brand.apparelBrands.map((apparelBrand) => (
            <div key={apparelBrand.brandId}>
              <h2 className='text-4xl mb-4 text-lime-500 font-mono font-bold'>{apparelBrand.brandName}</h2>
              <div className='grid grid-cols-3 gap-6'>
                {apparelBrand.products.map((product) => (
                  <div className='border-2 p-4 shadow-2xl rounded-box text-center mb-6' key={product.productId}>
                    <img className='w-96 h-96 border-2 object-cover object-center ' src={product.image} alt={product.name} />
                    <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                    <p className="text-sm mb-1">Type: {product.type}</p>
                    <p className="text-sm mb-1">Price: ${product.price}</p>
                    <p className="text-sm mb-1">Sizes: {product.sizes.join(', ')}</p>
                    <p className="text-sm mb-1">Colors: {product.colors.join(', ')}</p>
                    <button className='btn btn-outline' onClick={() => showDetails(product)}>
                      Show Details
                    </button>

                    {/* Details Modal */}
                    {selectedProduct === product && (
                      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center align-middle">
                        <div className="bg-white p-4 max-w-md">
                          <h3 className="text-xl font-semibold mb-2">{product.name} Details</h3>
                          <img className='w-96 h-96 border-2 object-cover object-center' src={product.image} alt={product.name} />
                          <p className='mb-2 '>Type: {product.type}</p>
                          <p className='mb-2'>Price: ${product.price}</p>
                          <p className='mb-2'>Sizes: {product.sizes.join(', ')}</p>
                          <p className='mb-2'>Colors: {product.colors.join(', ')}</p>
                          <div className='flex justify-between'>
                            <button className="btn btn-outline" onClick={closeDetails}>
                              Close
                            </button>
                            <button className="btn btn-outline" onClick={addToCart} >
                              Add to cart
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Apparel;
