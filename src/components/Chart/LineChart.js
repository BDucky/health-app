import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import './Chart.css';

const CustomLineChart = ({ data, color = '#8fbc8f', height = 200 }) => {
  return (
    <div className="chart-container">
      <ResponsiveContainer width="100%" height={height}>
        <LineChart data={data}>
          <XAxis 
            dataKey="name" 
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#666' }}
          />
          <YAxis hide />
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke={color}
            strokeWidth={2}
            dot={{ fill: color, strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, fill: color }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomLineChart;
