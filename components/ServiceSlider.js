// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowBottomRight,
  RxArrowTopRight,
} from "react-icons/rx";


// service data
export const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Mengukir Jejak dengan Branding yang Kuat.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Menghadirkan Ide-ide Kreatif dalam Setiap Piksel.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Coding yang Tepat, Solusi yang Efisien.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Kata-kata yang Menghidupkan Cerita Bisnis Anda.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Optimasi SEO yang Membawa Anda ke Puncak.',
  },
];


// import swipper react component
import { Swiper, SwiperSlide } from 'swiper/react';

// import swipper style
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import requered modules
import { FreeMode, Pagination } from 'swiper';
import { icons } from "react-icons";

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },

        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },

      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className='h-[240px] sm:h-[340px]'
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0,15)] h-max rounded-lg px-6
              py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0,15)]
               transition-all duration-300">
              {/* icon */}
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              {/* title & desc */}
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">{item.description}</p>
              </div>
              {/* arrow */}
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all
                duration-300"/>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
