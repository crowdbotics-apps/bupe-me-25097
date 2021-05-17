import React from "react"
import { View, TouchableOpacity, StyleSheet } from "react-native"

import { AppText } from ".."
import { mainColor } from "../../variables"

const AppButton = ({ title, type, disabled, ...rest }) => {
  const mergedStyle = {}
  return (
    <TouchableOpacity disabled={disabled}>
      <View style={[styles.button, disabled && styles.disabled]} {...rest}>
        <AppText type="button">{title}</AppText>
      </View>
    </TouchableOpacity>
  )
}

export default AppButton

const styles = StyleSheet.create({
  button: {
    backgroundColor: mainColor,
    color: "#fff",
    height: 50,
    textAlign: "center",
    justifyContent: "center",
    borderRadius: 10
  },
  disabled: {
    backgroundColor: "gray"
  }
})
