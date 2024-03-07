import Payment from "./Payment";
import React, { useContext, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { AuthContext } from "../provider/AuthProvider";
import MarketCards from "./Market/MarketCards";
import Search from "./MarketUtils/Search";
import Category from "./MarketUtils/Category";
import Filter from "./MarketUtils/Filter";
// import { FaBookmark } from "react-icons/fa";

const Market = () => {
  const [visible, setVisible] = useState(12);
  const { user } = useContext(AuthContext);
  const [search, setSearch] = useState(" ");
  const [sorting, setSorting] = useState(" ");
  const axiosPublic = useAxiosPublic();
  const queryClient = useQueryClient();
  let [isOpen, setIsOpen] = useState(false);
  const [productt, setProductt] = useState("");
  const [category, setCategory] = useState("");

  // const [showAllNames, setShowAllNames] = useState({});
  // const toggleShowAllNames = (productId) => {
  //   setShowAllNames((prevState) => ({
  //     ...prevState,
  //     [productId]: !prevState[productId], // Toggle state for the specific product
  //   }));
  // };
  const { isLoading: productsLoading, data: products = [] } = useQuery({
    queryKey: ["products", search, sorting],

    queryFn: async () => {
      const res = await axiosPublic.get(
        `/api/products?search=${search}&sort=${sorting}&category=${category}`
      );
      return res.data;
    },
  });

  const { data: savedProducts = [] } = useQuery({
    queryKey: ["savedProducts"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/api/bookmarks?email=${user?.email}`);
      return res?.data;
    },
  });

  const handleBookmark = (product) => {
    const Bookmark = {
      email: user?.email,
      product_id: product._id,
      productName: product.productName,
      category: product.category,
      image: product.image,
      price: product.price,
      location: product.location,
      description: product.description,
    };
    axiosPublic.post("/api/bookmarks", Bookmark).then((res) => {
      console.log(res.data);
      if (res?.data?.insertedId) {
        toast.success("Added to Bookmarks");
        queryClient.invalidateQueries("products");
        queryClient.invalidateQueries("savedProducts");
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;
    setSearch(searchText);
    console.log("searched");
  };
  const handlePay = (id) => {
    setIsOpen(true);
    setProductt(id);
  };
  // show more
  const showMore = () => {
    // Calculate the new value of visible based on the current length of products
    setVisible((prevValue) => Math.min(prevValue + 12, products.length));
  };
  return (
    <React.Fragment>
      {productsLoading ? (
        <div className="flex flex-row gap-2 items-center justify-center h-screen">
          <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce"></div>
          <div className="w-4 h-4 rounded-full bg-red-700 animate-bounce [animation-delay:-.3s]"></div>
          <div className="w-4 h-4 rounded-full bg-green-400 animate-bounce [animation-delay:-.5s]"></div>
        </div>
      ) : (
        <div>
          <div className="mb-5 mt-7">
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-5 justify-between items-center">
              <div className="flex items-center  flex-col lg:flex-row">
                {/* search */}
                <Search handleSubmit={handleSubmit}></Search>
                {/* dropdown */}
                <Category
                  category={category}
                  setCategory={setCategory}
                ></Category>
              </div>
              {/* filter */}
              <Filter sorting={sorting} setSorting={setSorting}></Filter>
            </div>
          </div>

          {/* card */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {products
              ?.slice(0, visible)
              .filter((product) => {
                return (
                  search.toLowerCase() === " " ||
                  (product?.productName &&
                    product?.productName
                      .toLowerCase()
                      .includes(search.toLowerCase()))
                );
              })
              .map((product) => {
                const newCategory = !category || product.category === category;
                if (newCategory) {
                  return (
                    <div
                      key={product._id}
                      className="w-[300px] min-h-[360px] mb-5 bg-transparent rounded-lg border-[1px] border-gray-300 hover:border-[#49108B]"
                    >
                      <MarketCards
                        key={product._id}
                        product={product}
                        savedProducts={savedProducts}
                        handleBookmark={handleBookmark}
                        handlePay={handlePay}
                      ></MarketCards>
                    </div>
                  );
                }
                return null;
              })}
          </div>
          {/* show more button */}
          <div className="text-center">
            <div className="text-center">
              {visible < products.length && (
                <button
                  onClick={showMore}
                  className="my-5 btn rounded-sm py-1 px-4 text-sm border-[1px] border-gray-800 text-gray-800 bg-transparent"
                >
                  Show more
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <Payment setIsOpen={setIsOpen} isOpen={isOpen} productt={productt} />
    </React.Fragment>
  );
};

export default Market;
