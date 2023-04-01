import { useEffect, useState, useRef } from "react";
import MediaComponentsUI from "./MediaComponentsUI";
//import movieStyle from "E:/imbd-app/styles/Banner/Banner.module.scss";
export default function MediaComponents({ trendingDate, movieStyle }) {
  const [tData, setTData] = useState([trendingDate]);
  const containerRef = useRef(null);
  const handleScroll = (left) => {
    console.log(
      containerRef.current.scrollBy({
        left: left,
        behavior: "smooth",
      })
    );
  };
  return (
   <MediaComponentsUI tData={tData} 
   containerRef={containerRef}
   handleScroll={handleScroll}
   movieStyle={movieStyle}
   />
  );
}
