import { useEffect, useState } from "react";
import "./tab.css"
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Stake from "./stake";


export default function Tb() {
    return(
        <div style={{width: "auto", marginTop: "-3%", padding: "3%"}}>
         <Tabs style={{border: "0px"}}>
    <TabList>
      <Tab>Staked</Tab>
      <Tab>Unstaked</Tab>
    </TabList>

    <TabPanel>
      <Stake />
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
        </div>
    )
}
