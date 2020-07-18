import React, { Component } from 'react';
import {withRouter} from 'react-router';
class AddPost extends Component {
    onAddSubmit(event){
        event.preventDefault();

        let title = event.target['title'].value;
        let content = event.target['content'].value;

        let post = {
            title:title,
            content:content,
        }

        let postInJson = JSON.stringify(post);
        console.log(postInJson);
        fetch("http://127.0.0.1:8000/api/posts/", {
            method: "post",
            headers: {
                "Content-Type":"application/json"
            },
            body: postInJson
        })
        .then((response) => {
            console.log(response);
            //this.props.history.push("/posts"); 
        });
        
    }
    render() {
        return (
            <div>
                
                <form onSubmit={this.onAddSubmit} method="POST" role="form">
                
                    <div>
                        <label for="">Title</label>
                        <input type="text" name ="title" placeholder="Enter title..." />
                    </div>
                    <div>
                        <label for="">Content</label>
                        <input type="text" name ="content" placeholder="Enter content..." />
                    </div>
                   
                    <button type="submit" >Submit</button>
                </form>
                
            </div>
        );
    }
}

export default withRouter(AddPost);