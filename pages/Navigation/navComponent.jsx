import SearchUI from "../SearchBarUi/searchUI";
import Link from "next/link";
export default function NavComponent({ searchEven, buttPress, navStyle, widthDecizion, handleSearchPhone, handleSeach, handleClickButton ,handleSubmit}) {
  return (
    <>


      {//searchEven&&<SearchUI style={navStyle}>

        //</SearchUI>
      }
      <div className={navStyle.nav}>
        {!buttPress && <Link href="/"><p style={{ color: "white" }}>Imbd</p></Link>}
        <form onSubmit={handleSubmit}>
          {widthDecizion && (
            <div>
              <input type="search" className={navStyle.search} onChange={handleSeach} />
              <button className={navStyle.firstButton} onClick={handleClickButton}>C</button>
            </div>
          )}
        </form>
        <div>
          {!widthDecizion && <button onClick={handleSearchPhone} >C</button>}
          {!buttPress && <img alt="n-avem" />}
        </div>
      </div>
    </>
  )
}
