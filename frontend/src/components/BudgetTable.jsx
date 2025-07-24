import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

const BudgetTable = ({ rows = [] }) => (
  <TableContainer
    component={Paper}
    sx={{
      backgroundColor: '#1e1e2f',
      boxShadow: '0 0 15px #FFD700',
      borderRadius: 3,
      overflow: 'hidden',
    }}
  >
    <Table sx={{ minWidth: 650 }} aria-label="budget table">
      <TableHead>
        <TableRow>
          {['Date', 'Type', 'Category', 'Amount', 'Actions'].map((header) => (
            <TableCell
              key={header}
              sx={{
                color: '#FFD700',
                fontWeight: 'bold',
                fontFamily: "'Poppins', sans-serif",
                letterSpacing: 1.2,
                borderBottom: '2px solid #FFD700',
              }}
              align={header === 'Amount' || header === 'Actions' ? 'right' : 'left'}
            >
              {header}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.length > 0 ? (
          rows.map((row, i) => (
            <TableRow
              key={i}
              sx={{
                '&:hover': { backgroundColor: 'rgba(255, 215, 0, 0.1)' },
                cursor: 'default',
              }}
            >
              <TableCell sx={{ color: '#fff' }}>{row.date}</TableCell>
              <TableCell
                sx={{
                  color: row.type === 'Income' ? '#4caf50' : '#f44336',
                  fontWeight: '600',
                }}
              >
                {row.type}
              </TableCell>
              <TableCell sx={{ color: '#fff' }}>{row.category}</TableCell>
              <TableCell sx={{ color: '#fff' }} align="right">
                ${row.amount.toLocaleString()}
              </TableCell>
              <TableCell sx={{ color: '#fff' }} align="right">
                {/* Placeholder for action icons, e.g. edit/delete */}
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={5} align="center" sx={{ color: '#fff', fontStyle: 'italic' }}>
              No data available
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  </TableContainer>
);

export default BudgetTable;
