import React, { useState } from "react"
import { View, Button, Platform, StyleSheet } from "react-native"
import DateTimePicker from "@react-native-community/datetimepicker"

import { placeholderColor, errorColor } from "../../variables"
import { AppText } from ".."
import * as Icons from "../../assets/icons"

const AppDatepicker = ({ icon, style, error }) => {
  const [date, setDate] = useState(new Date())
  const [mode, setMode] = useState("date")
  const [show, setShow] = useState(false)

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date
    setShow(Platform.OS === "ios")
    setDate(currentDate)
  }

  const showMode = () => {
    setShow(!show)
  }
  const Icon = Icons[icon]

  return (
    <>
      <View style={[styles.container, style, error && styles.error]}>
        {Icon && <Icon style={styles.icon} />}
        <AppText style={styles.placeholder}>Date Of Birth*</AppText>
      </View>
      <View
        style={{
          position: "absolute",
          backgroundColor: "red",
          height: 100,
          width: 100,
          left: 0,
          top: 0
        }}
      />
    </>
  )
}

export default AppDatepicker

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#E4E4E4",
    borderWidth: 2,
    borderRadius: 5,
    height: 50,
    backgroundColor: "#FAFAFA",
    marginVertical: 8
  },
  icon: {
    marginLeft: 15
  },
  placeholder: {
    color: placeholderColor,
    marginLeft: 15,
    fontSize: 16,
    fontWeight: "400"
  },
  error: {
    borderColor: errorColor
  }
})
