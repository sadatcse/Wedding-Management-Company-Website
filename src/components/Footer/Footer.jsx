import React from 'react';
import { FaMailchimp, FaMapMarkerAlt, FaMobileAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer p-5 text-base-content" style={{ backgroundImage: "url('https://i.ibb.co/r0nWmTM/footer-bg.webp')" }}>
        <aside className=''>
        <div class="flex items-center text-center">
    
    <p class="font-pacifico font-bold ml-2 text-5xl text-red-950	">S Wedding Planner<br/><span className='text-xl font-serif text-amber-900'>Crafting Moments, Creating Memories </span></p>
    
</div>
<div className=''>
<p className='font-mono	'>Welcome to S Wedding Event, where dreams become reality. Our passionate team crafts unforgettable moments with meticulous attention to detail.
From venue selection to entertainment,we tailor our services to your unique vision. Explore our portfolio, read glowing testimonials, and let us bring your dream wedding to life.</p>
</div>

          
        </aside> 
        <nav className='mx-8'>
          <header className="footer-title text-xl font-bold">Services</header> 
                
                 <Link to="/service/01"><a className="link link-hover">Venue Booking</a></Link> 
                 <Link to="/service/06"><a className="link link-hover">Live Entertainment</a></Link>
                 <Link to="/service/01"><a className="link link-hover">Invitation Design & Printing</a></Link>
                 <Link to="/service/04"><a className="link link-hover">Catering & Food Presentation</a></Link>
        </nav> 
        <nav className='mx-8'>
          <header className="footer-title text-xl">Company</header> 
          <Link to="about"><a className="link link-hover">About us</a></Link>
          <Link to="/contact"><a className="link link-hover">Contact</a></Link>
          <Link to="/faq"><a className="link link-hover">Faq</a></Link>
          <Link to="/portfolio"><a className="link link-hover">Portfolio</a></Link>
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