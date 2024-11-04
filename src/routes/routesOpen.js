import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Login from "../screens/Login/Login.jsx"
import Criarconta from "../screens/Criarconta/Criarconta.jsx"
import Codigo from "../screens/Codigo/Codigo.jsx"

const Stack = createNativeStackNavigator()

function RoutesOpen() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false,
                    animation: 'fade'
                }}
            />

            <Stack.Screen
                name="Criarconta"
                component={Criarconta}
                options={{
                    headerShown: false,
                    animation: 'fade'
                }}
            />

            <Stack.Screen
                name="Codigo"
                component={Codigo}
                options={{
                    headerShown: false,
                    animation: 'fade'
                }}
            />
        </Stack.Navigator>
    )
}

export default RoutesOpen
