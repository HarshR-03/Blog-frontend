import {useState} from 'react';
import CreatePost from "./createPost";
import UserPosts from "./UserPosts"

const DashboardLayout = ()=>{
    const [currentpage, setcurrentpage] = useState(0);

    const handleDashboardButton = ()=>{
        setcurrentpage(0);
    }
    const handleCreatePostButton = ()=>{
        setcurrentpage(1);
    }
    const sidebarstyle1 = {
        display:"flex",
        flexGrow : 1,
    }

    const sidebarstyle2 = {
        width: "250px",
        backgroundColor: "#c3cbd9",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflowY: "auto",
        marginRight: "20px"
    }

    const contentstyle = {
        flexGrow: 1,
        padding: "20px",
        display: "flex",
        margin: "20px" /* Added margin */
    }

    return (
        <div style={sidebarstyle1}>
        <div id="sidebar" style={sidebarstyle2}>
            <h4>Hello John</h4>
            <button className="btn btn-primary" style={{margin:"2px"}} onClick={handleDashboardButton}
            >Dashboard</button>
            <button className="btn btn-secondary" style={{margin:"2px"}} onClick={handleCreatePostButton}
            >Create New Blog</button>
        </div>
        {currentpage==0? 
            <UserPosts/> : <CreatePost/>
        }
    </div>
    )
}

export default DashboardLayout;

