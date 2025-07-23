import React from 'react';
import { useState } from "react";
import { Tab, Nav } from "react-bootstrap";
import TabPaneSection from "./TabPaneSection";
import { motion } from "framer-motion";
const SpecialOffer = () => {
  const [activeTab, setActiveTab] = useState("starters");
  const handleTabChange = (tab: string | null) => {
    setActiveTab(tab || "starters");
  };
  return (
    <section>
      <motion.div
        className="ad-offer"
        initial={{
          y: 80,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.5,
          ease: "easeIn",
        }}
      >
        <div className="ad-offer-title-container">
          <img src="/img/aida-images/service-icon.png" alt="" />
          <h4 className="ad-title-text">Try Our Special Offers</h4>
          <p className="ad-description-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            aspernatur ipsa veritatis consectetur cupiditate minima quasi
            voluptates, eius magni?
          </p>
        </div>
        <Nav
          activeKey={activeTab}
          onSelect={(selectedKey) => handleTabChange(selectedKey)}
          className="ad-offer-tab-container"
        >
          <Nav.Item>
            <Nav.Link
              eventKey="starters"
              className={activeTab === "starters" ? "active" : ""}
            >
              STARTERS
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="lunch"
              className={activeTab === "lunch" ? "active" : ""}
            >
              LUNCH
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="dinner"
              className={activeTab === "dinner" ? "active" : ""}
            >
              DINNER
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="sides"
              className={activeTab === "sides" ? "active" : ""}
            >
              SIDES
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="desserts"
              className={activeTab === "desserts" ? "active" : ""}
            >
              DESSERTS
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="beverages"
              className={activeTab === "beverages" ? "active" : ""}
            >
              BEVERAGES
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
          <Tab.Pane
            eventKey="starters"
            className={activeTab === "starters" ? "show active" : ""}
          >
            <TabPaneSection startIndex={1} endIndex={7} />
          </Tab.Pane>
          <Tab.Pane
            eventKey="lunch"
            className={activeTab === "lunch" ? "show active" : ""}
          >
            <TabPaneSection startIndex={5} endIndex={9} />
          </Tab.Pane>
          <Tab.Pane
            eventKey="dinner"
            className={activeTab === "dinner" ? "show active" : ""}
          >
            <TabPaneSection startIndex={3} endIndex={8} />
          </Tab.Pane>
          <Tab.Pane
            eventKey="sides"
            className={activeTab === "sides" ? "show active" : ""}
          >
            <TabPaneSection startIndex={2} endIndex={6} />
          </Tab.Pane>
          <Tab.Pane
            eventKey="desserts"
            className={activeTab === "desserts" ? "show active" : ""}
          >
            <TabPaneSection startIndex={1} endIndex={6} />
          </Tab.Pane>
          <Tab.Pane
            eventKey="beverages"
            className={activeTab === "beverages" ? "show active" : ""}
          >
            <TabPaneSection startIndex={4} endIndex={8} />
          </Tab.Pane>
        </Tab.Content>
        <div className="ad-offer-bottom-container">
          <div className="ad-offer-bottom-text-container">
            <div className="grad-border">
              <div className="left-border"></div>
              <div className="right-border"></div>
            </div>
            <h5>During winter daily from 7:30 am to 9.30 pm</h5>
            <div className="grad-border">
              <div className="left-border"></div>
              <div className="right-border"></div>
            </div>
          </div>
          <a href="shop.html">
            <button>Order Online</button>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default SpecialOffer;
