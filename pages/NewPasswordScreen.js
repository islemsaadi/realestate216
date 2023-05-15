import React, { useState } from 'react'
import Background from '../components/Background'
import BackButton from '../components/BackButton'
import Logo from '../components/logo'
import Header from '../components/Header'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import { passwordValidator } from '../helpers/passwordValidator'

export default function NewPasswordScreen({ navigation }) {
    const [password, setPassword] = useState({ value: '', error: '' })
    const [passwordd, setPasswordd] = useState({ value: '', error: '' })

    const validpassworddd = () => {
       
        const passwordError = passwordValidator(password.value)
        if ( passwordError ) {
          
          setPassword({ ...password, error: passwordError })
          return
        }
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        })
        const validpasswordd = () => {
            const passwordError = passwordValidator(passwordd.value)
            if ( passwordError ) {
              
              setPasswordd({ ...passwordd, error: passwordError })
              return
            }
            navigation.reset({
              index: 0,
              routes: [{ name: 'Home' }],
            })
      }
    }
      
      

  
  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>New Password</Header>
     
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
        label="confirmPassword"
        returnKeyType="done"
        value={passwordd.value}
        onChangeText={(text) => setPasswordd({ value: text, error: '' })}
        error={!!passwordd.error}
        errorText={passwordd.error}
        secureTextEntry
      />
      <Button
        mode="contained"
        onPress={validpassworddd }


        style={{ marginTop: 16 }}
      >
        NewPassword
      </Button>
    </Background>
  )
}