//type rafce
import React, { useEffect, useState } from 'react'
import "./Tab.css";

const Tab = ({ children, active = 0}) => {
  //stores the active tab and the function for updating the state
  const [activeTab, setActiveTab] = useState(active);
  //this stores the data for our tabs and the function to update the data
  const [tabsData, setTabsData] = useState([]);

  //TYPE useEffect and press TAB then it AUTOCOMPLETES
  useEffect(() => {
    let data = [];

    //define array for storing data
    React.Children.forEach(children, (element) => {
      //if it's a valid component,
      if (!React.isValidElement(element)) return;

      const {
        props: {tab, children },
      } = element;
      data.push({tab, children});
    });
    //this updates the state
    setTabsData(data);
  }, [children]);

  return (
    //using HTML:
    <div className="custom-tab" >
      <ul className="nav nav-tabs tab-bar">
        { tabsData.map(({tab}, idx) => (
          <li className="nav-item">
            {/* setting the active tab */}
            <button className={`navlink ${idx === activeTab ? "active" : ""}`} 
            className="individual-tabs"
            href="#"
            onClick={()=> setActiveTab(idx)}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>
        
        <div className="tab-content">
          {tabsData[activeTab] && tabsData[activeTab].children}
        </div>



    </div>
  )
}

const TabPane = ({children}) => {
  return {children}
}

//define static component
Tab.TabPane = TabPane;

export default Tab
