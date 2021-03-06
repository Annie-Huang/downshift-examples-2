import React from 'react';
import Downshift from 'downshift';

const Example2 = () => {
  const books = [
    { name: 'Harry Potter' },
    { name: 'Net Moves' },
    { name: 'Half of a yellow sun' },
    { name: 'The Da Vinci Code' },
    { name: 'Born a crime' },
  ];

  const onChange = (selectedBook) => {
    alert(`your favourite book is ${selectedBook.name}`);
  };

  return (
    <Downshift
      onChange={onChange}
      itemToString={(books) => (books ? books.name : '')}
    >
      // pass the downshift props into a callback
      {({
        getInputProps,
        getItemProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem,
        getLabelProps,
      }) => (
        <div>
          <label
            style={{ marginTop: '1rem', display: 'block' }}
            {...getLabelProps()}
          >
            Choose your favourite book
          </label>{' '}
          <br />
          <input {...getInputProps({ placeholder: 'Search books' })} />
          {isOpen ? (
            <div className='downshift-dropdown'>
              {books
                .filter(
                  (item) =>
                    !inputValue ||
                    item.name.toLowerCase().includes(inputValue.toLowerCase())
                )
                .map((item, index) => (
                  <div
                    className='dropdown-item'
                    {...getItemProps({ key: item.name, index, item })}
                    style={{
                      backgroundColor:
                        highlightedIndex === index ? 'lightgray' : 'white',
                      fontWeight: selectedItem === item ? 'bold' : 'normal',
                    }}
                  >
                    {item.name}
                  </div>
                ))}
            </div>
          ) : null}
        </div>
      )}
    </Downshift>
  );
};

export default Example2;
