import { useState, useEffect } from "react";
import navStyle from "E:/imbd-app/styles/SASS/NavBar/navbarStyle.module.scss";
import Link from "next/link";
import Search from "./Search";

export default function NavBar() {
  const [buttPress, setButtPress] = useState(false);
  const handleSearchPhone = () => {
    setButtPress(true);
    setWidthDecizion(true);
  };
  return (
    <>
      <div className={navStyle.nav}>
        {!buttPress && <Link href="/"><p style={{ color: "white" }}>Imbdz</p></Link>}
        <Search />
        <div>
          {!buttPress && <img alt="n-avem" />}
        </div>
      </div>
    </>
  );
}
