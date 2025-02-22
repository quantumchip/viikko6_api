import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const SearchBar = ({ searchTerm, onSearch }) => {
  return (
    <TextInput
      style={styles.searchBar}
      placeholder="Search by name, team, or number..."
      value={searchTerm}
      onChangeText={onSearch}
    />
  );
};

const styles = StyleSheet.create({
  searchBar: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingLeft: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
});

export default SearchBar;
