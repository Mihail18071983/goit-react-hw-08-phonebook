import React from 'react';
import PropTypes from 'prop-types';
import StyledFilterLabel from './FilterLabel.styled';

const Filter = ({ value, onChange }) => (
  <StyledFilterLabel>
    Find contacts by name
    <input type="text" value={value} onChange={onChange} />
  </StyledFilterLabel>
);

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange:PropTypes.func.isRequired,
}
