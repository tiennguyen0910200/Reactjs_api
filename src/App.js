import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Posts from './components/Posts';
import Post from './components/Post';
import AddPost from './components/AddPost';

class App extends React.Component {
  render() {
    return (
      <div>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
        <Router>

          <ul class="nav nav-tabs" role="tablist">
            <li class="nav-item">
              <Link to="/home" class="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">Home</Link>
            </li>
            <li class="nav-item">
              <Link to="/about" class="nav-link" data-toggle="tab" href="#tabs-2" role="tab">About</Link>
            </li>
            <li class="nav-item">
              <Link to="/posts" class="nav-link" data-toggle="tab" href="#tabs-3" role="tab">Posts</Link>
            </li>
            <li class="nav-item">
              <Link to="/addpost" class="nav-link" data-toggle="tab" href="#tabs-4" role="tab">Add Post</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            {/* exact de co the vo ddc trang post */}
            <Route path="/posts" exact>
              <Posts />
            </Route>
            <Route path={"/posts/:id"}>
              <Post />
            </Route>
            <Route path={"/addPost"}>
              <AddPost />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
