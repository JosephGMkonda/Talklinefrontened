import { StatusBar } from 'expo-status-bar';
import {createStackNavigator} from '@react-navigation/stack'

// import SignUpScreen from '../Screens/SignUpScreen'
// import SignInScreen from '../Screens/SignInScreen'
import SignInScreen from '../Screens/SignInScreen';
import SignUpScreen from '../Screens/SignUpScreen'

export default AuthStackScreen = () => {
    const AuthStack = createStackNavigator()
  return (
   <AuthStack.Navigator headerMode='none'>
   <AuthStack.Screen name="SignIn" component={SignInScreen} />
   <AuthStack.Screen name="SignUp" component={SignUpScreen} />

    


   </AuthStack.Navigator>
  );
}


