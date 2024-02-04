import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Apparel from './Apparel';
import Electronics from './Electronics';
import Beauty from './Beauty';
import Living from './Living';
import Sports from './Sports';


const Branded = () => {
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <div>
            <Helmet>
                <title>SwiftNess | SeeBrands</title>
            </Helmet>

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