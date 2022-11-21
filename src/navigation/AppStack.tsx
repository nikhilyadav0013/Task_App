import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Raw } from "../screens";
import { StackParamList } from "./stackParamList";

const Stack = createNativeStackNavigator<StackParamList>()

const AppStack: FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Raw" component={Raw} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default AppStack