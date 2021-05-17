import React from "react"
import { View, StyleSheet, TextInput } from "react-native"

import { placeholderColor, errorColor } from "../../variables"
import * as Icons from "../../assets/icons"

const AppInput = ({
  onChange,
  style,
  value,
  placeholder,
  type = "default",
  icon,
  name,
  required = false,
  error = false,
  autoCapitalize = "words",
  ...rest
}) => {
  const Icon = Icons[icon]
  return (
    <View style={[styles.container, style, error && styles.error]}>
      {Icon && <Icon style={styles.icon} />}
      <TextInput
        name={name}
        style={styles.input}
        placeholder={`${placeholder}${!!required ? "*" : ""}`}
        onChangeText={e => onChange(e, name)}
        keyboardType={type}
        value={value}
        placeholderTextColor={placeholderColor}
        autoCapitalize={autoCapitalize}
        {...rest}
      />
    </View>
  )
}

export default AppInput

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
  input: {
    height: "100%",
    flex: 1,
    marginLeft: 15,
    fontSize: 16,
    fontWeight: "400"
  },
  error: {
    borderColor: errorColor
  }
})
