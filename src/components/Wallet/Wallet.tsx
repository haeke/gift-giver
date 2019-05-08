import React, { Component } from "react";
import { connect } from "react-redux";
export class Wallet extends Component<{ balance: number }> {
  constructor(props) {
    super(props);

    this.state = {
      balance: undefined
    };
  }

  updateBalance = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      balance: parseInt(event.target.value, 10)
    });
  };

  render() {
    return (
      <div>
        <h1 className="balance">Wallet balance: {this.props.balance}</h1>
        <br />
        <input className="input-wallet" onChange={this.updateBalance} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  balance: state.balance
});

export default connect(mapStateToProps)(Wallet);
