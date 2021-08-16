import NavBar from "./NavBar";

const Layout = ({children}) => {
    return (
        <div className="root">
            <NavBar />
            {children}
        </div>
    )
}

export default Layout
