import { useState } from "react";
import { requestApi } from "./apiRequest";
import movieStyle from "../styles/NavBarStyle/Banner/banner.module.scss";
import variable from "../styles/variable.module.scss";
import NavBar from "./Navigation/NavBar";
import MediaComponents from "./MovieUi/MediaComponents";
export async function getStaticProps() {

  const trendingDate = await requestApi("https://api.themoviedb.org/3/trending/all/day?api_key=874416021e462f491082a13737e8a2b2");
  const trendingDateTV = await requestApi("https://api.themoviedb.org/3/trending/tv/day?api_key=874416021e462f491082a13737e8a2b2");
  return { props: { trendingDate,trendingDateTV } };
}
export default function Home({ trendingDate,trendingDateTV }) {


  console.log(trendingDate);
  return (
    <>
    <NavBar />
     <MediaComponents trendingDate={trendingDate} movieStyle={movieStyle}/>
     <MediaComponents trendingDate={trendingDateTV} movieStyle={movieStyle}/>
    </>
  );
}
