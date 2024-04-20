import React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function TableData(props) {

  //props containing asset values as rows and holding values as data
  const { row, holdingValues } = props;

  //state to check whether the table is collapsed or not.
  const [open, setOpen] = React.useState(false);

  //create a style variable so that I can reuse it
  const style = {fontWeight:"bold"}

  return (
    <React.Fragment>
      <TableRow>
        <TableCell sx={{width:50}}>
          <IconButton
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell sx={style}>{`${row} (${holdingValues.length})`}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 2 }}>
              <Table>
                <TableHead>
                  <TableRow sx={style}>
                    <TableCell  sx={style}>Name of holding</TableCell>
                    <TableCell  sx={style}>Ticker</TableCell>
                    <TableCell  sx={style}>Average price</TableCell>
                    <TableCell  sx={style}>Marker Price</TableCell>
                    <TableCell  sx={style}>Latest Change Percentage</TableCell>
                    <TableCell  sx={style}>Market Value in Base CCY</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {holdingValues.map((value,index) => (
                    <TableRow key={index}>
                      <TableCell>{value.name}</TableCell>
                      <TableCell>{value.ticker}</TableCell>
                      <TableCell>{value.avg_price}</TableCell>
                      <TableCell>{value.market_price}</TableCell>
                      <TableCell>{value.market_value_ccy}</TableCell>
                      <TableCell>{value.latest_chg_pct}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default TableData;

