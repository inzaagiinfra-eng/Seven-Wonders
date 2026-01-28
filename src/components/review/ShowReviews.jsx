import React, { useCallback } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";
import useEmblaCarousel from "embla-carousel-react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { MdVerified } from "react-icons/md";




const allreview = [
    {
        name: "Rahul Sharma",
        rating: 4.5,
        text: "Amazing service! The team was very professional and delivered everything on time. Highly recommended.",
        image: {
            url: "/reviews/man1.png"
        }
    },
    {
        name: "Priya Verma",
        rating: 5,
        text: "Absolutely loved the experience. Quality was top-notch and support was very helpful.",
        image: {
           url: "/reviews/girl1.avif"
        }
    },
    {
        name: "Amit Kumar",
        rating: 4,
        text: "Good overall experience. There is still some room for improvement, but I’m satisfied.",
        image: {
           url: "/reviews/man5.webp"
        }
    },
    {
        name: "Neha Singh",
        rating: 3.5,
        text: "Service was decent. Delivery was slightly late but the quality made up for it.",
        image: {
           url: "/reviews/girl3.png"
        }
    },
    {
        name: "Vikas Patel",
        rating: 4.8,
        text: "Very smooth experience from start to finish. Will definitely use the service again.",
        image: {
           url: "/reviews/man2.png"
        }
    },
    {
    name: "Rohit Mehta",
    rating: 4.7,
    text: "Highly reliable real estate consultants. Smooth documentation process and timely updates at every step.",
    image: {
      url: "/reviews/man3.png"
    }
  },
  {
    name: "Anjali Gupta",
    rating: 5,
    text: "Professional, trustworthy, and customer-focused. Seven Wonders made my home buying journey stress-free.",
    image: {
      url: "/reviews/girl2.png"
    }
  },
  {
    name: "Vikram Patel",
    rating: 4.6,
    text: "Excellent market knowledge and honest advice. I would definitely recommend Seven Wonders for property consulting.",
    image: {
      url: "/reviews/man4.jpg"
    }
  },
  {
    name: "Pooja Malhotra",
    rating: 5,
    text: "Outstanding service and quick response time. The team handled everything professionally from start to finish.",
    image: {
      url: "/reviews/girl4.png"
    }
  }
];


const ShowReviews = () => {




    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        slidesToScroll: 1,
    });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);



    return (
        <div className="app-container max-md:mt-4 md:mt-28 max-md:mb-4 md:mb-8">
            <div className="flex justify-center items-center ">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
                    WHAT CUSTOMERS SAY
                </h1>
            </div>
            <div className="flex justify-center items-center mt-10">
                <div className="relative w-full overflow-hidden">
                    <div className="overflow-x-hidden" ref={emblaRef}>
                        <div className="flex">
                            {allreview.map((item, index) => (
                                <div
                                    key={index}
                                    className="
                          shrink-0
                          xl:w-75
                          lg:w-65
                          md:w-60
                          sm:w-50
                          w-42
                          mx-3
                          mb-2
                        "
                                >
                                    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200">
                                        <img
                                            src={item.image?.url}
                                            alt={`image-${index}`}
                                            className="w-full h-44 md:h-48 lg:h-72 object-cover rounded-t-xl"
                                        />

                                        <div className="flex items-center gap-1 px-3 pt-3">
                                            {[...Array(5)].map((_, i) => {
                                                const ratingValue = i + 1;
                                                if (ratingValue <= Math.floor(item.rating)) {
                                                    return (
                                                        <FaStar
                                                            key={i}
                                                            className="text-yellow-500"
                                                            size={16}
                                                        />
                                                    );
                                                } else if (ratingValue - item.rating <= 0.5) {
                                                    return (
                                                        <FaStarHalfAlt
                                                            key={i}
                                                            className="text-yellow-500"
                                                            size={16}
                                                        />
                                                    );
                                                } else {
                                                    return (
                                                        <FaRegStar
                                                            key={i}
                                                            className="text-yellow-500"
                                                            size={16}
                                                        />
                                                    );
                                                }
                                            })}
                                        </div>

                                        <div className="p-3 flex flex-col justify-center items-center">
                                            <div className=" flex gap-1 justify-center items-center">


                                                <p className="font-semibold max-md:text-md md:text-lg text-gray-800 text-sm mb-1 line-clamp-1">
                                                    {item.name}
                                                </p>
                                                <p>
                                                    <MdVerified size={16} />
                                                </p>
                                            </div>
                                            <div className="text-gray-600 max-md:text-sm md:text-md text-base line-clamp-4">
                                                {item.text}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={scrollPrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-2 rounded-full z-50"
                    >
                        <MdOutlineKeyboardArrowLeft />
                    </button>

                    <button
                        onClick={scrollNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-2 rounded-full z-50"
                    >
                        <MdChevronRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShowReviews;