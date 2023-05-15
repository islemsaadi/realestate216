import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const FormWithInputs = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cin, setcin] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [date1, setDate1] = useState('');
  const [date2, setDate2] = useState('');

  const handleFirstNameChange = (text) => {
    setFirstName(text);
  };

  const handleLastNameChange = (text) => {
    setLastName(text);
  };
  const handlecinChange = (text) => {
    setcin(text);
  };

  const handlePhoneNumberChange = (text) => {
    setPhoneNumber(text);
  };

  const handleDate1Change = (text) => {
    setDate1(text);
  };

  const handleDate2Change = (text) => {
    setDate2(text);
  };

  const handleSubmit = () => {
    // Handle form submission with the entered values
    console.log('Form submitted with values:', {
      firstName,
      lastName,
      phoneNumber,
      date1,
      date2,
      cin,
    });
  };

  return (
    <View>
      <TextInput
        value={firstName}
        onChangeText={handleFirstNameChange}
        placeholder="Nom"
      />
      <TextInput
        value={lastName}
        onChangeText={handleLastNameChange}
        placeholder="Prénom"
      />
      <TextInput
        value={cin}
        onChangeText={handlecinChange}
        placeholder="cin"
        keyboardType="numeric"
      />
      <TextInput
        value={phoneNumber}
        onChangeText={handlePhoneNumberChange}
        placeholder="Numéro de téléphone"
        keyboardType="phone-pad"
      />
      <TextInput
        value={date1}
        onChangeText={handleDate1Change}
        placeholder="Date de début"
        keyboardType="numeric"
      />
      <TextInput
        value={date2}
        onChangeText={handleDate2Change}
        placeholder="Date de fin"
        keyboardType="numeric"
      />
      <Button title="réserver" 
      onPress={() => navigation.navigate('LoginScreen')} />
    </View>
  );
};

export default FormWithInputs;
