import React, { Component } from "react";
import { Form, FormGroup, FormControl, Button } from "react-bootstrap";

interface State {
  person: string;
  present: string;
}

class Gift extends Component<{}, State> {
  state = {
    person: "",
    present: ""
  };
  render() {
    return (
      <div>
        <Form>
          <FormControl
            className="input-person"
            onChange={event => this.setState({ person: event.target.value })}
          />
          <FormControl
            className="input-present"
            onChange={event => this.setState({ present: event.target.value })}
          />
        </Form>
      </div>
    );
  }
}

export default Gift;
