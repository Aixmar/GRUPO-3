import { Flex,Text, Box, Heading} from "@chakra-ui/react"
import { BarChart, Bar, XAxis, YAxis } from "recharts";
import { useEffect, useState } from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { getSales } from "../../../redux/actions";


const MainPage = () => {

  const [salesPerMonth, setSalesPerMonth] = useState({
    "January": 0, "February": 0, "March":0, "April":0, "May":0, "June":0, "July":0, "August":0,
          "September":0, "October":0, "November":0, "December":0
  })

  const [earningsperMonth, setEarningsPerMonth] = useState({
    "January": 0, "February": 0, "March":0, "April":0, "May":0, "June":0, "July":0, "August":0,
          "September":0, "October":0, "November":0, "December":0
  })

  const [salesByCategory, setSalesByCategory] = useState({"Pizzas": 0,"Drinks": 0, "Sides": 0})

  const dispatch = useDispatch()

  const sales = useSelector( state => state.sales)
  const formatter = new Intl.DateTimeFormat("en-AR", {month:"long"});

  useEffect(()=>{
    dispatch(getSales())
  },[dispatch])

  useEffect(()=>{
    sales.map(sale=>{
      const date = new Date(sale.createdAt)
      const month = formatter.format(date)
      setSalesPerMonth({...salesPerMonth, [month]: salesPerMonth[month] + sale.products.length})
      setEarningsPerMonth({...earningsperMonth, [month]:earningsperMonth[month] + sale.total})
      sale.products.map(prod=>{
        const category = prod.category
        setSalesByCategory({...salesByCategory, [category]: salesByCategory[category] + 1})
      })
    })
  },[])

  function BasicBarChart({ labels, values }) {
    const data = labels.map((label, index) => ({ label, value: values[index] }));
  
    return (
      <BarChart width={1000} height={300} data={data} barSize={50}>
        <XAxis dataKey="label" interval={0} />
        <YAxis />
        <Bar dataKey="value" fill="#3182ce" />
      </BarChart>
    );
  }

  
return (
  <Flex  wrap="wrap" mt="10" justifyContent="center">
    <Heading marginTop={5}> Sales 2023 </Heading>         
    <BasicBarChart labels={Object.keys(salesPerMonth)} values={Object.values(salesPerMonth)} />
    <Heading marginTop={20}>Total earnings in sales</Heading>
    <BasicBarChart labels={Object.keys(earningsperMonth)} values={Object.values(earningsperMonth)} />
  </Flex>
  );
}
    

export default MainPage;