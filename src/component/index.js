import React, { Component } from "react";

export default class index extends Component {
  state = {
    counter: 0,
    person: {
      fullName: "meriem",
      bio: "no think",
      imgSrc: "./imagePublic.jpg",
      profession: "devOps",
      show: true,
    },
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({
        counter: this.state.counter + 1,
        ...this.person,
      });
    }, 1000);
  }
  render() {
    return (
      <div>
        <p> {`lancer ya ${this.state.counter} seconde`}</p>
        {this.state.person.show && <img src={this.state.person.imgSrc} />}

        <p> {` My Name is ${this.state.person.fullName}`}</p>
        <button
          onClick={() =>
            this.setState({
              person: {
                ...this.state.person,
                show: !this.state.person.show,
              },
            })
          }
        >
          afficher image
        </button>
      </div>
    );
  }
}
