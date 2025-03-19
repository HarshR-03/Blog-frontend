import Navbar from "../navbar/navbar"
import {Outlet} from 'react-router';

const BaseLayout = ()=>{
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    )
}

export default BaseLayout