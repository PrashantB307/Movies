import React, { Component } from "react";
import { movies } from "./getMovies";

export default class Banner extends Component {
  render() {
    //console.log(movies.results[0]);
    let movie = movies.results[0];
    return (
      <>
        {movie === "" ? (
          <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          
        )}
      </>
    );
  }
}
