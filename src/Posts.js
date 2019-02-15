import React ,{ Component } from 'react';
import axios from 'axios';
import './Posts.css';


class Posts extends Component {

    state = {
        posts: []
    }


    
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(post => {

            this.setState({
                posts : post.data
            })
        })
    }



    render() {

        return (

            <div className="posts-content">
                 <h1>Posts Page</h1>


                    <div className="posts">
                    
                        {this.state.posts.map((post,i) => {

                            return (

                                <div className="post__box">
                                        <h3 className="post__title">
                                            {this.state.posts[i].title}
                                        </h3>

                                        <p className="post__desc">
                                        {this.state.posts[i].body}
                                    </p>

                                </div>
                            );

                        })}

                    </div>

            </div> 
        );
    }
}


export default Posts;