import { useEffect, useState, useRef } from "react";
import Link from 'next/link'
//import movieStyle from "E:/imbd-app/styles/Banner/Banner.module.scss";
export default function MediaComponents({ trendingDate, movieStyle }) {
  const [tData, setTData] = useState([trendingDate]);
  const containerRef = useRef(null);

  const handlerCons = async (title) => {
    const body = JSON.stringify({ title: title });

    await fetch('http://localhost:3000/api/userFile', {
      method: 'POST',
      body: body
    }).then(resp => resp.json()).then(data => {


    })
  }
  const handleScroll = (left) => {
    containerRef.current.scrollBy({
      left: left,
      behavior: "smooth",
    })
  };

  return (
    <>

      <button
        onClick={() => handleScroll(500)}
        className={movieStyle.ScrollRight}
      >
        {'>'}
      </button>
      <button
        onClick={() => handleScroll(-500)}
        className={movieStyle.ScrollLeft}
      >
        {'<'}
      </button>
      <div className={movieStyle.slideContainer} ref={containerRef}>
        {tData[0].results.map((trends, index) => (
          <div onClick={() => {
            handlerCons(trends.title || trends.name)

          }
          } key={index}>
            {trends.poster_path && (
              <>
                <Link href={`/MovieRouts/movie/${trends.title || trends.name}`}> <img
                  src={`https://image.tmdb.org/t/p/w500/${trends.poster_path}`}
                  alt="n-avem"
                  className={movieStyle.poster}
                ></img></Link>
                <p>{trends.title || trends.name}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
