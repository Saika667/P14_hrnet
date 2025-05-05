import React from 'react'
import { TextField } from '@mui/material'

function SearchBar({ value, onChange }) {
  return (
    <TextField
        label="Search"
        variant="outlined"
        value={ value }
        onChange={ onChange }
        fullWidth
        sx={{ 
            margin: '0 0 2rem 0',
            '& .MuiInputLabel-root': {
                fontFamily: '"Montserrat", sans-serif',
                fontWeight: '600',
                color: '#242471',
            },
            '& .MuiOutlinedInput-notchedOutline': {
                border: '1px solid #242471',
                borderRadius: '12px',
            }
        }}
    />
  )
}

export default SearchBar