import { useState, useEffect } from "react";
import navStyle from "E:/imbd-app/styles/SASS/NavBar/navbarStyle.module.scss";
import NavComponent from "./navComponent";
export default function NavBar() {
  const [widthDecizion, setWidthDecizion] = useState();
  const [buttPress, setButtPress] = useState(false);
  const [searchEven,setSearchEven]=useState(false);
  const [searchInput,setSearchInput]=useState([]);

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
  const handleSeach=(e)=>{
    setSearchEven(true);
  };
  useEffect(()=>{

  },[searchInput])
  console.log(widthDecizion);
  return (
    <NavComponent widthDecizion={widthDecizion} 
    buttPress={buttPress}
    searchEven={searchEven}
    searchInput={searchInput}
    navStyle={navStyle}
    handleSearchPhone={handleSearchPhone}
    handleSeach={handleSeach}
    />
  );
}
