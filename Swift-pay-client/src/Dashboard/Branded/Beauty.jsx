import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Beauty = () => {
  const { user } = useContext(AuthContext);
  const [brands, setBrands] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://swift-pay-server.vercel.app/api/brands"
        );
        const data = await response.json();
        setBrands(data.map((brand) => brand.beautyAndPersonalCareBrands));
      } catch (error) {
        console.error("Error fetching data:", error);
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
        console.error("User not authenticated.");
        return;
      }

      const response = await fetch(
        "https://swift-pay-server.vercel.app/api/bookmarks",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: user.email, product: selectedProduct }),
        }
      );

      if (response.ok) {
        console.log("Product added to cart successfully!");
        closeModal();
      } else {
        console.error("Failed to add product to cart.");
      }
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  return (
    <div>
      {brands.map((brand, brandIndex) => (
        <div key={brandIndex}>
          {brand && brand[0] && (
            <h2 className="text-4xl text-white border-2 rounded-box text-center font-bold shadow-2xl  bg-[#7800f9b4]  hover:ping-800 p-4 mb-5">
              {brand[0].brandName}
            </h2>
          )}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ml-10">
            {brand &&
              brand[0] &&
              brand[0].products.map((product, productIndex) => (
                <div
                  className="border-[1px] w-[300px] p-4 rounded-lg text-center mb-6"
                  key={productIndex}
                >
                  <img
                    className="w-72 h-72 rounded-md object-cover object-center"
                    src={product.image}
                    alt={product.name}
                  />
                  <h3 className="text-md font-semibold mb-2 mt-2 text-[#190B14]">
                    {product.name}
                  </h3>
                  <p className="text-sm mb-1 text-gray-500">
                    Type: {product.type}
                  </p>
                  <p className="text-sm mb-1 text-gray-500">
                    Price: ${product.price}
                  </p>
                  <button
                    onClick={() => openModal(product)}
                    className="mt-2 overflow-hidden relative w-28  py-3  bg-[#190B14] text-white border-none rounded-md text-sm font-medium cursor-pointer group"
                  >
                    Show details
                    <span className="absolute w-28 h-28 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
                    <span className="absolute w-28 h-28 -top-8 -left-2 bg-purple-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
                    <span className="absolute w-28 h-28 -top-8 -left-2 bg-purple-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
                    <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-[12px] left-[48px] z-10">
                      Go
                    </span>
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}

      {/* Details Modal */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-60  flex justify-center items-center align-middle">
          <div className="bg-white pl-5 pr-3 py-6 max-w-md rounded-lg">
            <h3 className="text-xl text-gray-800 font-semibold mb-2">
              {selectedProduct.name} Details
            </h3>
            <img
              className="w-64 h-64 rounded-md object-cover object-center"
              src={selectedProduct.image}
              alt={selectedProduct.name}
            />
            <div className="mt-4 text-gray-500">
              <p className="mb-1">Type: {selectedProduct.type}</p>
              <p className="mb-1">Price: ${selectedProduct.price}</p>
              <p className="mb-1">
                Sizes:{" "}
                {selectedProduct.sizes && selectedProduct.sizes.join(", ")}
              </p>
              <p className="mb-1">
                Colors:{" "}
                {selectedProduct.colors && selectedProduct.colors.join(", ")}
              </p>
            </div>
            <div className="flex justify-between gap-2">
              <button
                className="rounded-md border-[1px] border-gray-500 btn-outline px-4 py-2 font-medium"
                onClick={closeModal}
              >
                Close
              </button>
              <button className="btn btn-outline" onClick={addToCart}>
                Add to cart
              </button>

              <button className="btn btn-outline">Pay</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Beauty;
