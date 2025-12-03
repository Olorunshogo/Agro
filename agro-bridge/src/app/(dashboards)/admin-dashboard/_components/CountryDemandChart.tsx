
"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import { motion, AnimatePresence } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "~/components/ui/card";
import type { CountryDemandItem } from "../actions";
import { useEffect, useState } from "react";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

interface Props {
  data: CountryDemandItem[];
}

export default function CountryDemandChart({ data }: Props) {
  const [animatedValues, setAnimatedValues] = useState<number[]>(
    data.map(() => 0)
  );

  // Animate bars from 0 → value
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValues(data.map((d) => d.value));
    }, 250);

    return () => clearTimeout(timer);
  }, [data]);

  const chartData = {
    labels: data.map((d) => d.country),
    datasets: [
      {
        label: "Demand",
        data: animatedValues,
        backgroundColor: [
          "#1E90FF", "#1E5925",
          "#EF4444", "#FF8D28",
          "#6155F5", "#99D0FF",
        ],
        borderRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { backgroundColor: "rgba(0,0,0,0.8)" },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { display: false },
      },
      x: {
        grid: { display: false },
      },
    },
    animation: {
      duration: 1200,
      easing: "easeOutCubic" as const,
    },
  };

  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Country Demand</CardTitle>
      </CardHeader>

      <CardContent>
        <AnimatePresence>
          <motion.div
            key="chart"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="w-full h-full min-h-[300px]"
          >
            <Bar data={chartData} options={options} />
          </motion.div>
        </AnimatePresence>
      </CardContent>
    </Card>
  );
}

