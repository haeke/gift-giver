import React, { Component } from "react";
import { connect } from "react-redux";
import { depositAction } from "../../actions/balance";

interface State {
  balance: number;
}

export class Wallet extends Component<
  {
    balance: number;
    depositAction: (balance: number) => void;
  },
  State
> {
  constructor(props) {
    super(props);

    this.state = {
      balance: 0
    };
  }

  updateBalance = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      balance: parseInt(event.target.value, 10)
    });
  };

  deposit = () => {
    this.props.depositAction(this.state.balance);
  };

  render() {
    return (
      <div>
        <h1 className="balance">Wallet balance: {this.props.balance}</h1>
        <br />
        <input className="input-wallet" onChange={this.updateBalance} />
        <button className="btn-deposit" onClick={this.deposit}>
          Deposit
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  balance: state.balance
});

export default connect(
  mapStateToProps,
  { depositAction }
)(Wallet);
