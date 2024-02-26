import React from 'react';
// Import your slider library and any other necessary components
import Slider from 'react-slick'; // This is just an example; use your actual slider component import
import Counter from './Counter'; // Adjust the import path according to your project structure

const TestimonialSection = () => {
  // Define your slider settings here, if you're using a library like react-slick or swiper
  const sliderProps = {
    // Example slider properties
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="testimonial-section">
      <div className="container-fluid">
        <div className="testimonial-quote-area p-r z-1 main-bg">
          <div className="shape shape-one">
            <span>
              <img src="assets/images/shape/leaf-4.png" alt="Leaf" />
            </span>
          </div>
          <div className="quote-wrapper wow fadeInDown">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-10 col-lg-12">
                  <div className="client-quote-box">
                    <div className="icon">
                      <i className="fal fa-long-arrow-right" />
                    </div>
                    <div className="text">
                      <h2 className="number">
                        <Counter end={50} />+
                      </h2>
                      <h4>Clients Happy to Get Our Services</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-area pt-70 pb-50 pl-15 pr-15 wow fadeInUp">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-1 order-md-1 order-2">
                  <div className="testimonial-dots mb-20" />
                </div>
                <div className="col-lg-11 order-md-2 order-1">
                  <Slider {...sliderProps} className="testimonial-slider-three mb-20">
                    {/* Testimonial items */}
                    {/* Repeat your testimonial item here */}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
