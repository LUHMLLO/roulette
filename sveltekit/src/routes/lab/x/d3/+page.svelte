<script lang="ts">
  import { onMount } from "svelte";
  import * as d3 from "d3";

  onMount(() => {
    const temperatures = [20, 25, 30, 35, 40];

    const svg = d3
      .select("#temperatures-graph")
      .append("svg")
      .attr("width", 400)
      .attr("height", 300);

    // D3 code here
    const xScale = d3
      .scaleLinear()
      .domain([0, temperatures.length - 1])
      .range([50, 350]);

    const xAxis = d3.axisBottom(xScale).tickFormat((d, i) => `Day ${i}`);

    svg.append("g").attr("transform", "translate(0, 250)").call(xAxis);

    const yScale = d3
      .scaleLinear()
      .domain([d3.min(temperatures)!, d3.max(temperatures)!])
      .range([250, 50]);

    const yAxis = d3.axisLeft(yScale);

    svg.append("g").attr("transform", "translate(50, 0)").call(yAxis);

    const line = d3
      .line<number>()
      .x((d, i) => xScale(i))
      .y((d) => yScale(d));

    svg
      .append("path")
      .datum(temperatures)
      .attr("d", line)
      .attr("fill", "none")
      .attr("stroke", "blue");
  });
</script>

<!-- Add your HTML markup for the component here -->
<div id="temperatures-graph" />
