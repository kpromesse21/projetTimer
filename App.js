import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';
// import AsyncStorage from ''
// import AsyncS
const App = () => {
  const [time, setTime] = useState(new Date());
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Charger les alertes depuis AsyncStorage
    loadAlerts();

    return () => clearInterval(timerID);
  }, []);

  const loadAlerts = async () => {
    try {
      lo
      // const storedAlerts = await AsyncStorage.getItem('@alerts');
      const storedAlerts = await Asy
      if (storedAlerts) {
        setAlerts(JSON.parse(storedAlerts));
      }
    } catch (error) {
      console.error('Erreur lors du chargement des alertes :', error);
    }
  };

  const saveAlerts = async () => {
    try {
      await AsyncStorage.setItem('@alerts', JSON.stringify(alerts));
    } catch (error) {
      console.error('Erreur lors de la sauvegarde des alertes :', error);
    }
  };

  const addAlert = () => {
    const newAlerts = [...alerts, new Date().toLocaleTimeString()];
    setAlerts(newAlerts);
    saveAlerts();
  };

  return (
    // <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.container}>
    <View style={styles.container}>
      <View style={styles.clockContainer}>
        <Text style={styles.clockText}>{time.toLocaleTimeString()}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={addAlert} style={styles.button}>
          <Text style={styles.buttonText}>Ajouter une alerte</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.alertsContainer}>
        {alerts.map((alert, index) => (
          <Text key={index} style={styles.alertText}>
            {alert}
          </Text>
        ))}
      </View>
      </View>
    // </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clockContainer: {
    marginBottom: 20,
  },
  clockText: {
    fontSize: 36,
    color: 'white',
  },
  buttonContainer: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#61dafb',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
  alertsContainer: {
    alignItems: 'center',
  },
  alertText: {
    fontSize: 16,
    color: 'white',
    marginVertical: 5,
  },
});

export default App;

