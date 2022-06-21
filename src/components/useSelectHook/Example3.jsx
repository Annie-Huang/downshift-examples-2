import React from 'react';
import { useSelect } from 'downshift';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  Button,
  FormLabel,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import { items, useStyles } from './utils';

// useSelect MaterialUI
const Example3 = () => {
  const classes = useStyles();
  const itemToString = (item) => item.primary;
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({
    items,
    itemToString,
  });
  return (
    <div>
      <FormLabel {...getLabelProps()}>Choose an employee:</FormLabel>
      <Button
        variant='contained'
        color='secondary'
        className={classes.button}
        {...getToggleButtonProps()}
      >
        {selectedItem ? itemToString(selectedItem) : 'Employees'}
        <ExpandMoreIcon className={classes.rightIcon} />
      </Button>
      <List className={classes.root} {...getMenuProps()}>
        {isOpen &&
          items.map((item, index) => {
            return (
              <ListItem
                key={`${item.primary}-${index}`}
                className={
                  index === highlightedIndex ? classes.highlighted : undefined
                }
                {...getItemProps({
                  item: item,
                  index,
                })}
              >
                <ListItemText
                  primary={item.primary}
                  secondary={item.secondary}
                />
              </ListItem>
            );
          })}
      </List>
    </div>
  );
};

export default Example3;
