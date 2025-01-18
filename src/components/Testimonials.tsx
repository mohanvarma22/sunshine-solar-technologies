import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const NextArrow = ({ onClick }: ArrowProps) => (
  <button 
    onClick={onClick}
    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
  >
    <ChevronRight className="w-6 h-6 text-gray-700" />
  </button>
);

const PrevArrow = ({ onClick }: ArrowProps) => (
  <button 
    onClick={onClick}
    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
  >
    <ChevronLeft className="w-6 h-6 text-gray-700" />
  </button>
);

const testimonials = [
  {
    name: "Ravi Babu",
    role: "Homeowner",
    feedback: "Switching to solar was the best decision. My energy bills have dropped significantly, and the team made the entire process seamless!",
    image: "/api/placeholder/150/150"
  },
  {
    name: "Narender",
    role: "Homeowner",
    feedback: "Hi every body I have installed 3 KW TATA solar roof top plant it is working without any breakdowns . Installation work is very good , This sunshine solar technology is one of the best company they used all branded equipment and cables Thank you.",
    image: "/api/placeholder/150/150"
  },
  {
    name: "Karunakarreddy",
    role: "Homeowner",
    feedback: "I have installed 3 kW system in my house, the installation is good, staff is friendly and got subsidy also, I recommend this company!",
    image: "/api/placeholder/150/150"
  }
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-3xl font-bold text-center text-primary-700 mb-8">
          What Our Customers Say
        </h2>
        <div className="relative">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4">
                <div className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-lg mx-2 h-full">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full mb-4"
                  />
                  <h3 className="text-xl font-semibold text-primary-700">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500 italic mb-2">
                    {testimonial.role}
                  </p>
                  <p className="text-gray-700">
                    {testimonial.feedback}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;