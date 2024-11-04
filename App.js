import {NavigationContainer} from '@react-navigation/native'
import AuthProvider from './src/context/Auth.js'
import Routes from './src/routes/routes.js'

function App() {
    return (
        <NavigationContainer>
            <AuthProvider>
                <Routes/>
            </AuthProvider>
        </NavigationContainer>
    )
}

export default App