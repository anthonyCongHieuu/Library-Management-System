import React from 'react';
import { Box, TextField } from '@mui/material';

const SearchBar = ({ onSearch }) => {
    return (
        <Box sx={{ mb: 2 }}>
            <TextField
                label="Search"
                variant="outlined"  // Thay đổi 'varient' thành 'variant'
                placeholder="Search Book..."
                onChange={(e) => onSearch(e.target.value)}
            />
        </Box>
    );
}

export default SearchBar;
