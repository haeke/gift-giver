import React, { Component } from "react";
import { connect } from "react-redux";
export class Wallet extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Wallet balance: {this.props.balance}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  balance: state.balance
});

export default connect(mapStateToProps)(Wallet);
