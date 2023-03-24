import {Flex,Text, Box, Heading} from "@chakra-ui/react"
import SideBar from "../../../components/SideBar/SideBar"
import { useState } from 'react';
import Chart from 'react-apexcharts';


const MainPage = () => {

    const [options, setOptions] = useState({
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ["January", "February", "March", "April", "May", "June", "July", "August",
          "September", "October", "November", "December"],

       labels: {
        rotate: -90,
        style: {
          fontSize: '12px',
          fontFamily: 'sans-serif',
          fontWeight: 400,
          cssClass: 'apexcharts-xaxis-label',
        },
      },
    },
  });
      const [series, setSeries] = useState([
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 56, 89, 91, 85, 65]
        }
      ]);

//////////////////////////////////////////////////

const [options2, setOptions2] = useState({
    chart: {
      id: "basic-pie"
    },
    labels: ["Pizzas", "Drinks", "Sides"],
    plotOptions: {
      pie: {
        donut: {
          size: "70%"
        }
      }
    }
  });
  const [series2, setSeries2] = useState([200, 100, 50]);
  //////////////////////////////////////

  const [options3, setOptions3] = useState({
    chart: {
      id: "basic-line"
    },
    xaxis: {
      categories: ["Monday", "Tuesday", "Wednsday", "Thursday", "Viernes", "Saturday", "Sunday"]
    },
    title: {
      text: " Busiest times of the week",
      align: "center",
      margin: 20,
      offsetY: 20,
      style: {
        fontSize: "18px",
        fontWeight: "bold",
        color: "#263238"
      }
    },
    yaxis: {
      title: {
        text: "Number of clients",
        style: {
          fontSize: "14px",
          fontWeight: "bold",
          color: "#263238"
        }
      }
    }
  });
  const [series3, setSeries3] = useState([
    {
      name: "Busiest times",
      data: [30, 50, 70, 90, 80, 60, 40]
    }
  ]);
  ////////////////////////////////////////////////////////
  const [options4, setOptions4] = useState({
    chart: {
      id: "basic-scatter"
    },
    xaxis: {
      type: "datetime",
      labels: {
        format: "MMM yyyy"
      }
    },
    title: {
      text: "Number of new registered users per month",
      align: "center",
      margin: 20,
      offsetY: 20,
      style: {
        fontSize: "18px",
        fontWeight: "bold",
        color: "#263238"
      }
    },
    yaxis: {
      title: {
        text: "Number of users",
        style: {
          fontSize: "14px",
          fontWeight: "bold",
          color: "#263238"
        }
      }
    }
  });
  const [series4, setSeries4] = useState([
    {
      name: "New registered users",
      data: [
        [new Date("2022-01-01").getTime(), 100],
        [new Date("2022-02-01").getTime(), 150],
        [new Date("2022-03-01").getTime(), 200],
        [new Date("2022-04-01").getTime(), 250],
        [new Date("2022-05-01").getTime(), 300],
        [new Date("2022-06-01").getTime(), 350],
        [new Date("2022-07-01").getTime(), 400],
        [new Date("2022-08-01").getTime(), 450],
        [new Date("2022-09-01").getTime(), 500],
        [new Date("2022-10-01").getTime(), 550],
        [new Date("2022-11-01").getTime(), 600],
        [new Date("2022-12-01").getTime(), 650]
      ]
    }
  ]);


    
      return (
        <Flex  wrap="wrap" mt="20" justifyContent="space-between"  mr={10} ml={10}>

<Flex flex="1">
        <Box className="app">
          <Box className="row">
            <Box className="mixed-chart">
               <Heading> Sales 2022 </Heading>
              <Chart
                options={options}
                series={series}
                type="bar"
                width="500"
              />
            </Box>
          </Box>
        </Box>
        </Flex>

<Flex ml="20" flex="1">
    <Heading>Sales by category </Heading>
            <Box className="app">
            <Box className="row">
            <Box className="mixed-chart">
                <Chart
                options={options2}
                series={series2}
                type="pie"
                width="500"
                />
            </Box>
            </Box>
            </Box>

            </Flex>

<Flex flex="1">
        <Box className="app">
         <Box className="row">
        <Box className="mixed-chart">
          <Chart
            options={options3}
            series={series3}
            type="line"
            width="500"
          />
        </Box>
      </Box>
    </Box>
    </Flex>


<Flex flex="1"> 
<Text>Number of new registered users per month</Text>
    <Box className="app">
      <Box className="row">
        <Box className="mixed-chart">
          <Chart
            options={options}
            series={series}
            type="scatter"
            width="500"
          />
        </Box>
      </Box>
    </Box>

</Flex>





            </Flex>


      );
    }
    

    // return (
    // <>
    //     <div>Main Page</div>
    //     <Box w="full">
    //     <Chart
    //           options={this.state.options}
    //           series={this.state.series}
    //           type="bar"
    //           width="500"
    //         />
    // </Box>

    // </>

export default MainPage;