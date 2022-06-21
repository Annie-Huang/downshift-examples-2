import React from 'react';
import { useSelect } from 'downshift';
import { items, menuStyles } from './shared';

// useSelect Basic Usage
const Example1 = () => {
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({ items });

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
      {/* if you Tab from menu, focus goes on button, and it shouldn't. only happens here. */}
      <div tabIndex='0' />
    </div>
  );
};

export default Example1;
