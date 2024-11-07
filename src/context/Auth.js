import React, {createContext, useState} from "react"

export const AuthContext = createContext()

function AuthProvider({children}) {
    const [data, setData] = useState([])
    const [dataClient, setDataClient] = useState([])
    const [dataOrcamento, setDataOrcamento] = useState([])
    const [modalVisible, setModalVisible] = useState(false)
    const [index, setIndex] = useState(null)
    const [nome, setNome] = useState("")
    const [item, setItem] = useState({})
    const [user, setUser] = useState({})
    const [datavalida, setDatavalida] = useState(true)
    const [dataInicial, setDataInicial] = useState('')
    const [dataFinal, setDataFinal] = useState('')
    const [itemSelected, setItemSelected] = useState('')

    return (
        <AuthContext.Provider
            value={{
                data,
                setData,
                modalVisible,
                setModalVisible,
                index,
                setIndex,
                nome,
                setNome,
                item,
                setItem,
                dataClient,
                dataOrcamento,
                setDataClient,
                setDataOrcamento,
                user,
                setUser,
                datavalida,
                setDatavalida,
                dataInicial,
                setDataInicial,
                dataFinal,
                setDataFinal,
                itemSelected,
                setItemSelected
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
