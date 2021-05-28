import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Picker, CheckBox } from 'react-native';
import Constants from 'expo-constants';
import CalendarAsset from './components/calendar';

// npm
import { Card } from 'react-native-paper';


export default function App() {
   const [selectedValue, setSelectedValue] = React.useState("");
   const [isSelected, setSelection] = React.useState(false);
  return (
    <View style={styles.container}>
    <Text style={styles.title}>
    Shemaid
    </Text>
    <View>
    <Card>
    <Card.Title title="Date & Time*"/>
     <Card.Content>
      <CalendarAsset />
      <Text>Booking Date and Time:</Text>
    </Card.Content>
     </Card>
     </View>
     <View>
     <Card>
    <Card.Title title="Payment Mode*"/>
     <Card.Content>
      <Picker
        prompt="Select Payment Method"
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Cash" value="cash" />
        <Picker.Item label="Online Payment" value="op" />
      </Picker>
    </Card.Content>
     </Card>
     </View>
     <View>
     <Card>
    <Card.Title title="Special Requirements"/>
     <Card.Content>
      <TextInput
        style={styles.input}
      />
    </Card.Content>
     </Card>
     </View>
     <Text style={styles.fare}>
     Total Fare{'\n'}
     ₹100.10
     </Text>
     <View style={styles.check}>
     <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.accept}>I accept all terms and conditions</Text>
        </View>
        <View style={styles.po}>
      <Button
        title="Place Order"
        onPress={() => {}}
        disabled={!isSelected}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  fare: {
    fontSize: 30,
    textAlign: "center"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  check: {
    flexDirection: "row",
  },
  accept: {
fontSize: 20,
  },
  po: {
     justifyContent: 'center',
  }
});
