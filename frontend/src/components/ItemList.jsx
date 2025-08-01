import React from 'react';
import { Box, Typography, IconButton, List, ListItem, ListItemText, Divider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ItemList = ({ items, onDelete }) => {
  return (
    <Box>
      {Object.entries(items).map(([category, list]) => (
        <Box key={category} sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ mb: 1, textTransform: 'capitalize', borderBottom: '2px solid #1976d2' }}>
            {category}
          </Typography>
          <List>
            {list.length === 0 && (
              <ListItem>
                <ListItemText primary="No entries yet" />
              </ListItem>
            )}
            {list.map(item => (
              <React.Fragment key={item._id}>
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete" onClick={() => onDelete(category, item._id)}>
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemText
                    primary={`${item.name} — $${item.amount.toFixed(2)}`}
                    secondary={`Date: ${item.date ? new Date(item.date).toLocaleDateString() : 'N/A'} | Desc: ${item.description || '-'} | Notes: ${item.notes || '-'}`}
                  />
                </ListItem>
                <Divider component="li" />
              </React.Fragment>
            ))}
          </List>
        </Box>
      ))}
    </Box>
  );
};

export default ItemList;
