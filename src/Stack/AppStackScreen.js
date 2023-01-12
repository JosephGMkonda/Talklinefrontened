import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
// import AuthStackScreen from './AuthStackScreen'
import AuthStackScreen from './AuthStackScreen'



export default AppStackScreen = () => {

    const AppStack = createStackNavigator()
    return (
        <AppStack.Navigator headerMode ="none">
            <AppStack.Screen name='Auth' component={AuthStackScreen} />

        </AppStack.Navigator>
    )
}

