import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Tela3 = () => {
    return (
        <View style={styles.container}>
            <View style={styles.topo}>
                <Text style={styles.textoBemvindo}>BEM-VINDO</Text>
                <Text style={styles.textoFulano}>FULANO</Text>
            </View>

            <View style={styles.meio}>
                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.textoBotao}>{botoes[0]}</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.baixo}>
                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.textoBotao}>{botoes[1]}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Tela3;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        borderWidth: 2,
        borderColor: "#000000",
    },
    topo: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 20,
    },
    textoBemvindo: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#000000",
        textAlign: "center",
    },
    textoFulano: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000000",
        textAlign: "center",
        marginTop: 5,
    },
    meio: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    baixo: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: 30,
    },
    botao: {
        borderWidth: 2,
        borderColor: "#000000",
        paddingVertical: 12,
        paddingHorizontal: 40,
        backgroundColor: "#FFFFFF",
        minWidth: 140,
        alignItems: "center",
    },
    textoBotao: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000000",
        textAlign: "center",
    },
});