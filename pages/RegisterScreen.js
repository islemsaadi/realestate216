import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity,ScrollView } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/themes'
import { userNameValidator } from '../helpers/userNameValidator'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator } from '../helpers/nameValidator'
import { telValidator } from '../helpers/telValidator'
import { adresseValidator } from '../helpers/adresseValidator'
import { villeValidator } from '../helpers/villeValidator'
import { regionValidator } from '../helpers/regionValidator'


export default function RegisterScreen({ navigation }) {
  const [userName, setuserName] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [name, setName] = useState({ value: '', error: '' })
  const [tel, setTel] = useState({ value: '', error: '' })
  const [adresse, setAdresse] = useState({ value: '', error: '' })
  const [ville, setVille] = useState({ value: '', error: '' })
  const [region, setRegion] = useState({ value: '', error: '' })




  const onSignUpPressed = () => {
    const nameError = nameValidator(name.value)
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    const userNameError = userNameValidator(userName.value)
    const telError = telValidator(tel.value)
    const adresseError = adresseValidator(adresse.value)
    const villeError = villeValidator(ville.value)
    const regionError = regionValidator(region.value)


    if (emailError || passwordError || nameError || userNameError || telError || adresseError || villeError || regionError) {
      setName({ ...name, error: nameError })
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      setuserName({ ...userName, error: passwordError })
      setTel({ ...tel, error: passwordError })
      setAdresse({ ...adresse, error: passwordError })
      setRegion({ ...region, error: passwordError })
      setVille({ ...ville, error: passwordError })


      return
    }
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    })
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <ScrollView showsVerticalScrollIndicator={false}>

      <Logo />
      <Header>Create Account</Header>
      <TextInput
        label="userName"
        returnKeyType="next"
        value={userName.value}
        onChangeText={(text) => setuserName({ value: text, error: '' })}
        error={!!userName.error}
        errorText={userName.error}
      />

      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />
      <TextInput
        label="Phone number"
        returnKeyType="next"
        value={tel.value}
        onChangeText={(text) => setTel({ value: text, error: '' })}
        error={!!tel.error}
        errorText={tel.error}
      />
      <TextInput
        label="address"
        returnKeyType="next"
        value={adresse.value}
        onChangeText={(text) => setAdresse({ value: text, error: '' })}
        error={!!adresse.error}
        errorText={adresse.error}
      />
      <TextInput
        label="city"
        returnKeyType="next"
        value={ville.value}
        onChangeText={(text) => setVille({ value: text, error: '' })}
        error={!!ville.error}
        errorText={ville.error}
      />
      <TextInput
        label="Region"
        returnKeyType="next"
        value={region.value}
        onChangeText={(text) => setRegion({ value: text, error: '' })}
        error={!!region.error}
        errorText={region.error}
      />
      <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={{ marginTop: 24 }}
        
      >
        Sign Up
      </Button>
      </ScrollView>

      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.green,
  },
})
