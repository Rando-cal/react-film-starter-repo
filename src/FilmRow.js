import React, { Component } from 'react'
import FilmPoster from './FilmPoster.js'
import Fave from './Fave.js'


class FilmRow extends Component {

    render() {
        // let posterPath = `"https://image.tmdb.org/t/p/w780${this.props.film.poster_path}"`

        const handleDetailsClick = (film) => {
            console.log('fetchign dteails');
        }

        return (            

            <div className="film-row" onClick={()=>handleDetailsClick('faves')}>


                <FilmPoster
                    film={this.props.film}
                 />
                {/* <img src={"https://image.tmdb.org/t/p/w780" + this.props.film.poster_path} alt="" /> */}


                <div className="film-summary">
                    <Fave />
                    <h1>{this.props.film.title}</h1>
                    <p>{this.props.film.release_date.substr(0,4)}</p>
                </div>
            </div>
            
        )
    }
}

export default FilmRow