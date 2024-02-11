/* eslint-disable react/jsx-key */

import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

/* eslint-disable react/prop-types */
const EmailProducts = () => {
  const { email } = useParams();
  const [showData, setShowData] = useState([]);
  const products = useLoaderData();
  console.log(products);
  useEffect(() => {
    const product = products.filter((product) => product?.email === email);
    setShowData(product);
    console.log(product);
  }, [email, products]);
  return (
    <div>
      {showData?.map((product) => (
        <div>
          <p>{product?.productName}</p>
          <p>{product?.email}</p>
        </div>
      ))}
    </div>
  );
};

export default EmailProducts;
