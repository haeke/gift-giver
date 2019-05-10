import React, { Component } from "react";
import { connect } from "react-redux";
import { depositAction, withdrawalAction } from "../../actions/balance";

interface State {
  balance: number;
}

export class Wallet extends Component<
  {
    balance: number;
    depositAction: (balance: number) => void;
    withdrawalAction: (balance: number) => void;
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

  withdraw = () => {
    this.props.withdrawalAction(this.state.balance);
  };

  render() {
    return (
      <div className="wallet">
        <div className="walletWrapper">
          <h1 className="balance">Wallet balance: {this.props.balance}</h1>
          <br />
          <div className="btnGroup">
            <input className="input-wallet" onChange={this.updateBalance} />
            <button className="btn-deposit" onClick={this.deposit}>
              Deposit
            </button>
            <button className="btn-withdraw" onClick={this.withdraw}>
              Withdraw
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  balance: state.balance
});

export default connect(
  mapStateToProps,
  { depositAction, withdrawalAction }
)(Wallet);
