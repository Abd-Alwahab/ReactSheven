import React ,{ Component } from 'react';
import './Photos.css';
import axios from 'axios';



class Photos extends Component {


    state = {
        photos : []
    }


    componentDidMount()  {

        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(photo => {

            this.setState({
                photos : photo.data
            })
        })
    }

    render() {

        return (

            <div className="photos-content">
            <h1>Photos Page</h1>

            <div className="photos">
            
                {this.state.photos.map((phots,i) => {

                    return (
                        <div className="photo__box">
                            <img src={this.state.photos[i].url} className="photo__img" alt="phots" />
                        <h3 className="photo__name">
                            {this.state.photos[i].title}
                        </h3>
                        </div>
                    )

                })}

            </div>


            </div> 
        );
    }
}


export default Photos;