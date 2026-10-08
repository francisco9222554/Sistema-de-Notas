import { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";

export default function NomeSobrenome() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");

  const mostrarPopup = () => {
    Alert.alert(`Nome: ${nome}\nSobrenome: ${sobrenome}`);
  };

  return (
    <View>
      <Text>Nome e Sobrenome</Text>

      <TextInput
        placeholder="Digite o nome..."
        value={nome}
        onChangeText={(text) => setNome(text)}
      />

      <TextInput
        placeholder="Digite o sobrenome..."
        value={sobrenome}
        onChangeText={(text) => setSobrenome(text)}
      />

      <Pressable onPress={mostrarPopup}>
        <Text>Mostrar Nome Completo</Text>
      </Pressable>
    </View>
  );
}