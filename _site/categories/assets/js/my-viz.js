document.addEventListener("DOMContentLoaded", function() {
  const svg = d3.select("#myViz")
                .append("svg")
                .attr("width", 500)
                .attr("height", 300);

  svg.append("circle")
     .attr("cx", 150)
     .attr("cy", 150)
     .attr("r", 50)
     .attr("fill", "steelblue");
});
