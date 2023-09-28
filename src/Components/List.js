import React, { Component } from "react";
import axios from "axios";
import API_KEY from "../secrets";

export default class List extends Component {
  constructor() {
    super();
    this.state = {
      hover: "",
      parr: [1],
      currPage: 1,
      movies: [],
      favMov: [], // this will store the id of the movies added to favoures
    };
  }

  handleEnter = (id) => {
    this.setState({
      hover: id,
    });
  };

  handleLeave = () => {
    this.setState({
      hover: "",
    });
  };

  changeMovies = async () => {
    let ans = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${this.state.currPage}`
    );
    this.setState({
      movies: [...ans.data.results],
    });
  };

  handleNext = () => {
    let tempArr = [];
    for (let i = 1; i <= this.state.parr.length + 1; i++) {
      tempArr.push(i);
    }
    this.setState(
      {
        parr: [...tempArr],
        currPage: this.state.currPage + 1,
      },
      this.changeMovies
    );
  };

  handlePrev = () => {
    if (this.state.currPage !== 1) {
      this.setState(
        {
          currPage: this.state.currPage - 1,
        },
        this.changeMovies
      );
    }
  };

  handlePageNo = (pageNum) => {
    this.setState(
      {
        currPage: pageNum,
      },
      this.changeMovies
    );
  };
  
  handleFavourites = (movieObj) => {
    let localStoragemovies = JSON.parse(localStorage.getItem("movies")) || [];
    if (this.state.favMov.includes(movieObj.id)) {
      localStoragemovies = localStoragemovies.filter(
        (movie) => movie.id !== movieObj.id
      );
    } else {
      localStoragemovies.push(movieObj);
    }

    console.log(localStoragemovies);

    localStorage.setItem("movies", JSON.stringify(localStoragemovies));
    let tempData = localStoragemovies.map((movieObj) => movieObj.id);
    this.setState({
      favMov: [...tempData],
    });
  };

  async componentDidMount() {
    let ans = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${this.state.currPage}`
    );
    this.setState({
      movies: [...ans.data.results],
    });
  }

  
}
