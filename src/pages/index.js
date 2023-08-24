import { Inter } from "next/font/google";
import Homepage from "@/components/HomePage";
import Users from "@/components/Users";
import Calcu from "@/components/Calcu";
import TicTacToe from "@/components/TicTacToe";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { useEffect } from "react";
import GsapDrag from "@/components/GsapDrag";
import DragAndDrop from "@/components/DragAndDrop";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {


// const myText = "please connect mouse" 

// const handleCappitalize = (str) =>{
//    const intoArr = str.split(" ")
//    console.log(intoArr.length)
//     const newArr = intoArr.map((word)=> word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
//     console.log(newArr)
// }


useEffect(()=>{
// handleCappitalize(myText)

},[])

// const usbDetection = async () =>{

//   try {
//     const device = await navigator.usb.requestDevice({filters:[]});
//     console.log('USB device detected:', device);
//     console.log(device.productName)
//   } catch (error) {
//     console.log('Error detecting USB device:', error);
//   }
// }
       
        
        
    


  return (
    <main className="overflow-x-hidden">

<DragAndDrop/>

   {/* <GsapDrag/> */}


      {/* <Homepage/> */}
      {/* <Users /> */}
      {/* <Calcu/> */}
      {/* <TicTacToe/> */}


      {/* <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide >
          <div className="flex items-center justify-center h-full">
        Slide 1
          </div>
          </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper> */}

    </main>
  );
}
