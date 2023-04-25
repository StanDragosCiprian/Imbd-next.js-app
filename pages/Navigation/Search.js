import { useState} from "react";
import { useRouter } from 'next/router';
import navStyle from "E:/imbd-app/styles/SASS/NavBar/navbarStyle.module.scss";
export default function Search() {
    const[link,setLink]=useState(false)
    const router = useRouter();
    const [searchInput,setSearchInput]=useState();
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
      const handleSeach=(e)=>{
        setSearchInput(e.target.value)
        setLink(true)
      };
      const handleClickButton=()=>{

      }
    return (
    <>
     <form onSubmit={handleSubmit}>
         
            <div>
              <input type="search" className={navStyle.search} onChange={handleSeach} />
              <button className={navStyle.firstButton} onClick={handleClickButton}>C</button>
            </div>
          
        </form>
    </>
)
}