import { useState, useEffect } from "react";
import { requestApi } from "./apiRequest";
import movieStyle from "../styles/SASS/Banner/banner.module.scss";
import NavBar from "./Navigation/NavBar";
import MediaComponents from "./MovieUi/MediaComponents";

export async function getStaticProps() {
  const trendingDateDay = await requestApi("https://api.themoviedb.org/3/trending/all/day?api_key=874416021e462f491082a13737e8a2b2");
  const trendingDateTV = await requestApi("https://api.themoviedb.org/3/trending/tv/day?api_key=874416021e462f491082a13737e8a2b2");
  const trendingDateMovie = await requestApi("https://api.themoviedb.org/3/trending/movie/day?api_key=874416021e462f491082a13737e8a2b2");
  const trendingDateWeek = await requestApi("https://api.themoviedb.org/3/trending/all/week?api_key=874416021e462f491082a13737e8a2b2");
  const movieRate = await requestApi("https://api.themoviedb.org/3/movie/top_rated?api_key=874416021e462f491082a13737e8a2b2&language=en-US&page=1");
  const tvRate = await requestApi("https://api.themoviedb.org/3/tv/popular?api_key=874416021e462f491082a13737e8a2b2&language=en-US&page=1");
  return {
    props: {
      trendingDate: trendingDateDay,
      trendingDateTV,
      trendingDateMovie,
      trendingDateWeek: trendingDateWeek,
      movieRate,
      tvRate,
    },
  };
}
export default function Home({
  trendingDate,
  trendingDateTV,
  trendingDateMovie,
  trendingDateWeek,
  movieRate,
  tvRate
}) {
  const [switchTrending, setSwitchTrending] = useState(true);
  const [switchMovie, setSwitchMovie] = useState(true);
  const [contentPeriod, setContentPeriod] = useState("Week");
  const [contentName, setContentName] = useState("Movie");

  const handleSwitch = (t) => {
    if (t === "t") {
      setSwitchTrending(!switchTrending);
    } else if (t === "m") {
      setSwitchMovie(!switchMovie);

    }
  };
  const handleSwitchName = (switchContent, setContent, str1, str2) => {
    switchContent ? setContent(str1) : setContent(str2)
  }
  return (
    <>

      <button onClick={() => { handleSwitch("t"), handleSwitchName(switchTrending, setContentPeriod, "Month", "Week") }} className={movieStyle.button_design}>{contentPeriod}</button>
      {switchTrending && (
        <MediaComponents trendingDate={trendingDate} movieStyle={movieStyle} />
      )}
      {!switchTrending && (
        <MediaComponents
          trendingDate={trendingDateWeek}
          movieStyle={movieStyle}
        />
      )}
      <button onClick={() => { handleSwitch("m"), handleSwitchName(switchMovie, setContentName, "Tv", "Movie") }} className={movieStyle.button_design}>{contentName}</button>
      {switchMovie && (
        <MediaComponents
          trendingDate={trendingDateMovie}
          movieStyle={movieStyle}
        />
      )}
      {!switchMovie && (
        <MediaComponents
          trendingDate={trendingDateTV}
          movieStyle={movieStyle}
        />
      )}
      <MediaComponents trendingDate={movieRate} movieStyle={movieStyle} />
      <MediaComponents trendingDate={tvRate} movieStyle={movieStyle} />
    </>
  );
}
