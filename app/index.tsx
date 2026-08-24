import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { externalStyles } from './styles';

export default function Home(){
    return (
            <SafeAreaView>
                <View style={style.container}>
                    <Text style={{borderColor:'red',borderWidth:5}}>Hello, World!</Text> {/* estilo inline */}
                    <Text style={externalStyles.greenBox}>Wellcome to PDM class!</Text>
                </View>
            </SafeAreaView>
    );
}

const style = StyleSheet.create({
    container:{
        fontSize: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'blue',
        borderWidth: 5
    }
});