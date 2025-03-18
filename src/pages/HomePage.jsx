import MoviesCard from "../components/MoviesCard"
import axios from "axios"
import { useState, useEffect } from "react"


export default function HomePage() {

        const [ movies, setMovies] = useState([])

        const fetchMovies = () => {
            console.log('Feaching movies...')

            axios.get('http://localhost:5000/movies')
            .then(res => {setMovies(res.data) } )
            .catch(error => {console.log(error) } )
        }

        const renderMovies = () => {
            return(
                movies.map( (movie) =>{
                    return(
                        <div className="col" key={movie.id}>
                            <MoviesCard movie={movie}/>
                        </div>
                    )
                })
            )
        }

        useEffect( fetchMovies, [] )
        

    return(
        <>
        
            <h1 className="text-primary">Movies</h1>
            <div className="row row-cols-3">
                <MoviesCard/>
                {            }
                {renderMovies() }
            </div>
        </>
    )
}
