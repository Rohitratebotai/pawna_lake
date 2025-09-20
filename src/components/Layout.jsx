import { Outlet } from "react-router-dom"
import Header from './Header'
import Footer from './Footer'


function Layout(){
    return (
        <>
        <div>
            <Header/>
            <main className="!min-h-screen bg-background-color">
                <Outlet/>
            </main>
            <Footer/>
        </div>
        </>
    )
}

export default Layout