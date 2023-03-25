import { useState } from "react";
import { trending } from "./apiRequest";
import variable from "../styles/variable.module.scss";
import NavBar from "./Navigation/NavBar";
export async function getStaticProps() {
  const trendingDate = await trending();

  return { props: { trendingDate } };
}
export default function Home({ trendingDate }) {
  const [tData, setTData] = useState([trendingDate]);

  console.log(trendingDate);
  return (
    <>
    <NavBar />
      <p className={variable.title}>ceva</p>
      {tData[0].results.map((trends, index) => (
        <div key={index}>
          <p>{trends.title}</p>
          <p>{trends.name}</p>
        </div>
      ))}
    </>
  );
}
