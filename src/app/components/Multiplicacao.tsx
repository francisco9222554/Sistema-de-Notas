import { Text, View } from "react-native";

type MultiplicacaoProps = {
  valor1: number;
  valor2: number;
  valor3: number;
};

export default function Multiplicacao({ valor1, valor2, valor3 }: MultiplicacaoProps) {
  const resultado = valor1 * valor2 * valor3;

  return (
    <View>
      <Text>Multiplicação</Text>
      <Text>
        {valor1} × {valor2} × {valor3} = {resultado}
      </Text>
    </View>
  );
}