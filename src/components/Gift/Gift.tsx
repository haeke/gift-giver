import React, { Component } from "react";

interface State {
  person: string;
  present: string;
}

class Gift extends Component<{}, State> {
  state = {
    person: "",
    present: ""
  };
  render() {
    return (
      <div>
        <h1>Gift</h1>
      </div>
    );
  }
}

export default Gift;
