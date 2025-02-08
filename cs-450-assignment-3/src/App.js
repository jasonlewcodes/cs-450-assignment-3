import "./App.css";
import { Component } from "react";
import * as d3 from "d3";
import Child1 from "./Child1";
import Child2 from "./Child2";
import tips from "./tips.csv";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  componentDidMount() {
    d3.csv(tips)
      .then((data) => {
        this.setState({ data });
      })
      .catch((e) => {
        console.log(e);
      });
  }
  render() {
    return (
      <div>
        {this.state.data.length > 0 && (
          <>
            <Child1 data={this.state.data} />
            <Child2 data={this.state.data} />
          </>
        )}
      </div>
    );
  }
}

export default App;
