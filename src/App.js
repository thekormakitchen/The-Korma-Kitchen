import React from "react";
import "./App.css";
import { Flex, Box } from "reflexbox";

const App = () => {
  return (
    <Flex
      className="App"
      height="100%"
      width="100%"
      alignContent="center"
      justifyContent="center"
      flexDirection="column"
    >
      <div className="bgImage" alt="bgimage" />
      <Flex
        className="box"
        height="100%"
        width="100%"
        alignContent="center"
        justifyContent="center"
        flexDirection="column"
      >
        <h1>The Korma Kitchen</h1>
        <h3>
          We serve specialty dishes which are our strength. We operate during
          evening and dinner hours, between 5 p.m. to 10 p.m.
        </h3>
        </Flex>
        <Box className='boxStyle'>
          <h2>Menu</h2>
          <Flex flexDirection="column" alignItems="flex-start">
            Non-Veg
            <ul className="list">
              <li>Chicken Korma</li>
              <li>Chicken Biryani</li>
              <li>Mutton Korma</li>
              <li>The Korma Kitchen's Special Mutton Stew</li>
              <li>Kebab Paratha</li>
              <li>Egg Curry</li>
            </ul>
            Breads
            <ul className="list">
              <li>Rumali Roti</li>
              <li>Naan Roti</li>
              <li>Tawa Roti</li>
            </ul>
            Rice
            <ul>
              <li>Jeera Rice</li>
            </ul>
            Quick Eats
            <ul className="list">
              <li>Chicken Momos</li>
              <li>Chicken Fried Rice</li>
            </ul>
           Beverages
            <ul className="list">
              <li>Cold Coffee</li>
              <li>Lemonade</li>
              <li>Coke (600 ml/1.2 litre)</li>
              <li>Sprite (600 ml/1.2 litre)</li>
              <li>Dew (600 ml/1.2 litre)</li>
              <li>Pepsi (600 ml/1.2 litre)</li>
              <li>Water (1 litre)</li>
            </ul>
            Salads and Raita
            <ul>
              <li>Raita</li>
              <li>Onion Salad</li>
              <li>Green Salad</li>
            </ul>
            Desert
            <ul>
              <li>The Korma Kitchen's Special Kheer</li>
              <li>Kimami Sewaiyan</li>
            </ul>
          </Flex>
        </Box>
        <Flex className='footer' height="100%"
        width="100%"
        alignContent="center"
        justifyContent="center"
        flexDirection="column">
          <h3>Available in Datia, Madhya Pardesh. Order us on Swiggy and Zomato.</h3>
          <h4>Our ❤️ for Chicken Never Ends. Neither should yours. 😄</h4>
          <h4>Contact us: +91 9131149277 | +91 9977384809</h4>
        </Flex>
    </Flex>
  );
};

export default App;
