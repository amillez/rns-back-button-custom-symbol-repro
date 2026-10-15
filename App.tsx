import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import {
  ScreenStack,
  ScreenStackItem,
  ScreenStackHeaderBackButtonImage,
} from 'react-native-screens';

export default function App() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <ScreenStack style={{ flex: 1 }}>
      <ScreenStackItem
        screenId="home"
        style={StyleSheet.absoluteFill}
        headerConfig={{ title: 'Home' }}>
        <View style={styles.center}>
          <Button title="Open details" onPress={() => setShowDetails(true)} />
        </View>
      </ScreenStackItem>
      {showDetails && (
        <ScreenStackItem
          screenId="details"
          style={StyleSheet.absoluteFill}
          onDismissed={() => setShowDetails(false)}
          headerConfig={{
            title: 'Details',
            children: (
              <ScreenStackHeaderBackButtonImage
                source={{ uri: 'custom.chevron.left' }}
              />
            ),
          }}>
          <View style={styles.center}>
            <Text>Details</Text>
          </View>
        </ScreenStackItem>
      )}
    </ScreenStack>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
