import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [showData, setShowData] = useState(null);
  const products = useLoaderData();
  const { Name } = products;
  console.log(products);
  console.log(products);
  useEffect(() => {
    // Verify that products is an array before calling find
    if (Array.isArray(products)) {
      // Find the product with the matching id
      const details = products.find((detail) => detail._id === id);
      setShowData(details);
    }
  }, [products, id]);
  console.log(showData);
  return (
    <div>
      <p>details</p>
      {showData && <p>{showData?.productName}</p>}
      {/* <p>{showData?.productName}</p> */}
      <p>{Name}</p>
    </div>
  );
};

export default Details;
