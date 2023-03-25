import navStyle from "E:/imbd-app/styles/NavBarStyle/navbarStyle.module.scss";
export default function NavBar() {
  return (
    <header className={navStyle.nav}>
        <div className={navStyle.logoAndMovie}>
        <p style={{color:"white"}}>Imbd</p>
        <p style={{color:"white"}}>Movie</p>
        </div>
        <div>
      <input type="search" className={navStyle.search} />
      <button > Click me</button>
      </div>
      <img alt="n-avem"/>
    </header>
  );
}
