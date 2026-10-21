import { useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import { View } from "react-native";

type SeletorImagem = {
    onImagemSelecionada?: (uri: string | null) => void;
    imagemInicial?: string | null;
    permiteCamera?: boolean;
    permiteGaleria?: boolean;
    permiteEdicao?: boolean;
    aspecto?: [number, number];
}

export default function SeletorImagem({
    onImagemSelecionada, 
    imagemInicial, 
    permiteCamera = true,
    permiteGaleria = true, 
    permiteEdicao = true, 
    aspecto = [1, 1]
    }: SeletorImagem){
        
    const [imagem, setImagem] = useState<string | null>(imagemInicial);

    async function atualizarImagem(uri: string | null){
        setImagem(uri);
        onImagemSelecionada?.(uri);
    }

    async function selecionarImagem(){
        const resultado = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: permiteEdicao,
            aspect: aspecto,
            quality: 0.8
        });

        if(!resultado.canceled){
            atualizarImagem(resultado.assets[0].uri);
        }
    }

    return(
        <View></View>
    );
}