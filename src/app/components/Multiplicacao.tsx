import { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";

export default function Multiplicacao() {
  const [valor1, setValor1] = useState("");
  const [valor2, setValor2] = useState("");
  const [valor3, setValor3] = useState("");

  const mostrarPopup = () => {
    const v1 = Number(valor1) || 0;
    const v2 = Number(valor2) || 0;
    const v3 = Number(valor3) || 0;
    const resultado = v1 * v2 * v3;

    Alert.alert(
      `Valor 1: ${v1}\nValor 2: ${v2}\nValor 3: ${v3}\nMultiplicação: ${resultado}`
    );
  };

  return (
    <View>
      <Text>Multiplicação de 3 Valores</Text>

      <TextInput
        placeholder="Valor 1"
        keyboardType="numeric"
        value={valor1}
        onChangeText={(text) => setValor1(text)}
      />

      <TextInput
        placeholder="Valor 2"
        keyboardType="numeric"
        value={valor2}
        onChangeText={(text) => setValor2(text)}
      />

      <TextInput
        placeholder="Valor 3"
        keyboardType="numeric"
        value={valor3}
        onChangeText={(text) => setValor3(text)}
      />

      <Pressable onPress={mostrarPopup}>
        <Text>Calcular Multiplicação</Text>
      </Pressable>
    </View>
  );
}