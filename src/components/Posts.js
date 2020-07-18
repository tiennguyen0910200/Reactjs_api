import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Posts extends Component {
    constructor(){
        super();
        this.state = {
            posts: []
        }
        
        this.getData();
       
    }
    
    getData(){
        fetch("http://127.0.0.1:8000/api/posts")
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
            <div className='posts'>
                <h2>Posts</h2>
                {this.state.posts.map(item =>
                        <div>
                            <h3>{item.id}</h3>
                            <h3>{item.title}</h3>
                            <h3>{item.content}</h3>
                            <Link to ={'/posts/'+item.id}>Detail</Link>
                            
                        </div>
                        )}
            </div>
        );
    }
}

export default Posts;