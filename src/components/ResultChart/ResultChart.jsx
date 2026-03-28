import React from "react";
import { Line, LineChart, XAxis, YAxis } from "recharts";

const ResultChart = () => {
  const resultData = [
    { id: 1, name: "Student 1", physics: 78, chemistry: 82, math: 85 },
    { id: 2, name: "Student 2", physics: 65, chemistry: 70, math: 68 },
    { id: 3, name: "Student 3", physics: 88, chemistry: 90, math: 92 },
    { id: 4, name: "Student 4", physics: 72, chemistry: 75, math: 70 },
    { id: 5, name: "Student 5", physics: 60, chemistry: 65, math: 62 },
    { id: 6, name: "Student 6", physics: 91, chemistry: 89, math: 94 },
    { id: 7, name: "Student 7", physics: 55, chemistry: 60, math: 58 },
    { id: 8, name: "Student 8", physics: 80, chemistry: 78, math: 83 },
    { id: 9, name: "Student 9", physics: 67, chemistry: 72, math: 69 },
    { id: 10, name: "Student 10", physics: 85, chemistry: 88, math: 90 },
  ];
  return (
    <div>
      <LineChart width={800} height={500} data={resultData}>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        <Line dataKey="math"></Line>
        <Line dataKey={"physics"} stroke="red"></Line>
        <Line dataKey={"chemistry"} stroke="green"></Line>
      </LineChart>
    </div>
  );
};

export default ResultChart;
