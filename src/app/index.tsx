import { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import Tela1 from "./components/Tela1";

export default function Index() {
  const [campo, setCampo] = useState('');
  const [ativado, setAtivado] = useState(false);

  const acionarPopUp = () => {
    Alert.alert('Outro botão');
  };

  return (
    <View style={styles.container}>
      {/* <Pressable
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
        source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcgjIR9hgoJ8IBDkX_osSPClpxoEh-KRfU6AkeSfetyGOtyD_j1ektDFWY&s=10" }}
        style={{ width: 740, height: 80 }}/>*/}

        {/* <ExemploStyle_View/>
        <ExemploStyle_Text/> */}

        <Tela1/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});