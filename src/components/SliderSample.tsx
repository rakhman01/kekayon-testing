import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Basic Swiper styles
import "swiper/css/navigation"; // Optional navigation styles
import { Navigation } from "swiper/modules"; // Correct import for Navigation
import Image from "next/image";

import image from "../../public/images/company_profile/Image.png";
import image1 from "../../public/images/company_profile/Image1.png";
import image2 from "../../public/images/company_profile/Image2.png";
import image3 from "../../public/images/company_profile/Image3.png";
import image4 from "../../public/images/company_profile/Image4.png";

const ImageSlider = () => {
  const images = [
    { src: image, alt: "Travel image 1" },
    { src: image1, alt: "Travel image 2" },
    { src: image2, alt: "Travel image 3" },
    { src: image3, alt: "Travel image 4" },
    { src: image4, alt: "Travel image 5" },
  ];

  return (
    <div className="w-full flex justify-center items-center">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={1} // Show one slide at a time
        centeredSlides
        grabCursor
        className="w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={500} // Adjust width
              height={300} // Adjust height
              className="rounded-lg object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
