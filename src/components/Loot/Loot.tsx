import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBitcoin } from "../../actions/bitcoin";

export class Loot extends Component<{
  bitcoin: any;
  fetchBitcoin: () => void;
}> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBitcoin();
  }

  render() {
    return (
      <div>
        <h1>Bitcoin</h1>
        <p>Conversion Bitcoin: </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  bitcoin: state.bitcoin
});

export default connect(
  mapStateToProps,
  { fetchBitcoin }
)(Loot);
