import React, {useEffect}from 'react';
import SplashScreen from 'react-native-splash-screen'

import Login from "./screens/Login"

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, [])
  return <Login/>;
}

export default App;