import AsyncStorage from "@react-native-async-storage/async-storage";

const SaveStorage = async (data) => {
    await AsyncStorage.setItem('usuario', data)
}

const LoadStorage = async () => {
    const usuario = await AsyncStorage.getItem('usuario')

    return (JSON.parse(usuario))
}

const RemoveStorage = async (key)=> {
    const usuario = await AsyncStorage.removeItem(key)
    return usuario
}

export {SaveStorage, LoadStorage, RemoveStorage}
