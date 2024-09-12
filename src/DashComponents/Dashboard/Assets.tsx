"use client";
import TableComp from "./TableComp";

import {
   ToggleGroup,
   ToggleGroupItem,
} from "../../components/ui/toggle-group";
import * as React from "react";
import {
   CartesianGrid,
   Line,
   LineChart,
   XAxis,
   YAxis,
   Brush,
   Tooltip,
   ResponsiveContainer,
   ReferenceLine,  // Import ReferenceLine
} from "recharts";

import {
   Card,
   CardContent,
   CardHeader,
   CardTitle,
} from "../../components/ui/card";
import {
   ChartConfig,
   ChartContainer,
   ChartTooltipContent,
} from "../../components/ui/chart";

import SubNavMenu from "../SubNavMenu/SubNavMenu";


const chartData = [
   { date: "2024-04-01", Y: 222, X: 150, Z: 100 },
   { date: "2024-04-02", Y: 97, X: 180, Z: 200 },
   { date: "2024-04-03", Y: 167, X: -120, Z: 50 },
   { date: "2024-04-04", Y: 242, X: 260, Z: 150 },
   { date: "2024-04-05", Y: 373, X: 290, Z: -300 },
   { date: "2024-04-06", Y: 301, X: 340, Z: 250 },
   { date: "2024-04-07", Y: 245, X: 180, Z: -120 },
   { date: "2024-04-08", Y: -409, X: 320, Z: 50 },
   { date: "2024-04-09", Y: 59, X: 110, Z: 100 },
   { date: "2024-04-10", Y: 261, X: 190, Z: 200 },
   { date: "2024-04-11", Y: 327, X: 350, Z: 150 },
   { date: "2024-04-12", Y: 292, X: 210, Z: 300 },
   { date: "2024-04-13", Y: 342, X: 380, Z: 250 },
   { date: "2024-04-14", Y: 137, X: 220, Z: 120 },
   { date: "2024-04-15", Y: -120, X: -170, Z: 50 },
   { date: "2024-04-16", Y: 138, X: 190, Z: 100 },
   { date: "2024-04-17", Y: 446, X: -360, Z: -200 },
   { date: "2024-04-18", Y: 364, X: 410, Z: 150 },
   { date: "2024-04-19", Y: -243, X: 180, Z: 300 },
   { date: "2024-04-20", Y: 89, X: 150, Z: -250 },
   { date: "2024-04-21", Y: 137, X: 200, Z: 120 },
   { date: "2024-04-22", Y: 224, X: -170, Z: 50 },
   { date: "2024-04-23", Y: 138, X: 230, Z: 100 },
   { date: "2024-04-24", Y: 387, X: 290, Z: 200 },
   { date: "2024-04-25", Y: 215, X: 250, Z: 150 },
   { date: "2024-04-26", Y: 75, X: 130, Z: 300 },
   { date: "2024-04-27", Y: 383, X: 420, Z: 250 },
   { date: "2024-04-28", Y: 122, X: 180, Z: 120 },
   { date: "2024-04-29", Y: 315, X: 240, Z: 50 },
   { date: "2024-04-30", Y: 454, X: 380, Z: 100 },
   { date: "2024-05-01", Y: 165, X: 220, Z: 200 },
   { date: "2024-05-02", Y: 293, X: 310, Z: 150 },
   { date: "2024-05-03", Y: 247, X: 190, Z: 300 },
   { date: "2024-05-04", Y: 385, X: 420, Z: 250 },
   { date: "2024-05-05", Y: 481, X: 390, Z: 120 },
   { date: "2024-05-06", Y: 498, X: 520, Z: 50 },
   { date: "2024-05-07", Y: 388, X: 300, Z: 100 },
   { date: "2024-05-08", Y: 149, X: 210, Z: 200 },
   { date: "2024-05-09", Y: 227, X: 180, Z: 150 },
   { date: "2024-05-10", Y: 293, X: 330, Z: 300 },
   { date: "2024-05-11", Y: 335, X: 270, Z: 250 },
   { date: "2024-05-12", Y: 197, X: 240, Z: 120 },
   { date: "2024-05-13", Y: 197, X: 160, Z: 50 },
   { date: "2024-05-14", Y: 448, X: 490, Z: 100 },
   { date: "2024-05-15", Y: 473, X: 380, Z: 200 },
   { date: "2024-05-16", Y: 338, X: 400, Z: 150 },
   { date: "2024-05-17", Y: 499, X: 420, Z: 300 },
   { date: "2024-05-18", Y: 315, X: 350, Z: 250 },
   { date: "2024-05-19", Y: 235, X: 180, Z: 120 },
   { date: "2024-05-20", Y: 177, X: 230, Z: 50 },
   { date: "2024-05-21", Y: 82, X: 140, Z: 100 },
   { date: "2024-05-22", Y: 81, X: 120, Z: 200 },
   { date: "2024-05-23", Y: 252, X: 290, Z: 150 },
   { date: "2024-05-24", Y: 294, X: 220, Z: 300 },
   { date: "2024-05-25", Y: 201, X: 250, Z: 250 },
   { date: "2024-05-26", Y: 213, X: 170, Z: 120 },
   { date: "2024-05-27", Y: 420, X: 460, Z: 50 },
   { date: "2024-05-28", Y: 233, X: 190, Z: 100 },
   { date: "2024-05-29", Y: 78, X: 130, Z: 200 },
   { date: "2024-05-30", Y: 340, X: 280, Z: 150 },
   { date: "2024-05-31", Y: 178, X: 230, Z: 300 },
   { date: "2024-06-01", Y: 178, X: 200, Z: 250 },
   { date: "2024-06-02", Y: 470, X: 410, Z: 120 },
   { date: "2024-06-03", Y: 103, X: 160, Z: 50 },
   { date: "2024-06-04", Y: 439, X: 380, Z: 100 },
   { date: "2024-06-05", Y: 88, X: 140, Z: 200 },
   { date: "2024-06-06", Y: 294, X: 250, Z: 150 },
   { date: "2024-06-07", Y: 323, X: 370, Z: 300 },
   { date: "2024-06-08", Y: 385, X: 320, Z: 250 },
   { date: "2024-06-09", Y: 438, X: 480, Z: 120 },
   { date: "2024-06-10", Y: 155, X: 200, Z: 50 },
   { date: "2024-06-11", Y: 92, X: 150, Z: 100 },
   { date: "2024-06-12", Y: 492, X: 420, Z: 200 },
   { date: "2024-06-13", Y: 81, X: 130, Z: 150 },
   { date: "2024-06-14", Y: 426, X: 380, Z: 300 },
   { date: "2024-06-15", Y: 307, X: 350, Z: 250 },
   { date: "2024-06-16", Y: 371, X: 310, Z: 120 },
   { date: "2024-06-17", Y: 475, X: 520, Z: 50 },
   { date: "2024-06-18", Y: 107, X: 170, Z: 100 },
   { date: "2024-06-19", Y: 341, X: 290, Z: 200 },
   { date: "2024-06-20", Y: 408, X: 450, Z: 150 },
   { date: "2024-06-21", Y: 169, X: 210, Z: 300 },
   { date: "2024-06-22", Y: 317, X: 270, Z: 250 },
   { date: "2024-06-23", Y: 480, X: 530, Z: 120 },
   { date: "2024-06-24", Y: 132, X: 180, Z: 50 },
   { date: "2024-06-25", Y: 141, X: 190, Z: 100 },
   { date: "2024-06-26", Y: 434, X: 380, Z: 200 },
   { date: "2024-06-27", Y: 448, X: 490, Z: 150 },
   { date: "2024-06-28", Y: 149, X: 200, Z: 300 },
   { date: "2024-06-29", Y: 103, X: 160, Z: 250 },
   { date: "2024-06-30", Y: 446, X: 400, Z: 120 },
]

const chartConfig: ChartConfig = {
   views: {
      label: "Page Views",
   },
   X: {
      label: "X",
      color: "hsl(var(--chart-1))",
   },
   Y: {
      label: "Y",
      color: "hsl(var(--chart-2))",
   },
   Z: {
      label: "Z",
      color: "hsl(var(--chart-3))",
   },
};

function Assets() {
   const [activeChart] = React.useState<keyof typeof chartConfig>(
      "X"
   );


   return (
      <div >
         <h1 className="text-3xl pb-4 ml-2">Asset Names</h1>
         <SubNavMenu />
         <div className="flex gap-2">
            <Card className="w-[30%] mt-4">
               <CardHeader>
                  <CardTitle>Imported Data</CardTitle>
               </CardHeader>
               <CardContent>
                  <TableComp />
               </CardContent>
            </Card>

            <div className="mt-4 w-[70%]">
               <Card>
                  <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 ">
                     <div className="flex justify-between items-center px-4 py-4">
                        <CardTitle>Line Chart - Interactive</CardTitle>
                        <ToggleGroup  variant="outline" type="multiple" className="flex gap-2">
                           <ToggleGroupItem value="bold" aria-label="X">
                              <p className="h-4 w-4 " >X</p>
                           </ToggleGroupItem>
                           <ToggleGroupItem aria-label="Toggle italic">
                              <p className="h-4 w-4 " >Y</p>
                           </ToggleGroupItem>
                           <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
                              <p className="h-4 w-4 " >Z</p>
                           </ToggleGroupItem>
                        </ToggleGroup>
                     </div>

                  </CardHeader>
                  <CardContent className="px-2 sm:p-6 h-100 ">
                     <ChartContainer config={chartConfig}>
                        <div className="mb-4" style={{ height: 150 }}>
                           <ResponsiveContainer width="100%" height={200} >
                              <LineChart data={chartData} margin={{ left: -16, right: 8, }} syncId="anyId" >
                                 <CartesianGrid vertical={false} />
                                 <Tooltip
                                    content={
                                       <ChartTooltipContent
                                          className="w-[200px]"
                                          nameKey="views"
                                          labelFormatter={(value) =>
                                             new Date(value).toLocaleDateString("en-US", {
                                                month: "short",
                                                day: "numeric",
                                                year: "numeric",
                                             })
                                          }
                                       />
                                    }
                                 />
                                 <Line
                                    dataKey={activeChart}
                                    type="monotone"
                                    stroke={chartConfig[activeChart].color}
                                    strokeWidth={2}
                                    dot={false}
                                 />
                                 {/* Zero line added */}
                                 <ReferenceLine
                                    y={0}

                                    strokeWidth={1}
                                    strokeDasharray="6 3"  // Dotted line style
                                 />

                                 <YAxis
                                    tickLine={true}
                                    axisLine={false}
                                    tickMargin={5}
                                    tickFormatter={(value) => value.toFixed(0)}  // Format Y-axis values
                                 />
                              </LineChart>
                           </ResponsiveContainer>
                        </div>

                        {/* Multiline Chart with Brush */}
                        <div className="mb-4" style={{ height: 150 }}>
                           <ResponsiveContainer width="100%" height={200} >
                              <LineChart data={chartData} margin={{ left: -16, right: 8, top: 20 }} syncId="anyId">
                                 <CartesianGrid vertical={false} />
                                 <XAxis
                                    dataKey="date"

                                    tickLine={false}
                                    axisLine={false}
                                    tickMargin={8}
                                    minTickGap={32}
                                    tickFormatter={(value) => {
                                       const date = new Date(value);
                                       return date.toLocaleDateString("en-US", {
                                          month: "short",
                                          day: "numeric",
                                       });
                                    }}
                                 />

                                 <YAxis
                                    tickLine={true}
                                    axisLine={false}
                                    tickMargin={5}
                                    tickFormatter={(value) => value.toFixed(0)}  // Format Y-axis values
                                 />
                                 <Tooltip
                                    content={
                                       <ChartTooltipContent
                                          className="w-[150px]"
                                          nameKey="views"
                                          labelFormatter={(value) =>
                                             new Date(value).toLocaleDateString("en-US", {
                                                month: "short",
                                                day: "numeric",
                                             })
                                          }
                                       />
                                    }
                                 />
                                 <Line
                                    dataKey="X"
                                    type="monotone"

                                    stroke={chartConfig.X.color}
                                    strokeWidth={2}
                                    dot={false}
                                 />
                                 <Line
                                    dataKey="Y"
                                    type="monotone"
                                    stroke={chartConfig.Y.color}
                                    strokeWidth={2}
                                    dot={false}
                                 />
                                  <Line
                                    dataKey="Z"
                                    type="monotone"

                                    stroke={chartConfig.Z.color}
                                    strokeWidth={2}
                                    dot={false}
                                 />
                                 <Brush dataKey="date" height={30} stroke="#8884d8">
                                    <LineChart data={chartData}    >
                                       <CartesianGrid vertical={false} />
                                       <XAxis dataKey="date" hide />
                                       <Line
                                          dataKey="X"
                                          type="monotone"
                                          stroke={chartConfig.X.color}
                                          dot={false}
                                          strokeWidth={1}
                                       />
                                       <Line
                                          dataKey="Y"
                                          type="monotone"
                                          stroke={chartConfig.Y.color}
                                          dot={false}
                                          strokeWidth={1}
                                       />
                                       <Line
                                          dataKey="Z"
                                          type="monotone"
                                          stroke={chartConfig.Z.color}
                                          dot={false}
                                          strokeWidth={1}
                                       />
                                    </LineChart>
                                 </Brush>
                                 {/* Zero line added */}
                                 <ReferenceLine
                                    y={0}

                                    strokeWidth={1}
                                    strokeDasharray="6 3"  // Dotted line style
                                 />
                              </LineChart>
                           </ResponsiveContainer>
                        </div>
                     </ChartContainer>
                  </CardContent>
               </Card>
            </div>
         </div>
      </div>
   );
}

export default Assets;
