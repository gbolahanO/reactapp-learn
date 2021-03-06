import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Post from '../../../components/Post/Post';
import axios from 'axios';
import './Posts.css';

class Posts extends Component {
    state = {
      posts: []
    
  }
  componentDidMount() {
      console.log(this.props);
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
          const posts = response.data.slice(0, 4);
          const updatedPosts = posts.map(post => {
              return {
                  ...post,
                  author: 'Gbolahan'
              }
          });
          this.setState({posts: updatedPosts});
      })
      .catch(error => {
        console.log(error);  
        // this.setState({error: true});
      });
  }
  postSelectedHandler(id) {
      this.setState({selectedPostId: id});
  }
  render() { 
    let posts = <p style={{textAlign: 'center'}}>Something went wrong</p>
      
          posts = this.state.posts.map(post => {
            return (
                <Link to={'/' + post.id} key={post.id} >
                    <Post 
                    title={post.title} 
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)} />
                </Link>
            );
          });
      
    return ( 
      <section className="Posts">
        {posts}
      </section>
     );
  }
}
 
export default Posts;