import  { useState, useEffect } from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip, ResponsiveContainer } from 'recharts';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "../../components/ui/card";
import { Button } from '../../components/ui/button';

// Static test data
const initialTestData = [
  { angle: 0, radius: 0.8 },
  { angle: Math.PI / 4, radius: 0.9 },
  { angle: Math.PI / 2, radius: 1.2 },
  { angle: 3 * Math.PI / 4, radius: 0.7 },
  { angle: Math.PI, radius: 1.1 },
  { angle: 5 * Math.PI / 4, radius: 0.8 },
  { angle: 3 * Math.PI / 2, radius: 1.0 },
  { angle: 7 * Math.PI / 4, radius: 0.9 }
];

const VibrationRadarChart = ({ data }: { data: any[] }) => {
  const [formattedData, setFormattedData] = useState<{ angle: string; radius: any; }[]>([]);

  useEffect(() => {
    if (data && data.length > 0) {
      const formatted = data.map(point => ({
        angle: ((point.angle * 180 / Math.PI) % 360).toFixed(0) + '°',
        radius: point.radius
      }));
      setFormattedData(formatted);
      console.log("Formatted data:", formatted);
    } else {
      console.error("No data provided to VibrationRadarChart");
    }
  }, [data]);

  if (!formattedData || formattedData.length === 0) {
    return <div>No data available for the chart.</div>;
  }

  const maxRadius = Math.max(...data.map(point => point.radius));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={formattedData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="angle" />
        <PolarRadiusAxis angle={30} domain={[0, maxRadius]} />
        <Radar name="Vibration" dataKey="radius" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        <Tooltip 
          formatter={(value) => [Number(value).toFixed(2), 'Radius']}
          labelFormatter={(label) => `Angle: ${label}`}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

const CombinedVibrationChartTest = () => {
  const [testData, setTestData] = useState(initialTestData);

  useEffect(() => {
    console.log("Initial test data:", testData);
  }, []);

  const generateNewTestData = () => {
    const newData = initialTestData.map(point => ({
      ...point,
      radius: 0.5 + Math.random() * 0.7 // Random radius between 0.5 and 1.2
    }));
    setTestData(newData);
    console.log("New test data generated:", newData);
  };

  return (
    <Card className="w-full mt-4">
      <CardHeader>
        <CardTitle>Vibration Radar Chart Test</CardTitle>
      </CardHeader>
      <CardContent>
        <Button onClick={generateNewTestData} className="mb-4">
          Generate New Test Data
        </Button>
        <VibrationRadarChart data={testData} />
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Current Test Data:</h3>
          <pre className="bg-gray-100 p-2 rounded mt-2 overflow-auto max-h-60">
            {JSON.stringify(testData, null, 2)}
          </pre>
        </div>
      </CardContent>
    </Card>
  );
};

export default CombinedVibrationChartTest;
