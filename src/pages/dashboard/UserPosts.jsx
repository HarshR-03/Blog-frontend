import {useState, useEffect} from 'react';

const UserPosts = ()=>{
    const contentstyle = {
        flexGrow: 1,
        padding: "20px",
        display: "flex",
        margin: "20px" /* Added margin */
    }
    return (
        <div id="content" style={{contentstyle}}>
            <h2>John's Blogs</h2>
            <div className="table-responsive table-container" style={{overflowX: "auto",width: "100%",marginBottom: "20px"}}>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Creation Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>My First Blog</td>
                            <td>This is my first blog post.</td>
                            <td>2023-10-26</td>
                            <td>
                                <button className="btn btn-sm btn-primary" style={{margin:"2px"}}>Edit</button>
                                <button className="btn btn-sm btn-danger" style={{margin:"2px"}}>Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Another Post</td>
                            <td>A short description of another blog post.</td>
                            <td>2023-10-25</td>
                            <td>
                                <button className="btn btn-sm btn-primary">Edit</button>
                                <button className="btn btn-sm btn-danger">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Learning Bootstrap</td>
                            <td>My experience learning bootstrap.</td>
                            <td>2023-10-24</td>
                            <td>
                                <button className="btn btn-sm btn-primary">Edit</button>
                                <button className="btn btn-sm btn-danger">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserPosts;