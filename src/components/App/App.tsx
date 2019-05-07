import React from "react";

interface State {
  gifts: Array<string>;
}

class App extends React.Component<{}, State> {
  state = {
    gifts: []
  };
  render() {
    return (
      <div>
        <h1>App Test SnapShot</h1>
      </div>
    );
  }
}

export default App;
