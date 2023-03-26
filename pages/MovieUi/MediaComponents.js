import { useEffect, useState,useRef  } from "react";
//import movieStyle from "E:/imbd-app/styles/Banner/Banner.module.scss";
export default function MediaComponents({ trendingDate,movieStyle}) {
  const [tData, setTData] = useState([trendingDate]);
  console.log(tData);
  //150 225
  const containerRef = useRef(null);
  const handleScroll = () => {
    
    console.log(containerRef.current.scrollBy({
      left: 100,
      behavior: 'smooth'
    }));
  };
  return (
    <>
     <button onClick={handleScroll} className={movieStyle.Scroll}>Scroll</button>
    <div className={movieStyle.slideContainer} ref={containerRef}>
      
      {tData[0].results.map((trends, index) => (
        <div key={index}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${trends.poster_path}`}
            alt="n-avem"
            className={movieStyle.poster}
          ></img>
          <p>{trends.title}</p>
          <p>{trends.name}</p>
        </div>
      ))}
     
    </div>
    </>
    
  );
}
