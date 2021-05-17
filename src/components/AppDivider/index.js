import React from "react"
import { View, StyleSheet } from "react-native"

const AppDivider = () => <View style={styles.container} />

export default AppDivider

const styles = StyleSheet.create({
  container: {
    borderColor: "#E4E4E4",
    borderBottomWidth: 1,
    flex: 1
  }
})
