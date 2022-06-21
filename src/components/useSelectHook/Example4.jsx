import React, { useState } from 'react';
import { useSelect } from 'downshift';
import { items, menuStyles } from '../shared';

// useSelect Controlling state
const DropdownSelect = ({ selectedItem, handleSelectedItemChange }) => {
  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({
    items,
    selectedItem,
    onSelectedItemChange: handleSelectedItemChange,
  });
  return (
    <div>
      <label {...getLabelProps()}>Choose an element:</label>
      <button type='button' {...getToggleButtonProps()}>
        {selectedItem || 'Elements'}
      </button>
      <ul {...getMenuProps()} style={menuStyles}>
        {isOpen &&
          items.map((item, index) => (
            <li
              style={
                highlightedIndex === index ? { backgroundColor: '#bde4ff' } : {}
              }
              key={`${item}${index}`}
              {...getItemProps({ item, index })}
            >
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
};

const Example4 = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  function handleSelectedItemChange({ selectedItem }) {
    setSelectedItem(selectedItem);
  }
  return (
    <div>
      <DropdownSelect
        selectedItem={selectedItem}
        handleSelectedItemChange={handleSelectedItemChange}
      />
      <DropdownSelect
        selectedItem={selectedItem}
        handleSelectedItemChange={handleSelectedItemChange}
      />
    </div>
  );
};

export default Example4;
