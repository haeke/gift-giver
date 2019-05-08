import React, { Component } from "react";
import { connect } from "react-redux";

class Loot extends Component {
  render() {
    return (
      <div>
        <h1>Loot</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  balance: state.balance;
};

export default connect(mapStateToProps)(Loot);
