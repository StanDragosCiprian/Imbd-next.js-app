import SearchUI from "../SearchBarUi/searchUI";
export default function NavComponent({searchEven,buttPress,navStyle,widthDecizion,handleSearchPhone,handleSeach}) {
  return (
    <>
  {searchEven&&<SearchUI style={navStyle}>

    </SearchUI>
    }
      <div className={navStyle.nav}>
        {!buttPress && <p style={{ color: "white" }}>Imbd</p>}

        {widthDecizion && (
          <div>
            <input type="search" className={navStyle.search} onClick={handleSeach}/>
            <button className={navStyle.firstButton}>C</button>
          </div>
        )}
        <div>
          {!widthDecizion && <button onClick={handleSearchPhone}>C</button>}
          {!buttPress && <img alt="n-avem" />}
        </div>
      </div>
    </>
  )
}
