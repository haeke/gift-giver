import React, { Component } from "react";
import { connect } from "react-redux";
export class Wallet extends Component<{ balance: number }> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1 className="balance">Wallet balance: {this.props.balance}</h1>
        <br />
        <input className="input-wallet" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  balance: state.balance
});

export default connect(mapStateToProps)(Wallet);
