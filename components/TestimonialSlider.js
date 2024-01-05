// testimonial data
export const testimonialSlider = [
  {
    image: '/t-avt-1.png',
    name: 'Anne Smith',
    position: 'Customer',
    message:
      'Pelayanan luar biasa! Saya sangat puas dengan produk dan layanan yang diberikan oleh saudara mahasiswa ini. Terima kasih atas pengalaman luar biasa.',
  },
  {
    image: '/t-avt-2.png',
    name: 'Jane Doe',
    position: 'Customer',
    message:
      'Produk ini benar-benar mengubah hidup saya. Saya tidak bisa berhenti tersenyum setiap kali saya menggunakannya. Sangat direkomendasikan!',
  },
  {
    image: '/t-avt-3.png',
    name: 'Jhon Doe',
    position: 'Customer',
    message:
      'Tim ini benar-benar profesional. Mereka tidak hanya memenuhi ekspektasi saya, tetapi juga melampaui harapan. Saya sangat senang dengan hasilnya.',
  },
];



// import swipper react component
import { Swiper, SwiperSlide } from 'swiper/react';

// import swipper style
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import requered modules
import { Navigation, Pagination } from 'swiper';

// icons
import { FaQuoteLeft } from 'react-icons/fa';

// next image
import Image from 'next/image';


const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className='h-[400px]'
    >
      {testimonialSlider.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='flex flex-col items-center md:flex-row gap-x-8
            h-full px-16'>
              {/* avatar, name, position */}
              <div className='w-full max-w-[300px] flex flex-col xl:justify-center
              items-center relative xl:mx-0'>
                <div className=' flex flex-col justify-center text-center'>
                  {/* avatar */}
                  <div className='mb-2 mx-auto'>
                    <Image 
                      src={person.image}
                      width={100}
                      height={100}
                      alt=''
                    />
                  </div>
                  {/* name */}
                  <div className='text-lg'>{person.name}</div>
                  {/* position */}
                  <div className='text-[12px] uppercase font-extralight'>{person.position}</div>
                </div>
              </div>
              {/* qoute & message */}
              <div className='flex-1 flex flex-col justify-center
              before:w-[1px] xl:before:bg-white/20 xl:before:absolute
              xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'>
                {/* qoute icon */}
                <div className='mb-4'>
                  <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20
                  mx-auto md:mx-0'/>
                </div>
                {/* message */}
                <div className='xl:text-lg text-center md:text-left'>{person.message}</div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
