import { Alert, Pressable, Text, View } from "react-native";

type AlunoProps = {
  nome: string;
  idade: number;
  turma: string;
  nota1: number;
  nota2: number;
};

export default function Aluno({ nome, idade, turma, nota1, nota2 }: AlunoProps) {
  const media = (nota1 + nota2) / 2;

  const mostrarPopup = () => {
    Alert.alert(
      `Nome: ${nome}\nIdade: ${idade}\nTurma: ${turma}\nNota 1: ${nota1}\nNota 2: ${nota2}\nMédia: ${media.toFixed(1)}`
    );
  };

  return (
    <View>
      <Text>Aluno</Text>
      <Text>Nome: {nome}</Text>
      <Text>Idade: {idade}</Text>
      <Text>Turma: {turma}</Text>
      <Text>Nota 1: {nota1}</Text>
      <Text>Nota 2: {nota2}</Text>
      <Text>Média: {media.toFixed(1)}</Text>

      <Pressable onPress={mostrarPopup}>
        <Text>Mostrar Dados e Média</Text>
      </Pressable>
    </View>
  );
}