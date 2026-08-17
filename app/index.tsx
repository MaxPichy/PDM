import { Text, View, StyleSheet } from 'react-native';

export default function Home(){
    return(
        <View>
            <Text>Hello World!</Text>
            <Text>Welcome User!</Text>     
        </View>
    );
}

const style = StyleSheet.create({
    meuTexto:{
        color: 'red',
        fontSize: 20
    }
});