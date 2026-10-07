import { Text, View } from 'react-native';

interface ProdutoProps {
  nome: string;
  preco: string;
}

export default function Produto({ nome, preco }: ProdutoProps) {
  return (
    <View>
      <Text>
        {nome} {'-->'} R$ {preco}{' '}
      </Text>
    </View>
  );
}
