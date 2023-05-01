import {Text, View} from "react-native";
import {styles} from "./styles";

export default function RegistrationCard({ result }) {
    let text = result ? "Cadastrado com sucesso" : "Sua senha é muito pequena";
    let color = result ? '#66bb59' : '#cc6363';

    return (
        <View style={styles.container}>
            <View style={[styles.view, {backgroundColor: color}]}>
                <Text style={styles.text}>{text}</Text>
            </View>
        </View>
    )
}