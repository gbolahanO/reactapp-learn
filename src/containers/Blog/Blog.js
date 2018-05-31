import React, { Component } from 'react';

import './Blog.css';
import Posts from './Posts/Posts'

import { Route, NavLink, Switch } from 'react-router-dom';
import NewPosts from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

class Blog extends Component {
    
    render () {
        
        return (
            <div>
                <header className="Blog">
                    <nav>
                        <ul>
                            <li><NavLink 
                                to="/" 
                                exact 
                                activeClassName="active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }} exact>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
            {/* <Route path="/" exact render={() => <h1>Home</h1>}/>
                <Route path="/new-post" exact render={() => <h1>Home 2</h1>}/> */}
                <Route path="/" exact component={Posts} />
                <Switch>
                    <Route path="/new-post" exact component={NewPosts} />
                    <Route path="/:id" exact component={FullPost} />
                </Switch>
            </div>
        );
    }
}

export default Blog;