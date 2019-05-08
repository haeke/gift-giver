import React, { Component } from "react";
import { connect } from "react-redux";
class Wallet extends Component {
  render() {
    return (
      <div>
        <h1>Wallet component</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  balance: state.balance
});

export default connect(mapStateToProps)(Wallet);
