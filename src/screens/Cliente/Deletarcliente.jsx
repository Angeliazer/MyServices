import React, { useContext } from 'react'
import { Modal, View, Text, TouchableOpacity, Alert } from 'react-native'
import { AuthContext } from '../../../src/context/Auth.js'
import { styles } from './deletarcliente.style.js'
import api from '../../../src/axios-instance.js'
import { LoadStorage } from '../../storage/storage.js'

function Deletarcliente(props) {

    const { item, setItem, modalVisible, setModalVisible, nome, index, setIndex, user } = useContext(AuthContext)

    const Cancel = () => {
        setIndex(null)
        setModalVisible(false)
    }

    const Confirm = async () => {

        setIndex(null)
        setModalVisible(false)

        try {

            const response = await api.delete(`/clientes/${item.idCliente}`, { headers: { 'Authorization': `Bearer ${user.token}` } })

            if (response.data.status == 1) {

                Alert.alert(
                    'Atenção',
                    'Cliente excluído com Sucesso....',
                    [{
                        text: 'Ok',
                        onPress: () => {
                            setModalVisible(false);
                            props.refresh();
                        }
                    }]
                )
            } else {
                Alert.alert(
                    'Atenção',
                    'Cliente não pode ser excluído. Possível orçamento associado a ele...!',
                    [{
                        text: 'Ok',
                        onPress: () => {
                            setModalVisible(false);
                        }
                    }]
                )
            }

        } catch (error) {

            console.log(error)
        }
    }

    return (
        <View style={styles.container}>
            <Modal
                transparent={true}
                visible={modalVisible}
                animationType="slide"
                onRequestClose={Cancel}>
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>
                            Confirma Excluir o cliente?
                        </Text>
                        <Text style={styles.modalText}>
                            {item.nome}
                        </Text>
                        <View style={styles.buttonContainer}>

                            <TouchableOpacity onPress={Cancel} style={styles.buttonCancel}>
                                <Text style={styles.buttonText}>
                                    Cancelar
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={Confirm} style={styles.buttonConfirm}>
                                <Text style={styles.buttonText}>
                                    Confirmar
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default Deletarcliente