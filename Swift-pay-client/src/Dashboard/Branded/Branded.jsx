import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Apparel from './Apparel';
import Electronics from './Electronics';
import Beauty from './Beauty';
import Living from './Living';
import Sports from './Sports';
import { Link } from 'react-router-dom';


const Branded = () => {
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <div>
            <Helmet>
                <title>SwiftNess | SeeBrands</title>
            </Helmet>
           
           <div className=' mb-10 mt-10'>
                <h3 className='text-4xl' >Open your own brand fill the form</h3>

              <div className='flex justify-between'>
              <h2> Add at least 5 products to start your own brand:</h2>
               <h4> <Link to={'/dashboard/addBrand'}> <span className='text-black border-2 p-4 hover:bg-green-300 rounded-full'>Add Brand</span></Link></h4>
              </div>
                
            </div>

            <Tabs  defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
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
    );
};


export default Branded;