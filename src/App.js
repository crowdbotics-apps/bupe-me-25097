import React from "react"
import { Provider as ReduxProvider } from "react-redux"
import { View, Text, StyleSheet } from "react-native"
import RNBootSplash from "react-native-bootsplash"

import * as NavigationService from "./navigator/NavigationService"
import NavigatorProvider from "./navigator/mainNavigator"
import SplashScreen from "./features/SplashScreen"
import { setupHttpConfig } from "./utils/http"
import { store } from "./store"
import { AppModal } from "./components"

export default class App extends React.Component {
  state = {
    isLoaded: false
  }

  async componentWillMount() {
    /**
     * add any aditional app config here,
     * don't use blocking requests here like HTTP requests since they block UI feedback
     * create HTTP requests and other blocking requests using redux saga
     */
    await this.loadAssets()
    setupHttpConfig()
  }

  componentDidMount() {
    /**
     * Read above commments above adding async requests here
     */
    NavigationService.setNavigator(this.navigator)
  }

  loadAssets = async () => {
    // add any loading assets here
    this.setState({ isLoaded: true })
    RNBootSplash.hide()
  }

  renderLoading = () => (
    <View style={[styles.flex]}>
      <Text>Loading</Text>
    </View>
  )

  renderApp = () => (
    <ReduxProvider store={store}>
      {/* <AppModal /> */}
      <NavigatorProvider />
    </ReduxProvider>
  )

  render = () => (this.state.isLoaded ? this.renderApp() : this.renderLoading())
}

const styles = StyleSheet.create({
  flex: { flex: 1 }
})
