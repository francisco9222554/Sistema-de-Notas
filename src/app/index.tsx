import { useState } from "react";
import { Alert, Image, Pressable, StyleSheet, Switch, Text, TextInput, View } from "react-native";
import Aluno from "./components/Aluno";
import Multiplicacao from "./components/Multiplicacao";
import NomeSobrenome from "./components/NomeSobrenome";

export default function Index() {
  const [campo, setCampo] = useState('');
  const [ativado, setAtivado] = useState(false);

  const acionarPopUp = () => {
    Alert.alert('Outro botão');
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPress={(evento) => {
          Alert.alert(`Campo: ${campo}`);
          console.log('Olá terminal');
        }}>
        <Text>Boa noite.</Text>
      </Pressable>

      <NomeSobrenome />

      <Aluno
        nome="Maria Silva"
        idade={16}
        turma="3º A"
        nota1={8.5}
        nota2={9.0}
      />

      <Multiplicacao />

      <TextInput
        placeholder="Digite algo..."
        value={campo}
        onChangeText={(Text) => { setCampo(Text); }}
      />

      <Switch
        value={ativado}
        onValueChange={(value) => { setAtivado(value); }}
      />

      <Image
        source={{ uri: "https://img.magnific.com/fotos-premium/um-cachorro-border-collie-deitado-em-um-caminho_357532-10207.jpg?semt=ais_hybrid&w=740&q=80" }}
        style={{ width: 740, height: 80 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
  },
});