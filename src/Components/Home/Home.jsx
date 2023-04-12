import React from "react";
import { Link } from "react-router-dom";
import './Home.css'
 const Home = ()=>{

    return <div>
            <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="SignIn">Sign In</Link></li>
            <li><Link to="SignUp">Sign Up</Link></li>
            
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero-section">
          <h1>Share Your Ride, Save Your Time</h1>
          <p>Find a ride or share your ride with our carpooling service and reduce your carbon footprint.</p>
          <a to="#" className="cta-btn">Get Started</a>
        </section>

        <section className="features-section">
          <h2>Features</h2>
          <div className="feature">
            <img src="https://source.unsplash.com/400x300/?carpooling" alt="Carpooling feature" />
            <h3>Find Rides</h3>
            <p>Find rides to your destination and share the cost with other passengers.</p>
          </div>

          <div className="feature">
            <img src="https://source.unsplash.com/400x300/?carpooling" alt="Carpooling feature" />
            <h3>Share Your Ride</h3>
            <p>Offer rides to other passengers going in the same direction and earn some extra cash.</p>
          </div>

          <div className="feature">
            <img src="https://source.unsplash.com/400x300/?carpooling" alt="Carpooling feature" />
            <h3>Reduce Carbon Footprint</h3>
            <p>By sharing rides, you're helping to reduce the number of cars on the road, thus lowering your carbon footprint.</p>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 Carpooling Service. All rights reserved.</p>
      </footer>
         </div>
}

export default Home;