import React, { useState } from "react";
import "./style/MovieList.css";

const MovieList = ({ list }) => {
  const [filteredData, setFilteredData] = useState(list);

  return (
    <div className="card-category-5">
      <div className="page-name"> List of Movies </div><br /><br />
      <input
        onChange={event =>
            setFilteredData(list.filter(item =>
                item.title.toLowerCase().includes(event.target.value?.toLowerCase())))
        }
        placeholder="Search a movie..."
        className="search-movie"
      />
        {filteredData.length > 0 ? <div className="all-mv-cards">
        {filteredData.map((item) => (
            <div className="per-card-1" key={item.id}>
              <div className="card-image">
                <img src={item.poster} alt={item.title} />
              </div>
              <div className="card-content">
                <div className="card-title"> {item.title} </div>
                <div className="per-position"> {item.country} </div>
               
                  <li> Year: {item.year} </li>
                  <li> IDB rating: {item.imdb_rating} </li>
                  <li> Genres: {String(item.genres)} </li>
                
              </div>
            </div>
        ))}
        </div> : <div className>No movie found :(</div>}
    </div>
  );
};

export default MovieList;
