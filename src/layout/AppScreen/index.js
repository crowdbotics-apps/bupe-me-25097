import React from "react"
import { View, SafeAreaView, ScrollView } from "react-native"

import { AppText, AppButton } from "../../components"

const AppScreen = ({
  children,
  title,
  buttonPress,
  buttonTitle,
  buttonDisabled,
  linkPress,
  linkLabel,
  linkTitle
}) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <SafeAreaView style={{ flex: 1 }}>
        <AppText marginVertical={26} type="title">
          {title}
        </AppText>
        <View style={{ flex: 1, paddingHorizontal: 24 }}>
          <View
            style={{
              position: "absolute",
              backgroundColor: "blue",
              height: 100,
              width: 100,
              left: 0,
              top: 0
            }}
          />
          <ScrollView style={{ flex: 1 }}>{children}</ScrollView>
          <View
            style={{
              height: 100,
              justifyContent: "space-between"
            }}
          >
            <View>
              <AppButton
                onPress={buttonPress}
                disabled={buttonDisabled}
                title={buttonTitle || "next"}
              />
            </View>
            {(linkLabel || linkTitle) && (
              <View>
                <AppText type="placeholder">
                  {linkLabel}{" "}
                  <AppText type="link" onPress={linkPress}>
                    {linkTitle}
                  </AppText>
                </AppText>
              </View>
            )}
          </View>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default AppScreen
