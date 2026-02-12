import React, { useCallback } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";
import useEmblaCarousel from "embla-carousel-react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { MdVerified } from "react-icons/md";




const allreview = [
    {
        name: "Rahul Sharma",
        rating: 4.8,
        text: "Seven Wonders helped me find the perfect home within my budget. The team was professional, transparent, and supportive throughout the process.",
        image: {
            url: "/reviews/man1.png"
        }
    },
    {
        name: "Priya Verma",
        rating: 5,
        text: "Excellent experience with Seven Wonders. From property visits to documentation, everything was handled smoothly and professionally.",
        image: {
            url: "/reviews/girl1.avif"
        }
    },
    {
        name: "Amit Kumar",
        rating: 4.6,
        text: "Very reliable real estate service. They guided me honestly and helped me make the right investment decision.",
        image: {
            url: "/reviews/man5.webp"
        }
    },
    {
        name: "Neha Singh",
        rating: 4.5,
        text: "Great support and timely updates. Seven Wonders made renting a property a hassle-free experience for me.",
        image: {
            url: "/reviews/girl3.png"
        }
    },
    {
        name: "Vikas Patel",
        rating: 4.9,
        text: "Smooth and transparent property selling experience. The team ensured the best value and quick closure.",
        image: {
            url: "/reviews/man2.png"
        }
    },
    {
        name: "Rohit Mehta",
        rating: 4.7,
        text: "Highly professional real estate consultants. Documentation and communication were clear at every step.",
        image: {
            url: "/reviews/man3.png"
        }
    },
    {
        name: "Anjali Gupta",
        rating: 5,
        text: "Seven Wonders made my home buying journey stress-free. Trustworthy team with excellent market knowledge.",
        image: {
            url: "/reviews/girl2.png"
        }
    },
    {
        name: "Vikram Patel",
        rating: 4.6,
        text: "Honest advice and great commercial property options. I highly recommend Seven Wonders for real estate services.",
        image: {
            url: "/reviews/man4.jpg"
        }
    },
    {
        name: "Pooja Malhotra",
        rating: 5,
        text: "Outstanding service and quick response. Seven Wonders handled everything professionally from start to finish.",
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
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-red-600">
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


                                                <p className="font-semibold max-md:text-md md:text-lg  text-black text-sm mb-1 line-clamp-1">
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