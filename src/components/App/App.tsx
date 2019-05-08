import React from "react";
import { Button } from "react-bootstrap";
import { maxNumber } from "../../helpers/helpers";

import { createStore } from "redux";
import rootReducer from "../../reducers/balance";
import { Provider } from "react-redux";

const store = createStore(rootReducer);

import Gift from "../Gift/Gift";
import Loot from "../Loot/Loot";

interface GiftInterface {
  id: number;
}

interface State {
  gifts: Array<GiftInterface | any>;
}

class App extends React.Component<{}, State> {
  state = {
    gifts: []
  };

  addGift = () => {
    const { gifts } = this.state;
    // get a list of all of the ids inside the gifts array
    let ids = gifts.map((gift: any) => gift.id);
    // get the maximum id inside of the ids array account for the possiblity of there being no items
    let maxId = maxNumber(ids);

    this.setState({
      gifts: [...gifts, { id: maxId + 1 }]
    });
  };

  removeGift = (id: number) => {
    const gifts = this.state.gifts.filter((gift: any) => gift.id !== id);

    this.setState({ gifts });
  };
  render() {
    const { gifts } = this.state;
    return (
      <div>
        <h1>App Test SnapShot</h1>
        <Button className="btn-add" onClick={this.addGift}>
          Add
        </Button>
        <div className="gift-list">
          {gifts.length > 0 &&
            gifts.map((gift: any) => (
              <Gift key={gift.id} gift={gift} removeGift={this.removeGift}>
                item
              </Gift>
            ))}
        </div>
        <Provider store={store}>
          <Loot />
        </Provider>
      </div>
    );
  }
}

export default App;
