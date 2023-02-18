import React, {useEffect, useState} from "react";
import MovieList from './MovieList';
import SlideShow from './SlideShow';
import "./style/MoviesContainer.css";
import axios from "axios";
import BaseApi from "../common/BaseApi";

const MoviesContainer = ({}) => {

    const [allMovies, setAllMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get(BaseApi).then((response) => {
            if (response.data?.data && Array.isArray(response.data?.data)) {
                setAllMovies(response.data.data);
            }
        }).catch((error) => {
            console.log("Error getting data: " + error);
        }).finally(() => setLoading(false));
        }, []);

    const getPopularMovies = () => {
      const deepClone = JSON.parse(JSON.stringify(allMovies));
      return deepClone.sort((a, b) => Number(a.imdb_rating) < Number(b.imdb_rating)).slice(0,4);
    };
    return (<div className="App">
        {loading ? <div className="loading">Loading</div> :
            <>
                <MovieList list={allMovies} />
                <SlideShow list={getPopularMovies()} />
            </>}
        </div>);
}

export default MoviesContainer;
