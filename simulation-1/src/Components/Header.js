import React, { Component } from "react";
import axios from "axios";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      //things to change
    };
  }

  // test(){
  //     axios.get(`/api/test`).then(response => {
  //         console.log(response.data);
  //     });
  // }

  render() {
    return (
      <div className="Header">
        <h1> Heading</h1>
      </div>
    );
  }
}
export default Header;
