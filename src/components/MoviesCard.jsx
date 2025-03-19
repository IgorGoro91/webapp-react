import {Link} from 'react-router-dom'

export default function MoviesCard( {movie} ){

const { id, title, director, abstract, image } = movie;

    return(

        <>
            <div className="card mb-4">
            <img 
                src={image ? `http://localhost:5000/img/movies/${image}` : "/default.jpg"} 
                alt={title} 
            />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <span>
                        {director}
                    </span>
                    <p>
                        {abstract}
                    </p>

                </div>
                <Link to={`movies/${id}`}> Read More</Link>

            </div>
        
        </>
    )
}