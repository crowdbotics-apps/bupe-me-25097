import React, { useState } from "react"
import { View, Text } from "react-native"

import { AppText, AppInput, AppDatepicker } from "../../components"
import { AppScreen } from "../../layout"

const SignUpScreen = ({ navigation }) => {
  const [user, setUser] = useState({
    middleName: "",
    address1: "",
    address2: "",
    lastName: "",
    number: "",
    email: "",
    state: "",
    name: "",
    city: "",
    dob: "",
    zip: ""
  })
  const changeHandler = (value, name) => setUser({ ...user, [name]: value })

  const buttonDisabled = true

  return (
    <AppScreen
      title="Sign Up"
      linkLabel="Do you have an account?"
      linkTitle="Sign In"
      linkPress={() => navigation.navigate("SignInScreen")}
      buttonPress={() => console.log(`object`)}
      buttonDisabled={buttonDisabled}
    >
      <View>
        <View style={{ flexDirection: "row" }}>
          <AppInput
            onChange={changeHandler}
            icon="AvatarIcon"
            placeholder="Name"
            value={user.name}
            name="name"
            required
            style={{ marginRight: 15 }}
          />
          <AppInput
            onChange={changeHandler}
            icon="AvatarIcon"
            placeholder="Middle name"
            value={user.middleName}
            name="middleName"
          />
        </View>
        <AppInput
          onChange={changeHandler}
          icon="AvatarIcon"
          placeholder="Last Name"
          value={user.lastName}
          name="lastName"
          required
        />
        <AppInput
          onChange={changeHandler}
          icon="EmailIcon"
          placeholder="Enter email address"
          value={user.email}
          name="email"
          required
          autoCapitalize="none"
        />
        {/* <AppInput
          onChange={changeHandler}
          icon="CalendarIcon"
          placeholder="Date of birth"
          value={user.dob}
          name="dob"
          required
        /> */}
        <AppDatepicker icon="CalendarIcon" />
        <AppInput
          onChange={changeHandler}
          icon="PhoneIcon"
          placeholder="Enter cellphone number"
          value={user.number}
          name="number"
          required
        />
        <AppInput
          onChange={changeHandler}
          icon="AddressIcon"
          placeholder="Address 1"
          value={user.address1}
          name="address1"
          required
        />
        <AppInput
          onChange={changeHandler}
          icon="AddressIcon"
          placeholder="Address 2"
          value={user.address2}
          name="address2"
          required
        />
        <View style={{ flexDirection: "row" }}>
          <AppInput
            onChange={changeHandler}
            placeholder="City"
            value={user.city}
            name="city"
            style={{ marginRight: 15 }}
          />

          <AppInput
            onChange={changeHandler}
            placeholder="Zip Code"
            value={user.zip}
            name="zip"
            required
          />
        </View>
      </View>
    </AppScreen>
  )
}

export default SignUpScreen
