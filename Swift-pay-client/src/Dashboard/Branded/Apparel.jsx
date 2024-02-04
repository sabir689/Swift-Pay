import  { useState, useEffect } from 'react';

const Apparel = () => {
  const [brands, setBrands] = useState([]);

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

  return (
    <div>
      
      {brands.map((brand) => (
        <div key={brand._id}>
          {brand.apparelBrands.map((apparelBrand) => (
            <div key={apparelBrand.brandId}>
              <h2 className='text-3xl'>{apparelBrand.brandName}</h2>
              <div className=' grid grid-cols-3'>
                {apparelBrand.products.map((product) => (
                  <div className='border-2 mr-6 mb-6' key={product.productId}>
                    <img src={product.image} alt={product.name} style={{ maxWidth: '100px' }} />
                    <h3>{product.name}</h3>
                    <p>Type: {product.type}</p>
                    <p>Price: ${product.price}</p>
                    <p>Sizes: {product.sizes.join(', ')}</p>
                    <p>Colors: {product.colors.join(', ')}</p>
                    
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
