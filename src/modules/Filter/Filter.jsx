import React from 'react';
import PropTypes from 'prop-types';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';


const Filter = ({ value, onChange }) => (
  <InputLabel sx={{ display: 'flex', flexDirection:'column', gap:'10px', marginBottom:'30px', padding:'0px 16px'}}>
    Find contacts by name
    <OutlinedInput type="text" value={value} onChange={onChange} />
  </InputLabel>
);

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange:PropTypes.func.isRequired,
}
