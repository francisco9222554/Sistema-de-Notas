import { StyleSheet, Text, View } from "react-native";

const Tela1 = () => {
    return (
        <>
            <View style={styles_local.container_fixo}>
                <View style={[styles_local.fundo_azul,
                styles_local.tamanho_50, styles_local.borda]} />
                <View style={[styles_local.fundo_laranja,
                styles_local.tamanho_50, styles_local.borda]} />
                <View style={[styles_local.fundo_verde,
                styles_local.tamanho_50, styles_local.borda]} />
            </View>
            <View style={styles_local.container_flex}>
                <Text style={styles_local.texto1}> HELLO </Text>
                <Text style={styles_local.texto1}> WORLD </Text>

            </View>
        </>
    );
}

export default Tela1;

const styles_local = StyleSheet.create({
    texto1: {
        //cor
        color: '#00c3ff',
        //criando sombra para o texto
        textShadowOffset: { width: 10, height: 5 },
        //cor da sombra do texto
        textShadowColor: '#0089b2',
        //embaçar a sombra
        textShadowRadius: 10,
        //tamanho da fonte do texto
        fontSize: 95,
    },

     texto2: {
        //cor
        color: 'Black',
        //tamanho da fonte do texto
        fontSize: 30,
    },

    negrito: {
        //espessura do texto
        fontWeight: 'bold',
    },

    titulo: {
        //tamanho da fonte do texto
        fontSize: 30,
        fontWeight: '100',

    },

    container_fixo: {
        //valor de preenchimento da área disponível
        flex: 1,
        //definição do eixo principal
        flexDirection: 'row',
        //posicionamento dos objetos no eixo principal
        justifyContent: 'flex-end',
        //posicionamento dos objetos no eixo secundário
        alignItems: 'stretch',
        //cor de fundo
        backgroundColor: 'red',
        //margem
        margin: 10,
    },
    container_flex: {
        //valor de preenchimento da área disponível
        flex: 1,
        //definição do eixo principal
        flexDirection: 'column',
        //posicionamento dos objetos no eixo principal
        justifyContent: 'center',
        //posicionamento dos objetos no eixo secundário
        alignItems: 'center',
        //cor de fundo
        backgroundColor: '#FFFACD',

    },
    fundo_azul: {
        //cor de fundo
        backgroundColor: 'blue'
    },
    fundo_laranja: {
        //cor de fundo
        backgroundColor: 'orange'
    },
    fundo_verde: {
        //cor de fundo
        backgroundColor: 'green'
    },
    tamanho_50: {
        //largura
        width: 40,
        //altura
        height: 50
    },
    borda: {
        //cor da borda
        borderColor: 'black',
        //espessura da borda
        borderWidth: 1
    }
});