import React from "react"
import { View } from "react-native"

const AppModal = () => {
  return (
    <View
      style={{
        position: "absolute",
        height: "100%",
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, .5)",
        zIndex: 1000
      }}
    />
  )
}

export default AppModal
