
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card'
import { Button } from '../../components/ui/button'
import { Badge, ChevronLeft, ChevronRight, Copy, Phone, TrendingUp, } from 'lucide-react'
import { Pagination, PaginationContent, PaginationItem } from '../../components/ui/pagination'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '../../components/ui/chart'
import { Label, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart } from 'recharts'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs'

import { Bar, BarChart, XAxis, YAxis } from "recharts"
import SubNavMenu from './SubNavMenu'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../components/ui/table'
import { Separator } from '@radix-ui/react-select'
export const description = "A radial chart with a custom shape"
const chartData = [
  { browser: "safari", visitors: 1260, fill: "var(--color-safari)" },
]


const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

const chartData1 = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
]


const chartConfig1 = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig


function Profile() {
  return (
    <div>
      <h1 className="text-3xl pb-5">Asset Names</h1>
      <SubNavMenu />
      <div className='flex gap-4'>
        <div className="w-[30%] mt-4">
          <Card
            className="overflow-hidden"
            x-chunk="An order details card with order details, shipping information, customer information and payment information."
          >

            <CardContent className="p-6 text-sm">
              <div className="flex flex-row items-start  mb-3">
                <div className="grid gap-0.5">
                  <CardTitle className="group flex items-center gap-2 text-xl">
                    Assest Name
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                    >
                      <Copy className="h-3 w-3" />
                      <span className="sr-only">Copy Order ID</span>
                    </Button>
                  </CardTitle>
                  <CardDescription>Sync: 12:33 Tue</CardDescription>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  <Button size="sm" variant="outline" className="h-8 gap-1">
                    <Phone className="h-3.5 w-3.5" />
                    <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                      Call Operator
                    </span>
                  </Button>
                </div>
              </div>
              <div className="grid gap-2  ">

                <p>This is a brief description of the assests page with the key features and detailsof the owner</p>



              </div>
              <Separator className="my-4" />
              <Tabs defaultValue="account" >
                <TabsList className="grid w-full grid-cols-3 mb-4 ">
                  <TabsTrigger value="account">Asset Profile</TabsTrigger>
                  <TabsTrigger value="password">Alerts</TabsTrigger>
                  <TabsTrigger value="comments">Comments</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-1.5">
                      <div className="font-semibold">Asset Location</div>
                      <address className="grid gap-0.5 not-italic text-muted-foreground">
                        <span>Liam Johnson</span>
                        <span>1234 Main St.</span>
                        <span>Anytown, CA 12345</span>
                      </address>
                    </div>
                    <div className="grid auto-rows-max gap-1.5">
                      <div className="font-semibold">Asset Operator</div>
                      <div className=" grid gap-0.5 text-muted-foreground">
                        <span>Mr. Chinmay Awade</span>

                        <span>+91 7987855875</span>
                      </div>
                    </div>
                  </div>
                  <Separator className="my-4" />
                  <div className="grid gap-1.5">
                    <div className="font-semibold">Make & Manufacturer </div>
                    <dl className="grid gap-1">
                      <div className="flex items-center justify-between">
                        <dt className="text-muted-foreground">Brand Name</dt>
                        <dd>Kirloskar Pumps Private Ltd</dd>
                      </div>
                      <div className="flex items-center justify-between">
                        <dt className="text-muted-foreground">Year of Installation</dt>
                        <dd>
                          <a href="mailto:">June 2023</a>
                        </dd>
                      </div>
                      <div className="flex items-center justify-between">
                        <dt className="text-muted-foreground">Last Service</dt>
                        <dd>
                          <a href="tel:">July 2024</a>
                        </dd>
                      </div>
                    </dl>
                  </div>
                  <Separator className="my-4" />
                  <div className="grid gap-1.5">
                    <div className="font-semibold">Asset Performance</div>
                    <dl className="grid gap-1">
                      <div className="flex items-center justify-between">
                        <dt className="flex items-center gap-1 text-muted-foreground">
        
                          Overall Equipment Efficiency (OEE)
                        </dt>
                        <dd>64%</dd>
                      </div>
                      <div className="flex items-center justify-between">
                        <dt className="flex items-center gap-1 text-muted-foreground">
   
                          MTTR
                        </dt>
                        <dd>8 Hrs</dd>


                      </div>
                      <div className="flex items-center justify-between">
                        <dt className="flex items-center gap-1 text-muted-foreground">
                        
                          MTBF
                        </dt>
                        <dd>8 Hrs</dd>
                      </div>
                    </dl>
                  </div>
                </TabsContent>
                <TabsContent value="password">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Customer</TableHead>
                        <TableHead className="hidden sm:table-cell">
                          Status
                        </TableHead>
                        <TableHead className="hidden md:table-cell">
                          Date
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow className="bg-accent">
                        <TableCell>
                          <div className="font-medium">High Vibration</div>
                          <div className="hidden text-sm text-muted-foreground md:inline">
                            Check DE bearing
                          </div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">
                          <Badge className="text-xs">
                            Fulfilled
                          </Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          2023-06-23
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="font-medium">Olivia Smith</div>
                          <div className="hidden text-sm text-muted-foreground md:inline">
                            olivia@example.com
                          </div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">
                          <Badge className="text-xs">
                            Declined
                          </Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          2023-06-24
                        </TableCell>
                      </TableRow>
                     
                      <TableRow>
                        <TableCell>
                          <div className="font-medium">Noah Williams</div>
                          <div className="hidden text-sm text-muted-foreground md:inline">
                            noah@example.com
                          </div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">
                          <Badge className="text-xs">
                            Fulfilled
                          </Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          2023-06-25
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="font-medium">Emma Brown</div>
                          <div className="hidden text-sm text-muted-foreground md:inline">
                            emma@example.com
                          </div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">
                          <Badge className="text-xs" >
                            Fulfilled
                          </Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          2023-06-26
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="font-medium">Liam Johnson</div>
                          <div className="hidden text-sm text-muted-foreground md:inline">
                            liam@example.com
                          </div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">
                          <Badge className="text-xs" >
                            Fulfilled
                          </Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          2023-06-23
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="font-medium">Olivia Smith</div>
                          <div className="hidden text-sm text-muted-foreground md:inline">
                            olivia@example.com
                          </div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">
                          <Badge className="text-xs" >
                            Declined
                          </Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          2023-06-24
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="font-medium">Emma Brown</div>
                          <div className="hidden text-sm text-muted-foreground md:inline">
                            emma@example.com
                          </div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">
                          <Badge className="text-xs" >
                            Fulfilled
                          </Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          2023-06-26
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TabsContent>
                <TabsContent value="comments">
                  <Separator className="my-4" />
                  <div className='overflow-auto pr-3 h-[500px]'>
                    <div className="grid gap-2 p-5 rounded-lg bg-muted mb-3 ">

                      <dl className="grid gap-1 ">
                        <div className="flex items-center justify-between">
                          <dt className="font-semibold">Brand Name</dt>
                          <dd>July 2023</dd>
                        </div>
                        <div>
                          <div className="flex items-center justify-between">
                            <p>TLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                          </div>
                        </div>
                      </dl>
                    </div>
                    <Separator className="my-4" />
                    <div className="grid gap-2 p-5 rounded-lg bg-muted mb-3">
                      <dl className="grid gap-1 ">
                        <div className="flex items-center justify-between">
                          <dt className="font-semibold">Brand Name</dt>
                          <dd>July 2023</dd>
                        </div>
                        <div>
                          <div className="flex items-center justify-between">
                            <p>TLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                          </div>

                        </div>

                      </dl>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
              <div className="text-xs text-muted-foreground">
                Updated <time dateTime="2023-11-23">November 23, 2023</time>
              </div>
              <Pagination className="ml-auto mr-0 w-auto">
                <PaginationContent>
                  <PaginationItem>
                    <Button size="icon" variant="outline" className="h-6 w-6">
                      <ChevronLeft className="h-3.5 w-3.5" />
                      <span className="sr-only">Previous Order</span>
                    </Button>
                  </PaginationItem>
                  <PaginationItem>
                    <Button size="icon" variant="outline" className="h-6 w-6">
                      <ChevronRight className="h-3.5 w-3.5" />
                      <span className="sr-only">Next Order</span>
                    </Button>
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </CardFooter>
          </Card>
        </div>


        <div className="mt-4 w-[70%]">
          <div className='flex  gap-10'>
            <div>
              <Card className='w-auto h-auto' >
                <CardHeader>
                  <CardTitle>Bar Chart - Mixed</CardTitle>
                  <CardDescription>January - June 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig1}>
                    <BarChart
                      accessibilityLayer
                      data={chartData1}
                      layout="vertical"
                      margin={{
                        left: 0,
                      }}
                    >
                      <YAxis
                        dataKey="browser"
                        type="category"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) =>
                          chartConfig[value as keyof typeof chartConfig]?.label
                        }
                      />
                      <XAxis dataKey="visitors" type="number" hide />
                      <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent hideLabel />}
                      />
                      <Bar dataKey="visitors" layout="vertical" radius={5} />
                    </BarChart>
                  </ChartContainer>
                </CardContent>
                <CardFooter className="flex-col items-start gap-2 text-sm">
                  <div className="flex gap-2 font-medium leading-none">
                    Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                  </div>
                  <div className="leading-none text-muted-foreground">
                    Showing total visitors for the last 6 months
                  </div>
                </CardFooter>
              </Card>
            </div>
            <div className='flex flex-col gap-4'>

              <div className='flex flex-col gap-0'>
                <div className="flex flex-col w-full">
                  <CardHeader className="items-center pb-0">
                    <CardTitle>Radial Chart - Shape</CardTitle>
                    <CardDescription>January - June 2024</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 pb-0">
                    <ChartContainer
                      config={chartConfig}
                      className="mx-auto aspect-square max-h-[200px]"
                    >
                      <RadialBarChart
                        data={chartData}
                        endAngle={100}
                        innerRadius={60}
                        outerRadius={100}
                      >
                        <PolarGrid
                          gridType="circle"
                          radialLines={false}
                          stroke="none"
                          className="first:fill-muted last:fill-background"
                          polarRadius={[66, 54]}
                        />
                        <RadialBar dataKey="visitors" background />
                        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                          <Label
                            content={({ viewBox }) => {
                              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                return (
                                  <text
                                    x={viewBox.cx}
                                    y={viewBox.cy}
                                    textAnchor="middle"
                                    dominantBaseline="middle"
                                  >
                                    <tspan
                                      x={viewBox.cx}
                                      y={viewBox.cy}
                                      className="fill-foreground text-3xl font-bold"
                                    >
                                      {chartData[0].visitors.toLocaleString()}
                                    </tspan>
                                    <tspan
                                      x={viewBox.cx}
                                      y={(viewBox.cy || 0) + 20}
                                      className="fill-muted-foreground"
                                    >
                                      Visitors
                                    </tspan>
                                  </text>
                                )
                              }
                            }}
                          />
                        </PolarRadiusAxis>
                      </RadialBarChart>
                    </ChartContainer>
                  </CardContent>
                 
                </div>
                <div className="flex flex-col w-full">
                  <CardHeader className="items-center pb-0">
                    <CardTitle>Radial Chart - Shape</CardTitle>
                    <CardDescription>January - June 2024</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 pb-0">
                    <ChartContainer
                      config={chartConfig}
                      className="mx-auto aspect-square max-h-[200px]"
                    >
                      <RadialBarChart
                        data={chartData}
                        endAngle={100}
                        innerRadius={60}
                        outerRadius={100}
                      >
                        <PolarGrid
                          gridType="circle"
                          radialLines={false}
                          stroke="none"
                          className="first:fill-muted last:fill-background"
                          polarRadius={[66, 54]}
                        />
                        <RadialBar dataKey="visitors" background />
                        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                          <Label
                            content={({ viewBox }) => {
                              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                return (
                                  <text
                                    x={viewBox.cx}
                                    y={viewBox.cy}
                                    textAnchor="middle"
                                    dominantBaseline="middle"
                                  >
                                    <tspan
                                      x={viewBox.cx}
                                      y={viewBox.cy}
                                      className="fill-foreground text-3xl font-bold"
                                    >
                                      {chartData[0].visitors.toLocaleString()}
                                    </tspan>
                                    <tspan
                                      x={viewBox.cx}
                                      y={(viewBox.cy || 0) + 20}
                                      className="fill-muted-foreground"
                                    >
                                      Visitors
                                    </tspan>
                                  </text>
                                )
                              }
                            }}
                          />
                        </PolarRadiusAxis>
                      </RadialBarChart>
                    </ChartContainer>
                  </CardContent>

                </div>
                <div className="flex flex-col w-full">
                  <CardHeader className="items-center pb-0">
                    <CardTitle>Radial Chart - Shape</CardTitle>
                    <CardDescription>January - June 2024</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 pb-0">
                    <ChartContainer
                      config={chartConfig}
                      className="mx-auto aspect-square max-h-[200px]"
                    >
                      <RadialBarChart
                        data={chartData}
                        endAngle={100}
                        innerRadius={60}
                        outerRadius={100}
                      >
                        <PolarGrid
                          gridType="circle"
                          radialLines={false}
                          stroke="none"
                          className="first:fill-muted last:fill-background"
                          polarRadius={[66, 54]}
                        />
                        <RadialBar dataKey="visitors" background />
                        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                          <Label
                            content={({ viewBox }) => {
                              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                return (
                                  <text
                                    x={viewBox.cx}
                                    y={viewBox.cy}
                                    textAnchor="middle"
                                    dominantBaseline="middle"
                                  >
                                    <tspan
                                      x={viewBox.cx}
                                      y={viewBox.cy}
                                      className="fill-foreground text-3xl font-bold"
                                    >
                                      {chartData[0].visitors.toLocaleString()}
                                    </tspan>
                                    <tspan
                                      x={viewBox.cx}
                                      y={(viewBox.cy || 0) + 20}
                                      className="fill-muted-foreground"
                                    >
                                      Visitors
                                    </tspan>
                                  </text>
                                )
                              }
                            }}
                          />
                        </PolarRadiusAxis>
                      </RadialBarChart>
                    </ChartContainer>
                  </CardContent>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Profile
