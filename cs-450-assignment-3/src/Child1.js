import { Component } from "react";
import * as d3 from "d3";

class Child1 extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const xAxis = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
    const yAxis = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const billMax = Math.max(...this.props.data.map((r) => r.total_bill));
    // x axis tick lines
    d3.select("#child1")
      .selectAll("#xAxis")
      .data(xAxis)
      .join("line")
      .attr("x1", (d) => 100 + (600 / billMax) * d)
      .attr("y1", 400)
      .attr("x2", (d) => 100 + (600 / billMax) * d)
      .attr("y2", 410)
      .attr("stroke", "black");
    // x labels
    d3.select("#child1")
      .selectAll("#xAxis")
      .data(xAxis)
      .join("text")
      .attr("x", (d) => 100 + (600 / billMax) * d)
      .attr("y", 425)
      .attr("text-anchor", "middle")
      .text((d) => d);
    // y axis tick lines
    d3.select("#child1")
      .selectAll("#yAxis")
      .data(yAxis)
      .join("line")
      .attr("x1", 90)
      .attr("y1", (d) => 400 - 30 * d)
      .attr("x2", 100)
      .attr("y2", (d) => 400 - 30 * d)
      .attr("stroke", "black");
    // y labels
    d3.select("#child1")
      .selectAll("#yAxis")
      .data(yAxis)
      .join("text")
      .attr("x", 75)
      .attr("y", (d) => 405 - 30 * d)
      .attr("text-anchor", "middle")
      .text((d) => d);
    // data
    d3.select("#child1")
      .selectAll("#data")
      .data(this.props.data)
      .join("circle")
      .attr("cx", (d) => 100 + 12 * d.total_bill)
      .attr("cy", (d) => 400 - 30 * d.tip)
      .attr("r", 4)
      .attr("fill", "#69b3a2");
  }
  render() {
    return (
      <svg id="child1" width="800" height="500">
        {/* border */}
        <rect width="800" height="500" fill="none" stroke="grey"></rect>
        {/* x axis */}
        <line x1="100" y1="100" x2="100" y2="400" stroke="black" />
        {/* last x axis tick */}
        <line x1="700" y1="400" x2="700" y2="410" stroke="black" />
        {/* y axis */}
        <line x1="100" y1="400" x2="700" y2="400" stroke="black" />
        {/* x axis label */}
        <text x="400" y="460" textAnchor="middle" fontSize="24px">
          Total Bill
        </text>
        {/* y axis label */}
        <text
          x="50"
          y="250"
          transform="rotate(-90, 50, 250)"
          textAnchor="middle"
          fontSize="24px"
        >
          Tips
        </text>
        {/* title */}
        <text x="400" y="50" textAnchor="middle" fontSize="24px">
          Total Bill vs Tips
        </text>
      </svg>
    );
  }
}

export default Child1;
