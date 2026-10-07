import { StyleSheet, Text, View } from "react-native";
import Aluno from "./components/Aluno";
import Funcionario from "./components/Funcionario";
import Multiplicacao from "./components/Multiplicacao";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Sistema de notas</Text>

      <Funcionario nome="Carlos Silva" idade={32} setor="TI" />

      <Aluno
        nome="Ana Souza"
        idade={17}
        turma="3º A"
        nota1={8.5}
        nota2={9.0}
      />

      <Multiplicacao valor1={5} valor2={3} valor3={4} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});