import NavBar from "@/pages/Navigation/NavBar";

const Layout = ({children}) => {
    return ( 
        <>
        <NavBar/>
        {children}
        </>
     );
}
 
export default Layout;