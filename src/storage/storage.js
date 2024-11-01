import AsyncStorage from "@react-native-async-storage/async-storage"

const SaveStorage = async (data) => {
    await AsyncStorage.setItem('usuario', data)
}

const LoadStorage = async () => {
    return (JSON.parse(await AsyncStorage.getItem('usuario')))
}

const RemoveStorage = async (key) => {
    return await AsyncStorage.removeItem(key)
}

export {SaveStorage, LoadStorage, RemoveStorage}
