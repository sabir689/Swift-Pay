import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const Electronics = () => {
  const { user } = useContext(AuthContext);
  const [brands, setBrands] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/brands');
        const data = await response.json();
        setBrands(data.map((brand) => brand.electronicsBrands));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
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
        closeModal();
      } else {
        console.error('Failed to add product to cart.');
      }
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };

  return (
    <div>
      {brands.map((brand, brandIndex) => (
        <div key={brandIndex}>
          {brand && brand[0] && (
            <h2 className='text-4xl border-2 bg-red-500 hover:ping-800 p-4 mb-5'>{brand[0].brandName}</h2>
          )}
          <div className='grid grid-cols-3 gap-6'>
            {brand &&
              brand[0] &&
              brand[0].products.map((product, productIndex) => (
                <div className="border-2 p-4 shadow-2xl rounded-box text-center mb-6" key={productIndex}>
                  <img className='w-96 h-96 border-2 object-cover object-center' src={product.image} alt={product.name} />
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <p className="text-sm mb-1">Type: {product.type}</p>
                  <p className="text-sm mb-1">Price: ${product.price}</p>
                  <button className='btn btn-outline' onClick={() => openModal(product)}>
                    Show Details
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}

      {/* Details Modal */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-60  flex justify-center items-center align-middle">
          <div className="bg-white p-4 max-w-md ">
            <h3 className="text-xl font-semibold mb-2">{selectedProduct.name} Details</h3>
            <img className='w-96 h-96 border-2 object-cover object-center' src={selectedProduct.image} alt={selectedProduct.name} />
            <p className='mb-2 '>Type: {selectedProduct.type}</p>
            <p className='mb-2'>Price: ${selectedProduct.price}</p>
            <p className='mb-2'>Sizes: {selectedProduct.sizes && selectedProduct.sizes.join(', ')}</p>
            <p className='mb-2'>Colors: {selectedProduct.colors && selectedProduct.colors.join(', ')}</p>
            <div className='flex justify-between'>
              <button className="btn btn-outline" onClick={closeModal}>
                Close
              </button>
              <button className="btn btn-outline" onClick={addToCart}>
                Add to cart
              </button>

              <button className="btn btn-outline" >
                Pay
              </button>
            </div>
          </div>
        </div>
      )
      }
    </div >
  );
};

export default Electronics;







