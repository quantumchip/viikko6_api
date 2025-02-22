import React from 'react';
import { FlatList } from 'react-native';
import DriverCard from './DriverCard';

const DriverList = ({ drivers }) => {
  return (
    <FlatList
      data={drivers}
      keyExtractor={(item, index) => item.driver_id ? item.driver_id.toString() : index.toString()}
      renderItem={({ item }) => <DriverCard driver={item} />}
    />
  );
};

export default DriverList;
