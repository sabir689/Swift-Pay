import { useState } from "react";
import { Helmet } from "react-helmet";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Apparel from "./Apparel";
import Electronics from "./Electronics";
import Beauty from "./Beauty";
import Living from "./Living";
import Sports from "./Sports";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";

const Branded = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div>
      <Helmet>
        <title>SwiftNess | SeeBrands</title>
      </Helmet>
      <div>
        <div className=" mb-10 mt-10">
          <div className="flex justify-between items-center mt-3 text-gray-400">
            <div className="flex flex-col">
              <span className="text-4xl block font-semibold text-[#7A00F9]">
                Wanna open your own brand ? <br />{" "}
                <span className="text-[#7800f9b4]">Fill the form</span>{" "}
                <IoIosArrowRoundForward />
              </span>
              <h2>Add at least 5 products to start your own brand:</h2>
            </div>
            <h4>
              {" "}
              <Link to={"/dashboard/addBrand"}>
                {" "}
                <button className="text-xs lg:text-md bg-purple-500 text-white px-4 py-2 rounded-full transition duration-200 ease-in-out hover:bg-purple-700 active:bg-purple-900 focus:outline-none">
                  Add products
                </button>
              </Link>
            </h4>
          </div>
        </div>

        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Apparel</Tab>
            <Tab>Electronics</Tab>
            <Tab>Beauty and Personal Care</Tab>
            <Tab>Home and Living</Tab>
            <Tab>Sports and Outdoors</Tab>
          </TabList>
          <TabPanel>
            <Apparel></Apparel>
          </TabPanel>
          <TabPanel>
            <Electronics></Electronics>
          </TabPanel>
          <TabPanel>
            <Beauty></Beauty>
          </TabPanel>
          <TabPanel>
            <Living></Living>
          </TabPanel>
          <TabPanel>
            <Sports></Sports>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Branded;
