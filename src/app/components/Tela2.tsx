import { StyleSheet, Text, View } from "react-native";

const Tela2 = () => {
    return (
        <View style={styles.container}>
            <View style={styles.topo}>
                <Text style={styles.textoNivel}>Primeiro</Text>
                <Text style={styles.textoNivel}>Segundo</Text>
                <Text style={styles.textoNivel}>Terceiro</Text>
            </View>

            <View style={styles.baixo}>
                <View style={styles.caixaNumero}>
                    <Text style={styles.textoNumero}>1</Text>
                </View>
                <View style={styles.caixaNumero}>
                    <Text style={styles.textoNumero}>2</Text>
                </View>
                <View style={styles.caixaNumero}>
                    <Text style={styles.textoNumero}>3</Text>
                </View>
            </View>
        </View>
    );
};

export default Tela2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        borderWidth: 2,
        borderColor: "#000000",
    },
    topo: {
        flex: 1,
        flexDirection: "column-reverse",
        justifyContent: "space-evenly",
        alignItems: "center",
        borderBottomWidth: 2,
        borderBottomColor: "#000000",
        paddingVertical: 10,
    },
    textoNivel: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#000000",
        textAlign: "center",
    },
    baixo: {
        flex: 1,
        flexDirection: "column-reverse",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        paddingVertical: 15,
    },
    caixaNumero: {
        width: 50,
        height: 40,
        borderWidth: 2,
        borderColor: "#000000",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
    },
    textoNumero: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#000000",
    },
});