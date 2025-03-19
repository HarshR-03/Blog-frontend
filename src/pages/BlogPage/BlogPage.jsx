import img from '../../assets/img/home-bg.jpg';
import {useParams} from 'react-router';
import {useState, useEffect} from 'react';

const BlogPage = ()=>{
    const {id} = useParams();
    const [content,setcontent] = useState(null);
    useEffect(async()=>{
        console.log(id);
        let authHeader = {}
        authHeader["Authorization"] = `Token ${localStorage.getItem('authToken')}`;
        console.log(authHeader);      
        try{
            let data = [];
            data = await fetch(`http://localhost:8000/test/blogs/${id}`, {headers:authHeader})
            data = await data.json();
            console.log(data);
            setcontent(data);
        }
        catch(e){
            console.log(e);
        }
    },[]);
    const pageStyle = {
        height : "100vh",
        width : "100vw",
        backgroundColor : "red", 
        backgroundImage: `url(${img})`
    };
    const contentStyle = {
        width : "70%",
        margin: "0 auto 2em",
        padding: "2rem",
        height: "100vh",
        backgroundColor:"white",
    }

    return (
        <div style={pageStyle}>
            <div style={contentStyle}>
                {content ? <div><h1>{content.title}</h1>
                            <div dangerouslySetInnerHTML={{ __html: content.description }}>
                            </div>
                            </div>
                :
                <div></div>}                
            </div>
        </div>
    );
}

export default BlogPage;