import React, { Component } from "react";
import Slider from "./components/navigation/Slider";
import Gallery from "./components/navigation/Gallery";
import "./App.css";
import navData from "./api/navigation.json";
import request from "superagent";

class App extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    console.log(navData);
    function status(response) {
      if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
      } else {
        return Promise.reject(new Error(response.statusText))
      }
    }

    function json(response) {
      return response.json()
    }

    fetch('./api/navigation.json')
      .then(status)
      .then(json)
      .then(function (data) {
        console.log('Request succeeded with JSON response', data);
      }).catch(function (error) {
        console.log('Request failed', error);
      });
    // request
    //   .get("./navigation.json")
    //   .then(response => {
    //     if (response.status == 200) {
    //       console.log(response);
    //       return response.json;
    //     } else {
    //       console.log("navData here", navData);
    //       this.setState({
    //         data: navData
    //       });
    //       console.log("navData here", this.state.data);

    //       return Promise.reject("something went wrong!");
    //     }
    //   })
    //   .then(data => console.log("data is", data))
    //   .catch(error => console.log("error is", error));
  }

  render() {
    return (
      <div className="App">
        {/* <h1>Let's Put slider Here</h1> */}
        <Gallery />
        <Slider navData={navData}/>
      </div>
    );
  }
}

export default App;
