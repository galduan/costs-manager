// Team Manager: gal duan – 207951930
// Partner: Tomer Gat – 314754607
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const BasicTable = ({ historyData }) => {
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 400 }}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              <TableCell align='right'>Name</TableCell>
              <TableCell align='right'>Category</TableCell>
              <TableCell align='right'>Descripotion</TableCell>
              <TableCell align='right'>Sum</TableCell>
              <TableCell align='right'>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {historyData
              .slice(0)
              .reverse()
              .map((row) => {
                return (
                  <TableRow
                    key={row.date}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align='right'>{row['name']}</TableCell>
                    <TableCell align='right'>{row['category']}</TableCell>
                    <TableCell align='right'>{row['description']}</TableCell>
                    <TableCell align='right'>{row['sum']}</TableCell>
                    <TableCell align='right'>{row['month']}\{row['year']}</TableCell>

                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
export default BasicTable