import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import ReviewCard from "../components/ReviewCard"
import ReviewForm from "../components/ReviewForm"




export default function MoviesPage() {

    const {id} = useParams()

    const [movie, setMovie] = useState({})

    const fetchMovies = () => {
        axios
        .get(`http://localhost:5000/movies/${id}`)
        .then((res) => setMovie(res.data))
        .catch((error) => console.log(error));
    };

    useEffect(fetchMovies, [id] );


    const renderReviews = () => {
        return movie.reviews?.map((review) => {
          return <ReviewCard key={review.id} review={review} />;
        });
      };

    return(

        <>
        <div className=" ">
        <h1>{movie.title}</h1>
        <img src={`http://localhost:5000/img/movies/${movie.image}`} alt={movie.title} />
            
        </div>
        

        <section>
            <h4>Our community reviews "Commenti"</h4>
            {renderReviews()}
        </section>

        <section>
          { movie?.id && <ReviewForm movie_id={movie.id} reloadReviews={fetchMovies} /> }
        </section>

        </>
    )
}