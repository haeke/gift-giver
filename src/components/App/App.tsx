import React from "react";

interface Gift {
  id: number;
}

interface State {
  gifts: Array<Gift>;
}

class App extends React.Component<{}, State> {
  state = {
    gifts: []
  };
  render() {
    return (
      <div>
        <h1>App Test SnapShot</h1>
        <button className="btn-add">Add</button>
      </div>
    );
  }
}

export default App;
