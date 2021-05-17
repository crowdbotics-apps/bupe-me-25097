import React from "react"
import { Text, StyleSheet } from "react-native"

import {
  placeholderColor,
  textColor,
  titleColor,
  mainColor
} from "../../variables"

const AppText = ({
  children,
  type = "text",
  textAlign = "center",
  style,
  onPress,
  marginVertical,
  marginHorizontal,
  ...rest
}) => {
  const mergedStyle = {
    marginVertical,
    marginHorizontal,
    fontFamily: "Roboto",
    textAlign,
    ...styles[type],
    ...style
  }
  return (
    <Text
      onPress={() => onPress && onPress()}
      style={mergedStyle}
      allowFontScaling={false}
      {...rest}
    >
      {children}
    </Text>
  )
}

export default AppText

const styles = StyleSheet.create({
  placeholder: {
    fontWeight: "400",
    fontSize: 16,
    color: placeholderColor
  },
  link: {
    fontWeight: "400",
    fontSize: 16,
    color: mainColor
  },
  button: {
    fontWeight: "700",
    fontSize: 16,
    color: "#fff",
    letterSpacing: 2,
    textTransform: "uppercase"
  },
  text: {
    fontWeight: "500",
    fontSize: 24,
    color: textColor
  },
  title: {
    fontWeight: "700",
    fontSize: 34,
    color: titleColor
  }
})
