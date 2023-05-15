import React from 'react'
import Background from '../components/Background'
import Logo from '../components/logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/paragraph'
import BackButton from '../components/BackButton'


export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>RealEstate216</Header>
      <Paragraph>
        Get your dream house now .
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </Button>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Sign Up
        
      </Button>
    </Background>
  )
}