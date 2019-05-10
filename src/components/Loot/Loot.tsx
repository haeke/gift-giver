import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBitcoin } from "../../actions/bitcoin";

export class Loot extends Component<{
  balance: number;
  bitcoin: any;
  fetchBitcoin: () => void;
}> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBitcoin();
  }

  computeBitcoin = () => {
    const { bitcoin } = this.props;

    // make sure the bitcoin object is present
    if (Object.keys(bitcoin).length === 0) return "";

    return (
      this.props.balance / parseInt(bitcoin.bpi.USD.rate.replace(",", ""), 10)
    );
  };

  render() {
    return (
      <div className="loot">
        <div className="lootWrapper">
          <h1>Bitcoin</h1>
          <p>Conversion Bitcoin: {this.computeBitcoin()}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  balance: state.balance,
  bitcoin: state.bitcoin
});

export default connect(
  mapStateToProps,
  { fetchBitcoin }
)(Loot);
