import {StatusBar} from 'expo-status-bar';
import {Modal, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useState} from "react";
import {object, string} from "yup";
import PasswordCard from "./src/components/PasswordCard";

export default function App() {
    const [password, setPassword] = useState("")
    const [modalVisible, setModalVisible] = useState(false);
    const [result, setResult] = useState(false)

    let schema = object().shape({
        password: string().min(6)
    })

    return (
        <View style={styles.container}>
            <Modal
                transparent={true}
                animationType="fade"
                visible={modalVisible}
                onShow={() => setTimeout(() => setModalVisible(false), 2000)}
                onRequestClose={() => setModalVisible(!modalVisible)}>
                <PasswordCard
                    result={result}
                    password={password}/>
            </Modal>

            <View style={styles.password}>
                <TextInput
                    style={styles.input}
                    maxLength={30}
                    secureTextEntry={true}
                    placeholder="Senha"
                    textContentType='newPassword'
                    onChangeText={text => setPassword(text)}
                />

                <TouchableOpacity style={styles.button}
                    onPress={() => {
                        setResult(schema.isValidSync({password: password}).valueOf())
                        setModalVisible(true)
                    }}>
                    <Text style={styles.textStyle}>Mostrar Senha</Text>
                </TouchableOpacity>
            </View>

            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },

    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },

    password: {
        width: '80%',
    },

    input: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: 'gray',
        padding: 10,
    },

    button: {
        padding: 10,
        marginTop: '5%',

        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 5,

        backgroundColor: 'rgb(55,122,248)',
    }

});
