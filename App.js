import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from './components/SearchBar';
import DriverList from './components/DriverList';
import LoadingIndicator from './components/Loading';

export default function App() {
  const [drivers, setDrivers] = useState([]);
  const [filteredDrivers, setFilteredDrivers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const driverNumbers = [1, 2, 3, 4, 6, 7, 10, 11, 14, 16, 18, 20, 22, 23, 24, 55, 44, 63, 27, 50, 31, 43, 77, 81];

  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const fetchPromises = driverNumbers.map(driverNumber =>
          fetch(`https://api.openf1.org/v1/drivers?driver_number=${driverNumber}&session_key=latest`)
            .then(response => response.json())
        );

        const results = await Promise.all(fetchPromises);
        const allDrivers = results.flat().sort((a, b) => a.driver_number - b.driver_number);

        setDrivers(allDrivers);
        setFilteredDrivers(allDrivers);
      } catch (error) {
        console.error('Error fetching driver data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDrivers();
  }, []);

  const handleSearch = (text) => {
    setSearchTerm(text.toLowerCase());
    const filtered = drivers.filter(driver => {
      const name = driver.full_name?.toLowerCase() || ''; 
      const team = driver.team_name?.toLowerCase() || ''; 
      const number = driver.driver_number?.toString() || ''; 

      return name.includes(text.toLowerCase()) || team.includes(text.toLowerCase()) || number.includes(text);
    });

    setFilteredDrivers(filtered);
  };

  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>F1 Drivers</Text>
        <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
        <DriverList drivers={filteredDrivers} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: { 
    flex: 1, 
    backgroundColor: '#f8f8f8' },
  container: { 
    flex: 1, 
    padding: 20 },
  title: { 
    fontSize: 30, 
    fontWeight: 'bold', 
    marginBottom: 10, 
    textAlign: 'center' },
});
