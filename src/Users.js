import React ,{ Component } from 'react';
import axios from 'axios';
import './Users.css';


class Users extends Component {

    state = {

        users: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(user => {

            this.setState({
                users : user.data
            })
        })
    }

    render() {

        return (

            <div className="users-content">
                <h1 className="users__title">User Page</h1>


              
                <div className="users">                     
            
                            {this.state.users.map((user,i) =>{
                                return (
                                    <div className="user__box">    
                                        <h3 className="user__name">
                                            {this.state.users[i].name}  
                                        </h3>
                                        <p className="user__uid">
                                             {this.state.users[i].username} 
                                        </p>
                                        <a href="" className="user__email">
                                             {this.state.users[i].email} 
                                        </a>
                                    </div>
                                );
                                     })
                                } 

                </div>
            </div> 
        );
    }
}


export default Users;