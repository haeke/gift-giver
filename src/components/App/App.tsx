import React from "react";
import { Button } from "react-bootstrap";

interface Gift {
  id: number;
}

interface State {
  gifts: Array<Gift | any>;
}

class App extends React.Component<{}, State> {
  state = {
    gifts: []
  };

  addGift = () => {
    const { gifts } = this.state;
    // get a list of all of the ids inside the gifts array
    let ids = gifts.map(gift => gift.id);
    // get the maximum id inside of the ids array account for the possiblity of there being no items
    let maxId = ids.length > 0 ? Math.max(...ids) : 0;

    this.setState({
      gifts: [...gifts, { id: maxId + 1 }]
    });
  };
  render() {
    return (
      <div>
        <h1>App Test SnapShot</h1>
        <Button className="btn-add" onClick={this.addGift}>
          Add
        </Button>
      </div>
    );
  }
}

export default App;
