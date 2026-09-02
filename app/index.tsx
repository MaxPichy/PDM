import { useState } from 'react';
import { Image, Pressable, Text, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';

export default function Home() {
    const [contador, setContador] = useState(0);

    function incrementar(){
        setContador(contador+1);
    }

    function decrementar(){
        if(contador > 0){
            setContador(contador-1);
        }
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.card}>
                    <Text>CONTADOR</Text>
                    <Text style={{fontSize: 25}}>
                        {contador}
                    </Text>

                    <Button title='+' onPress={incrementar}></Button>
                    <Button title='-' onPress={decrementar}></Button>
                </View>
            </View>
        </SafeAreaView>
    );
}