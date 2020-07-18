import React, { Component } from 'react';
import {withRouter} from 'react-router';
import './Post.css';

class Post extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: []
        }
        var id = props.match.params.id;
        this.getDetail(id);
       
    }
    
    getDetail(id){
        fetch("http://127.0.0.1:8000/api/posts/"+id)
        .then(response => {
                response.json().then((data) =>  {
                    console.log(data);
                   this.updateUI(data);
                });
        });
    
        }
    
    updateUI(data){
        this.setState({
            posts:data
        })
    }
    render() {
        return (
            <div className="post">
                {this.state.posts.map((item)=>
                <div>
                    <h2>Title of posts </h2>
                    <br/>
                    <h3>Id: {item.id}</h3>
                    <h3>Title: {item.title}</h3>
                    <h3>Content: {item.content} </h3>
                </div>
             )}
                
            </div>
        );
    }
}

export default withRouter(Post);