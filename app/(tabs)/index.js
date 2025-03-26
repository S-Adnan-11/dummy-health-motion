import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import PedometerTracker from '../../PedometerTracker';
import ActivityIntensityTracker from '../../ActivityIntensityTracker';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <PedometerTracker />
      <ActivityIntensityTracker />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'space-around', backgroundColor: '#90EE90' },
});
