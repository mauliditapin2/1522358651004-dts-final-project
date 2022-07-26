import React, { Component } from "react";
import { render } from "react-dom";
import news from "../apis/news";
import axios from "axios";
const urlAPI =
  "https://api.themoviedb.org/3/movie/popular?api_key=556ecd387272c98def9d1545c8a02076";
export default class CardWithFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrypost: [],
      filterCoffee: []
    };
  }
  componentDidMount() {
    // this.GetDataAPi()
    this.GetDataByAxios();
  }
  GetDataByAxios() {
    axios.get(urlAPI).then((res) => {
      this.setState({
        filterCoffee: res.data.results,
      });
      console.log(res.data.results);
    });
  }

  GetDataAPi() {
    fetch(urlAPI)
      .then((res) => {
        if (res.status === 200) return res.json();
      })
      .then((resdata) => {
        console.log(resdata);
        this.setState({
            filterCoffee: resdata,
        });
      });
  }
  handleClick = (event) => {
    const byOrigin = event.target.value;
    let filterCoffee = [];
    if (event.target.value === "all") {
      filterCoffee = this.state.filterCoffee;
    } else {
      filterCoffee = this.state.filterCoffee.filter(
        (coffee) => coffee.vote_average === byOrigin
      );
    }

    this.setState({ filterCoffee: filterCoffee });
  };

  render() {
    const renderAll = this.state.filterCoffee.map((coffee) => (
      <li key={coffee.id}>{coffee.title}</li>
    ));
    return (
      <div>
        <button value="all" onClick={this.handleClick}>
          All
        </button>
        <button value="7" onClick={this.handleClick}>
          7
        </button>
        <button value="7.5" onClick={this.handleClick}>
          7.5
        </button>
        

        <p>{renderAll}</p>
      </div>
    );
  }
}
