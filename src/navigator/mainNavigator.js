import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import RoutesAuth from "./RoutesAuth"
import SideMenu from "./sideMenu"
import Routes from "./Routes"

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  const loggedIn = false
  const Nav = loggedIn ? RoutesAuth : Routes
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(Nav).map((s, key) => (
          <Drawer.Screen key={key} name={s} component={Nav[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
