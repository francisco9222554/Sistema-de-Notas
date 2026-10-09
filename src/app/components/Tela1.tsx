import { StyleSheet, Text, View } from "react-native";

const Tela1 = () => {
    return (
        <View style={styles.container}>
            <View style={styles.topo}>
                <View style={styles.caixaNumero}>
                    <Text style={styles.textoNumero}>1</Text>
                    <Text style={styles.textoNumero}>2</Text>
                    <Text style={styles.textoNumero}>3</Text>
                </View>
            </View>

            <View style={styles.baixo}>
                <Text style={styles.textoHello}>HELLO</Text>
                <Text style={styles.textoHello}>WORLD</Text>
            </View>
        </View>
    );
};

export default Tela1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        borderWidth: 2,
        borderColor: "#000000",
    },
    topo: {
        flex: 1,
        flexDirection: "row-reverse",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingTop: 15,
        paddingRight: 15,
        borderBottomWidth: 2,
        borderBottomColor: "#000000",
    },
    caixaNumero: {
        width: 36,
        height: 36,
        borderWidth: 2,
        borderColor: "#000000",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 6,
        backgroundColor: "#FFFFFF",
    },
    textoNumero: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000000",
    },
    baixo: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
    },
    textoHello: {
        fontSize: 40,
        fontWeight: "bold",
        color: "#000000",
        textAlign: "center",
    },
});