import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const clientLogos = [
  { id: 1, src: 'https://i.ibb.co/ys7Mc0m/Sponser-1.jpg', alt: 'Singer' },
  { id: 2, src: 'https://i.ibb.co/7RkR262/Sponser-2.jpg', alt: 'Fiber home' },
  { id: 3, src: 'https://i.ibb.co/n8fPxNP/Sponser3-Dhl.jpg', alt: 'E curier' },
  { id: 4, src: 'https://i.ibb.co/Wtq2tfZ/Sponser4.jpg', alt: 'Daraz' },
  { id: 5, src: 'https://i.ibb.co/gFfy34f/Sponser5.jpg', alt: 'Ammra Wifi' },
  { id: 7, src: 'https://i.ibb.co/VMRxfJT/Sponser6.jpg', alt: 'Agro' },
  ];

const ClientPartnersSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-2 border">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center mb-5">Our Clients and Partners</h2>
        <Slider {...settings}>
          {clientLogos.map((logo) => (
            <div key={logo.id} className="text-center">
              <img src={logo.src} alt={logo.alt} class="mx-auto h-30 w-40 border" onClick="return false;"/>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ClientPartnersSection;