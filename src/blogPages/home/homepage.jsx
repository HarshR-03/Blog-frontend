// import '../styles.css'
import styles from '../BlogPage.module.css'
import '../BlogPage.module.css'
import {useState, useEffect} from 'react';
import { NavLink } from 'react-router';

const BlogPreview = ({props})=>{
  return (
    <div className="post-preview">
      <a href="post.html">
        <NavLink to={`/blog/${props.id}`}>
        <h2 className="post-title">{props.title}</h2>
        <h3 className="post-subtitle">Problems look mighty small from 150 miles up</h3>
        </NavLink>
      </a>
      <p className="post-meta">
        Posted by
        <a href="#!" style={{margin:"2em"}}>{props.author_name}</a>
        on September 24, 2023
      </p>
    </div>
  );
}


const Home = ()=>{
    const [blogsarray, setBlogsArray] = useState([]);
    useEffect(async ()=>{
      let authHeader = {}
      authHeader["Authorization"] = `Token ${localStorage.getItem('authToken')}`;
      console.log(authHeader);      
      try{
        let data = [];
        data = await fetch("http://localhost:8000/test/blogs/", {headers:authHeader})
        data = await data.json();
        console.log(data);
        setBlogsArray(data);
      }
      catch(e){
        console.log(e);
      }
    },[]);

    return (
        <>
    <div className="homepage">
      <header className={`masthead ${styles.masthead}`} style={{ backgroundImage: "url('../../src/assets/img/home-bg.jpg')" }}>
        <div className="container position-relative px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="site-heading">
                <h1>Clean Blog</h1>
                <span className="subheading">A Blog Theme by Start Bootstrap</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Main Content*/}
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            {blogsarray.map((blog)=>{return (
              <div key={blog.id}>
                <BlogPreview props={blog}/>
                <hr className="my-4" />
             </div>
            )})}
            {/* Pager*/}
            <div className="d-flex justify-content-end mb-4">
              <a className="btn btn-primary text-uppercase" href="#!">
                Older Posts →
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Footer*/}
      <footer className="border-top">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <ul className="list-inline text-center">
                <li className="list-inline-item">
                  <a href="#!">
                    <span className="fa-stack fa-lg">
                      <i className="fas fa-circle fa-stack-2x"></i>
                      <i className="fab fa-twitter fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!">
                    <span className="fa-stack fa-lg">
                      <i className="fas fa-circle fa-stack-2x"></i>
                      <i className="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!">
                    <span className="fa-stack fa-lg">
                      <i className="fas fa-circle fa-stack-2x"></i>
                      <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
              </ul>
              <div className="small text-center text-muted fst-italic">Copyright &copy; Your Website 2023</div>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </>
    )
}

export default Home


const temp = [
  // '<div className="post-preview">
  //             <a href="post.html">
  //               <h2 className="post-title">I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.</h2>
  //             </a>
  //             <p className="post-meta">
  //               Posted by
  //               <a href="#!">Start Bootstrap</a>
  //               on September 18, 2023
  //             </p>
  //           </div>
  //           {/* Divider*/}
  //           <hr className="my-4" />
  //           {/* Post preview*/}
  //           <div className="post-preview">
  //             <a href="post.html">
  //               <h2 className="post-title">Science has not yet mastered prophecy</h2>
  //               <h3 className="post-subtitle">We predict too much for the next year and yet far too little for the next ten.</h3>
  //             </a>
  //             <p className="post-meta">
  //               Posted by
  //               <a href="#!">Start Bootstrap</a>
  //               on August 24, 2023
  //             </p>
  //           </div>
  //           {/* Divider*/}
  //           <hr className="my-4" />
  //           {/* Post preview*/}
  //           <div className="post-preview">
  //             <a href="post.html">
  //               <h2 className="post-title">Failure is not an option</h2>
  //               <h3 className="post-subtitle">Many say exploration is part of our destiny, but it’s actually our duty to future generations.</h3>
  //             </a>
  //             <p className="post-meta">
  //               Posted by
  //               <a href="#!">Start Bootstrap</a>
  //               on July 8, 2023
  //             </p>
  //           </div>'
]