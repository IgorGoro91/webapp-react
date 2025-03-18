import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import ReviewCard from "../components/ReviewCard"



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
        return book.reviews?.map((review) => {
          return <ReviewCard key={review.id} review={review} />;
        });
      };

    return(

        <>
        <h1 className="">{movie.title}</h1>
        <img src={book?.image} alt={book?.title} />
            { /*qui va paggina di movies */ }

        <section>
            <h4>Our community reviews</h4>
            {renderReviews()}
        </section>

        </>
    )
}