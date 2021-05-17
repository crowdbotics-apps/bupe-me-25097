import React, { useState } from "react"
import { View, Text } from "react-native"

import { AppText, AppInput, AppDivider } from "../../components"
import { AppScreen } from "../../layout"

const SignInScreen = ({ navigation }) => {
  const [user, setUser] = useState({
    email: "",
    phone: ""
  })
  const changeHandler = (value, name) => setUser({ ...user, [name]: value })

  const buttonDisabled = true

  return (
    <AppScreen
      title="Forgot Password"
      buttonPress={() => console.log(`object`)}
      buttonTitle="Send reset link"
      buttonDisabled={buttonDisabled}
    >
      <AppInput
        onChange={changeHandler}
        icon="EmailIcon"
        placeholder="Enter email address"
        value={user.email}
        name="email"
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 33
        }}
      >
        <AppDivider />
        <AppText marginHorizontal={20} type="placeholder">
          or
        </AppText>
        <AppDivider />
      </View>
      <AppInput
        onChange={changeHandler}
        icon="PhoneIcon"
        placeholder="Enter cellphone number"
        value={user.phone}
        name="phone"
      />
      <AppText
        marginVertical={60}
        type="placeholder"
        onPress={navigation.navigate("ForgotPasswordScreen")}
      >
        Please enter your email or phone number, and you will recieve password
        reset link
      </AppText>
    </AppScreen>
  )
}

export default SignInScreen
