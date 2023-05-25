import React from 'react';
import image1 from './ima.jpg';
import image2 from './ima1.jpg';
import image3 from './ima2.jpg';


function HomePage() {
  return (
    <div className="container">
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Service</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <h1 >Welcome to My Mobile App</h1>
      <p> Experience the juiciness of our perfectly grilled burgers.
                  Prepared with premium meat and accompanied by fresh toppings,
                  our burgers are sure to satisfy your cravings Experience the juiciness of our perfectly grilled burgers.
                  Prepared with premium  Treat yourself to our heavenly desserts that will melt in your mouth. From creamy cheesecakes to decadent chocolate delights, our desserts are the perfect way to end a meal on a sweet note.</p>
      
        <div className="image-container">
          <div className="image-item">
            <img src={image1} alt="Image 1" />
            <p>Indulge in the mouthwatering flavors of our freshly baked pizzas.
                  Made with the finest ingredients, our pizzas are a delight for your taste buds.</p>
          </div>
          <div className="image-item">
            <img src={image2} alt="Image 2" />
            <p> Experience the juiciness of our perfectly grilled burgers.
                  Prepared with premium meat and accompanied by fresh toppings,
                  our burgers are sure to satisfy your cravings.</p>
          </div>
          <div className="image-item">
            <img src={image3} alt="Image 3" />
            <p>Treat yourself to our heavenly desserts that will melt in your mouth.
                  From creamy cheesecakes to decadent chocolate delights,
                  our desserts are the perfect way to end a meal on a sweet note.</p>
          </div>
 </div>
 <div>
 <footer className="footer">
        <p>&copy; 2023 Your App. All rights reserved. </p>
        </footer>
 </div>
 </div>
   
  );
}



export default HomePage;
