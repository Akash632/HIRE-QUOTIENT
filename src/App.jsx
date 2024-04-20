import { useState, useEffect } from "react";
import axios from 'axios';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import Paper from '@mui/material/Paper';
import TableData from './components/TableData';
function App() {

  //state to store the data from api
  const [holdings, setHoldings] = useState([]);

  //fetching the data from api
  const fetchData = async () => {
      try {
        const res = await axios.get("https://canopy-frontend-task.now.sh/api/holdings");
        setHoldings(res.data.payload);
      } catch (err) {
        console.error(err);
      }
    };
  
  useEffect(() => {
    fetchData();
  }, []);
  
  // grouping the data into results as per the asset values
  const result = Object.groupBy(holdings, ({ asset_class }) => asset_class);

return (
  <TableContainer component={Paper}>
    <Table>
      <TableBody>
        {Object.entries(result).map(([value,holdings])=>(
          <TableData key={value} row={value} holdingValues={holdings}/>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);
}

export default App;
