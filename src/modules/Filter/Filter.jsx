import React from 'react';
import PropTypes from 'prop-types';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';

const Filter = ({ value, onChange }) => (
  <Box
    margin={1}
    marginLeft="auto"
    marginRight="auto"
    boxShadow={
      ' rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;'
    }
    backgroundColor="#ffff"
    borderRadius="5px"
  >
    <InputLabel
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        marginBottom: '30px',
        padding: '10px 16px',
      }}
    >
      Find contacts by name
      <OutlinedInput type="text" value={value} onChange={onChange} />
    </InputLabel>
  </Box>
);

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
