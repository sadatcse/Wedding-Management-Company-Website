import React from 'react';
import { FaMailchimp, FaMapMarkerAlt, FaMobileAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer p-10 text-base-content" style={{ backgroundImage: "url('https://softexpo.com.bd//assets/frontend/images/footer-bg.webp')" }}>
        <aside className=''>
        <div class="flex items-center">
    <img src="https://www.transparentpng.com/thumb/s/lkybg6-file-bahn-logo-svg-wikimedia-commons.png" alt="Your Image Description" class="w-9 h-9"></img>
    <p class="font-bold ml-2">S Wedding Planner<br/>Crafting Moments, Creating Memories</p>
    
</div>
<div className=''>
<p>Welcome to S Wedding Event, where dreams become reality. Our passionate team crafts unforgettable moments with meticulous attention to detail.
From venue selection to entertainment,we tailor our services to your unique vision. Explore our portfolio, read glowing testimonials, and let us bring your dream wedding to life.</p>
</div>

          
        </aside> 
        <nav className='mx-8'>
          <header className="footer-title text-xl font-bold">Services</header> 
          <a className="link link-hover">Venue Booking</a> 
          <a className="link link-hover">Live Entertainment</a> 
          <a className="link link-hover">Invitation Design & Printing</a> 
          <a className="link link-hover">Catering & Food Presentation</a>
        </nav> 
        <nav className='mx-8'>
          <header className="footer-title text-xl">Company</header> 
          <a className="link link-hover">About us</a> 
          <a className="link link-hover">Contact</a> 
          <a className="link link-hover">Packages</a> 
          <a className="link link-hover">Portfolio</a>
        </nav> 
        <aside className='mx-8'>
  <header className="footer-title text-xl">Contact Us</header>

  <div className="flex items-center">
    <FaMapMarkerAlt size={15} className="mr-2" />
    <p className=''>S Wedding Bhabhan (5th Floor West) <br/>12 Kamal Atatur Avenew, Dhaka -1215 </p>
  </div>

  <div className="flex items-center">
    <FaMobileAlt size={15} className="mr-2" />
    <p className='mt-1'>+8801700005555</p>
  </div>

  <div className="flex items-center">
    <FaMailchimp size={15} className="mr-2" />
    <p className='mt-1'>info@sweddinplannerwebsite.com</p>
  </div>
</aside>

      </footer>
      
    );
};

export default Footer;