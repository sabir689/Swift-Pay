import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

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

  return (
    <div>
      <h2>Welcome, {user.name}!</h2>
      <p>You can manage your products here:</p>
      <ul>
        {userProducts.map((brand) => (
          <div key={brand.brandName}>
            <h3>{brand.brandName}</h3>
            <ul>
              {brand.products.map((product) => (
                <li key={product._id}>
                  <strong>{product.name}
                  </strong> - ${product.price}
                  <h3>{product.type}</h3>
                  <h3>{product.colors}</h3>
                  
                  

                </li>
              ))}
            </ul>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default BrandOwner;
