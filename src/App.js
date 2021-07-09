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
          evening and dinner hours, between 3 p.m. to 9:30 p.m.
        </h3>
        </Flex>
        <Box className='boxStyle'>
          <h2>Menu</h2>
          <Flex flexDirection="column" alignItems="flex-start">
          <u>Non-Veg</u>
            <table>
              <tr>
                <td>Chicken Korma</td>
                <td>150</td>
                <td>295</td>
              </tr>
              <tr>
                <td>Mutton Korma</td>
                <td>180</td>
                <td>350</td>
              </tr>
              <tr>
                <td>Mutton Stew</td>
                <td>190</td>
                <td>370</td>
              </tr>
              <tr>
                <td>Egg Curry(2egg)</td>
                <td>50</td>
                <td>100</td>
              </tr>
              <tr>
                <td>Chicken Biryani</td>
                <td>100</td>
                <td>200</td>
              </tr>
              <tr>
                <td>Mutton Pulao</td>
                <td>150</td>
                <td>250</td>
              </tr>
              <tr>
                <td>Mutton Seekh Kebab</td>
                <td>200</td>
              </tr>
              <tr>
                <td>Chicken Seekh Kebab</td>
                <td>150</td>  
              </tr>
            </table>
            <br />
            <u>Breads</u>
            <table>
              <tr>
                <td>Rumali Roti</td>
                <td>7</td>  
              </tr>
              <tr>
                <td>Naan</td>
                <td>10</td>  
              </tr>
              <tr>
                <td>Tawa Roti</td>
                <td>4</td>  
              </tr>
            </table>
            <br />
            
            <u>Quick Eats</u>
            <table>
              <tr>
                <td>Chicken Momos</td>
                <td>50</td>  
              </tr>
              <tr>
                <td>Bread Omlette</td>
                <td>40</td>  
              </tr>
              <tr>
                <td>Shami Kebab Paratha</td>
                <td>100</td>  
              </tr>
            </table>
            <br />
            <u>Salads and Raita</u>
            <table>
              <tr>
                <td>Onion Salad</td>
                <td>20</td>  
              </tr>
              <tr>
                <td>Green Salad</td>
                <td>40</td>  
              </tr>
            </table>
            <br />
            <u>Desserts</u>
            <table>
              <tr>
                <td>Kimami Sewaiyan</td>
                <td>120</td>  
              </tr>
              <tr>
                <td>Mawa Bati (2pcs)</td>
                <td>50</td>  
              </tr>
              <tr>
                <td>Kheer</td>
                <td>80</td>  
              </tr>
            </table>
            <br />
            <u>Beverages</u>
            <table>
              <tr>
                <td>Coke (600 ml)</td>
                <td>40</td>  
              </tr>
              <tr>
                <td>Dew (600 ml)</td>
                <td>40</td>  
              </tr>
              <tr>
                <td>Fanta (600 ml)</td>
                <td>40</td>  
              </tr>
              <tr>
                <td>Thumbs Up (600 ml)</td>
                <td>40</td>  
              </tr>
            </table>
          </Flex>
        </Box>
        <Flex className='footer' height="100%"
        width="100%"
        alignContent="center"
        justifyContent="center"
        flexDirection="column">
          <h3>Available in Datia, Madhya Pardesh</h3>
          <h4>Our ❤️ for Chicken Never Ends. Neither should yours. 😄</h4>
          <h4>Contact us: +91 9131149277 | +91 9977384809</h4>
          <h4>thekormakitchen8@gmail.com</h4>
        </Flex>
    </Flex>
  );
};

export default App;
