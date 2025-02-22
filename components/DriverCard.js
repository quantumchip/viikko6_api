import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';


const DriverCard = ({ driver }) => {
  return (
    <TouchableOpacity onPress={() => alert(`Driver: ${driver.full_name}\nTeam: ${driver.team_name}\nNumber: ${driver.driver_number}`)}>
      <View style={styles.driverCard}>
        <Image
          source={{ uri: driver.headshot_url || 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png' }}
          style={styles.driverImage}
        />

        <View>
          <Text style={styles.name}>{driver.full_name}</Text>
          <Text>Team: {driver.team_name}</Text>
          <Text>Number: {driver.driver_number}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  driverCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  driverImage: { 
    width: 50, 
    height: 50, 
    borderRadius: 25, 
    marginRight: 15 },
  name: { 
    fontSize: 18, 
    fontWeight: 'bold' },
});

export default DriverCard;
