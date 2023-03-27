import { useState, useEffect } from "react";
import SearchUI from "../SearchBarUi/searchUI";
import navStyle from "E:/imbd-app/styles/SASS/NavBar/navbarStyle.module.scss";
import searchStyle from "E:/imbd-app/styles/SASS/NavBar/searchStyle.module.scss"
export default function NavBar() {
  const [widthDecizion, setWidthDecizion] = useState();
  const [buttPress, setButtPress] = useState(false);
  useEffect(() => {
    let win = window.innerWidth;
    console.log(win);
    if (win <= 599 && !buttPress) {
      setWidthDecizion(false);
    } else {
      setWidthDecizion(true);
    }
  });
  const handleSearchPhone = () => {
    setButtPress(true);
    setWidthDecizion(true);
  };
  console.log(widthDecizion);
  return (
    <>
  
      <div className={navStyle.nav}>
        {!buttPress && <p style={{ color: "white" }}>Imbd</p>}

        {widthDecizion && (
          <div>
            <input type="search" className={navStyle.search} />
            <button>C</button>
          </div>
        )}
        <div>
          {!widthDecizion && <button onClick={handleSearchPhone}>C</button>}
          {!buttPress && <img alt="n-avem" />}
        </div>
      </div>
    </>
  );
}
