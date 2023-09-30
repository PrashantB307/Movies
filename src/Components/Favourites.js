import React, { Component } from "react";

export default class Favourites extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      genre: [],
      currGenre: "All Genre",
      currText: "",
      limit: 5,
      currPage: 1,
    };
  }

  
}

