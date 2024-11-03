import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Home from "../screens/Home/Home.jsx"
import Consultacliente from "../screens/Cliente/Consultacliente.jsx"
import Deletarcliente from "../screens/Cliente/Deletarcliente.jsx"
import Mancliente from "../screens/Cliente/Mancliente.jsx"
import Novocliente from "../screens/Cliente/Novocliente.jsx"
import Orcamento from "../screens/Orcamento/Orcamento.jsx"
import Novoorcamento from "../screens/Orcamento/Novoorcamenteo.jsx"
import Listaorcamento from "../screens/Orcamento/Listaorcamento.jsx"
import DisplayOrcamento from "../screens/Orcamento/DisplayOrcamento.jsx"

const Stack = createNativeStackNavigator()

function RoutesPrivate() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    animation: 'fade'
                }}
            />
            <Stack.Screen
                name="Mancliente"
                component={Mancliente}
                options={{
                    headerShown: false,
                    animation: 'fade'
                }}
            />
            <Stack.Screen
                name="Novocliente"
                component={Novocliente}
                options={{
                    headerShown: false,
                    animation: 'fade'
                }}
            />
            <Stack.Screen
                name="Deletarcliente"
                component={Deletarcliente}
                options={{
                    headerShown: false,
                    animation: 'fade'
                }}
            />
            <Stack.Screen
                name="Consultacliente"
                component={Consultacliente}
                options={{
                    headerShown: false,
                    animation: 'fade'
                }}
            />
            <Stack.Screen
                name="Orcamento"
                component={Orcamento}
                options={{
                    headerShown: false,
                    animation: 'fade'
                }}
            />
            <Stack.Screen
                name="Novoorcamento"
                component={Novoorcamento}
                options={{
                    headerShown: false,
                    animation: 'fade',
                    animationTypeForReplace: 'push'
                }}
            />
            <Stack.Screen
                name="Listaorcamento"
                component={Listaorcamento}
                options={{
                    headerShown: false,
                    animation: 'fade'
                }}
            />
            <Stack.Screen
                name="DisplayOrcamento"
                component={DisplayOrcamento}
                options={{
                    headerShown: false,
                    animation: 'fade'
                }}
            />
        </Stack.Navigator>

    )
}

export default RoutesPrivate
