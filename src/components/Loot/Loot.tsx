import React, { Component } from "react";
import { connect } from "react-redux";

export const Loot = ({ balance }) => {
  return (
    <div>
      <h1>Loot</h1>
      <p>Balance: {balance}</p>
    </div>
  );
};

const mapStateToProps = state => ({
  balance: state.balance
});

export default connect(mapStateToProps)(Loot);
