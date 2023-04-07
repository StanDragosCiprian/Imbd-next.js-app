import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { redirect } from 'next/dist/server/api-utils';
import navStyle from "E:/imbd-app/styles/SASS/NavBar/navbarStyle.module.scss";
import NavComponent from "./navComponent";
export default function NavBar() {
  const [widthDecizion, setWidthDecizion] = useState();
  const [buttPress, setButtPress] = useState(false);
  const [searchEven,setSearchEven]=useState(false);
  const [searchInput,setSearchInput]=useState();
  const[link,setLink]=useState(false)
  const router = useRouter();
  useEffect(() => {
    let win = window.innerWidth;
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
  const handleClickButton=()=>{

  }
  const handleSeach=(e)=>{
   
    setSearchInput(e.target.value)
    setLink(true)
  };
const makeFetch=async (sInput)=>{
  const body= JSON.stringify({title: sInput});
 await fetch('http://localhost:3000/api/userFile',{method:'POST',
 body:body
 }).then(resp=>resp.json()).then(data=>{ 

  router.push(`/MovieRouts/movie/${sInput}`);
 })
}
const handleSubmit = (e) => {
  e.preventDefault();
  makeFetch(searchInput);
};
useEffect(() => {
  if (link) {
    makeFetch(searchInput);
  }
}, [link]);

  return (
    <NavComponent widthDecizion={widthDecizion} 
    buttPress={buttPress}
    searchEven={searchEven}
    searchInput={searchInput}
    navStyle={navStyle}
    handleSearchPhone={handleSearchPhone}
    handleSeach={handleSeach}
    handleClickButton={handleClickButton}
    handleSubmit={handleSubmit}
    />
  );
}
