import { Component } from "react";
import * as d3 from "d3";

class Child2 extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const sun = d3.mean(
      this.props.data.filter((r) => r.day === "Sun").map((r) => r.tip)
    );
    const sat = d3.mean(
      this.props.data.filter((r) => r.day === "Sat").map((r) => r.tip)
    );
    const thur = d3.mean(
      this.props.data.filter((r) => r.day === "Thur").map((r) => r.tip)
    );
    const fri = d3.mean(
      this.props.data.filter((r) => r.day === "Fri").map((r) => r.tip)
    );
    const data = [sun, sat, thur, fri];
    const dataMax = Math.max(...data);
    const xAxis = ["Sun", "Sat", "Thur", "Fri"];
    const yAxis = [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0];
    // x axis tick lines
    d3.select("#child2")
      .selectAll("#xAxis")
      .data(xAxis)
      .join("line")
      .attr("x1", (d, i) => 50 + 140 * (i + 1))
      .attr("y1", 400)
      .attr("x2", (d, i) => 50 + 140 * (i + 1))
      .attr("y2", 410)
      .attr("stroke", "black");
    // x labels
    d3.select("#child2")
      .selectAll("#xAxis")
      .data(xAxis)
      .join("text")
      .attr("x", (d, i) => 50 + 140 * (i + 1))
      .attr("y", 425)
      .attr("text-anchor", "middle")
      .text((d) => d);
    // y axis tick lines
    d3.select("#child2")
      .selectAll("#yAxis")
      .data(yAxis)
      .join("line")
      .attr("x1", 90)
      .attr("y1", (d) => 400 - (300 / dataMax) * d)
      .attr("x2", 100)
      .attr("y2", (d) => 400 - (300 / dataMax) * d)
      .attr("stroke", "black");
    // y labels
    d3.select("#child2")
      .selectAll("#yAxis")
      .data(yAxis)
      .join("text")
      .attr("x", 75)
      .attr("y", (d) => 405 - (300 / dataMax) * d)
      .attr("text-anchor", "middle")
      .text((d) => d.toFixed(1));
    // data
    d3.select("#child2")
      .selectAll("#data")
      .data(data)
      .join("rect")
      .attr("x", (d, i) => -10 + 140 * (i + 1))
      .attr("y", (d) => 400 - (300 / dataMax) * d)
      .attr("height", (d) => (300 / dataMax) * d)
      .attr("width", 120)
      .attr("r", 4)
      .attr("fill", "#69b3a2");
  }
  render() {
    return (
      <svg id="child2" width="800" height="500">
        {/* border */}
        <rect width="800" height="500" fill="none" stroke="grey"></rect>
        {/* x axis */}
        <line x1="100" y1="100" x2="100" y2="400" stroke="black" />
        {/* first x axis tick */}
        <line x1="100" y1="400" x2="100" y2="410" stroke="black" />
        {/* last x axis tick */}
        <line x1="700" y1="400" x2="700" y2="410" stroke="black" />
        {/* y axis */}
        <line x1="100" y1="400" x2="700" y2="400" stroke="black" />
        {/* last y axis tick */}
        <line x1="100" y1="100" x2="90" y2="100" stroke="black" />
        {/* x axis label */}
        <text x="400" y="460" textAnchor="middle" fontSize="24px">
          Day
        </text>
        {/* y axis label */}
        <text
          x="50"
          y="250"
          transform="rotate(-90, 50, 250)"
          textAnchor="middle"
          fontSize="24px"
        >
          Average Tip
        </text>
        {/* title */}
        <text x="400" y="50" textAnchor="middle" fontSize="24px">
          Average Tip by Day
        </text>
      </svg>
    );
  }
}

export default Child2;
