import {useState} from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/themes/dark.min.css';
import 'froala-editor/js/plugins/font_size.min.js';
import 'froala-editor/js/plugins/font_family.min.js';
import 'froala-editor/js/plugins/colors.min.js';
import 'froala-editor/css/plugins/colors.min.css';
import FroalaEditorComponent from 'react-froala-wysiwyg';

const CreatePost = ()=>{
    const [html,setHtml] = useState("");
    const [title,setTitle] = useState("");

    const onTitleChange = (e)=>{
        setTitle(e.target.value);
    } 
    const handleModelChange = (e)=>{
        // console.log(html)
        setHtml(e)
    }

    const handleSubmit = ()=>{
        console.log(title,html);
        if(!title || !html){
            alert("Title or content is missing!")
        }
        else{
            const authHeader = {"Authorization":`Token ${localStorage.getItem("authToken")}`,
                                'Content-Type': 'application/json'}
            const body = {
                "title":title,
                "description": html
            }
            try{
                let resp = fetch("http://zekeyeager18.pythonanywhere.com/test/blogs/",{
                    method: "POST",
                    headers: authHeader,
                    body: JSON.stringify(body)
                })
                alert("successfully posted!");
            }catch(e){
                console.log(e);
            }
        }
    }

    const config = {
        toolbarButtons: [['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript'],
        ['fontFamily', 'fontSize', 'textColor', 'backgroundColor'], 
        ['inlineClass', 'inlineStyle', 'clearFormatting']]
    }

    return (
        <div className='mx-auto mw-100'>
            <div className='w-100 p-3'> 
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Title :</span>
                    </div>
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"
                    onChange={onTitleChange}></input>
                </div>
                <FroalaEditorComponent model={html} onModelChange={handleModelChange} tag='textarea'
                config={config}
            />
                <button onClick={handleSubmit} className="btn btn-danger mt-1"
                >Save</button>
            </div>
        </div>
    )
};

export default CreatePost;