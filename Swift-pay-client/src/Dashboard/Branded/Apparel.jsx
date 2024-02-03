import { useState, useEffect } from 'react';

const Apparel = () => {
  // State to store the fetched data
  const [brandsData, setBrandsData] = useState(null);

  // Effect to fetch data when the component mounts
  useEffect(() => {
    // Function to fetch data from the server
    const fetchData = async () => {
      try {
        // Replace 'https://your-api-endpoint.com/data' with the actual API endpoint
        const response = await fetch('https://your-api-endpoint.com/data');

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setBrandsData(data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); 

  return (
    <div>
      {brandsData && brandsData.apparelBrands.map(brand => (
        <div key={brand.brandName}>
          <h2>{brand.brandName}</h2>
          <ul>
            {brand.products.map(product => (
              <li key={product.name}>
                <h3>{product.name}</h3>
                <p>Type: {product.type}</p>
                <p>Price: ${product.price.toFixed(2)}</p>
                <p>Sizes: {product.sizes.join(", ")}</p>
                <p>Colors: {product.colors.join(", ")}</p>
                <img src={product.image} alt={product.name} style={{ maxWidth: '100px', maxHeight: '100px' }} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Apparel;
