import { styles } from '@/globals/styles';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type Post = {
  id: string;
  title: string;
  body: string;
};

export default function Home() {
  const [post, setPost] = useState<Post[] | null>(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    async function carregar() {
      try {
        const res = await axios.get<Post>(
          'https://jsonplaceholder.typicode.com/posts/1',
        );
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setPost([res.data]);
      } catch (erro) {
        setErro(true);
      } finally {
        setCarregando(false);
      }
    }

    carregar();
  }, []);

  if (erro) {
    return (
      <View style={styles.container}>
        <Text>Não foi possível carregar os dados.</Text>
      </View>
    );
  }

  if (carregando) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#E40613" />
        <Text>Carregando dados...</Text>
      </View>
    );
  } else {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <FlatList
            data={post}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View>
                <Text style={{ marginTop: 5, fontSize: 25, fontWeight: 'bold'}}>
                    {item.title}
                </Text>
                <Text style={{ marginTop: 15, fontSize: 15 }}>
                    {item.body}
                </Text>
              </View>
            )}
          />
        </View>
      </SafeAreaView>
    );
  }
}
