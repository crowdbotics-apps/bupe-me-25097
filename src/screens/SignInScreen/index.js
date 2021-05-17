import React, { useState } from "react"
import { View, Text } from "react-native"

import { AppText, AppInput } from "../../components"
import { AppScreen } from "../../layout"

const SignInScreen = ({ navigation }) => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  })
  const changeHandler = (value, name) => setUser({ ...user, [name]: value })

  const buttonDisabled = true

  return (
    <AppScreen
      title="Sign In"
      linkLabel="Don't you have an account?"
      linkTitle="Sign Un"
      linkPress={() => navigation.navigate("SignUpScreen")}
      buttonPress={() => console.log(`object`)}
      buttonTitle="sign in"
      buttonDisabled={buttonDisabled}
    >
      <AppInput
        onChange={changeHandler}
        icon="EmailIcon"
        placeholder="Enter email address"
        value={user.email}
        name="email"
      />
      <AppInput
        onChange={changeHandler}
        icon="LockIcon"
        placeholder="Enter password"
        value={user.lastName}
        name="lastName"
      />
      <AppText
        onPress={() => navigation.navigate("ForgotPasswordScreen")}
        type="link"
        textAlign="right"
      >
        Forgot Password?
      </AppText>
    </AppScreen>
  )
}

export default SignInScreen
