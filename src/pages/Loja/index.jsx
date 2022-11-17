import React from "react";
import {View, Text, Image, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { Foundation } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import Header from "../../../components/header";

export default function Loja(){
    const produtos = [
        {
            id:0,
            nome:'primeiro item',
            imagem:'../../../assets/image-icon.png'
        },
        {
            id:1,
            nome:'segundo item',
            imagem:'../../../assets/image-icon.png'
        },
        {
            id:2,
            nome:'terceiro item',
            imagem:'../../../assets/image-icon.png'
        },
        {
            id:3,
            nome:'quarto item',
            imagem:'../../../assets/image-icon.png'
        },
        {
            id:4,
            nome:'quinto item',
            imagem:'../../../assets/image-icon.png'
        },
        {
            id:5,
            nome:'sexto item',
            imagem:'../../../assets/image-icon.png'
        },
        {
            id:6,
            nome:'setimo item',
            imagem:'../../../assets/image-icon.png'
        }

    ];
    return(
        <View style={styles.container}>
            <View style={styles.nomeLojaView}>
                <Text style={styles.nomeLojaTitulo}>Lojas ABC</Text>
                <Image source={require('../../../assets/image-icon.png')} style={styles.imagem}/>
            </View>
            <View>
                <FlatList 
                    data={produtos}
                    renderItem={()=>
                        <View style={styles.ViewDestaques}>
                            <TouchableOpacity>
                                <Image source={require('../../../assets/image-icon.png')} style={styles.imagem}/>
                            </TouchableOpacity>
                        </View>
                    }
                    keyExtractor={item => item.id}
                    horizontal={true}
                    
                    
                />
            </View>
            <View style={styles.viewPromocao}>
                <Text style={styles.textoPromocao}>Promoção</Text>
                <View>
                    <Image source={require('../../../assets/image-icon.png')} style={styles.imagem}/>
                    <Text>R$5,99</Text>
                </View>
                <View>
                    <AntDesign name="sound" size={24} color="black" />
                    <Text>Ouvir descrição</Text>
                </View>
            </View>
            <View>
                <Text>Mais vendidos</Text>
                <FlatList 
                    data={produtos}
                    renderItem={()=> <View>
                        <TouchableOpacity>
                            <Image source={require('../../../assets/image-icon.png')} style={styles.imagem}/>
                        </TouchableOpacity>
                    </View>}
                    keyExtractor={item => item.id}
                    horizontal={true}
                />
            </View>
            <View>
                <View style={styles.viewContatos}><Text>Entre em contato</Text><Foundation name="telephone" size={24} color="black" /><FontAwesome name="whatsapp" size={24} color="black" /></View>
                <View style={styles.viewContatos}><Text>Como chegar</Text><FontAwesome name="map-marker" size={24} color="black" /></View>
            </View>
            <Header></Header>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f0f0f0'
    },
    imagem:{
        width:100,
        height:100
    },
    nomeLojaView:{
        flexDirection:"row",
        justifyContent:'space-around',
        alignItems:'center',
        width:'70%'
    },
    nomeLojaTitulo:{
        color:'#363949',
        fontSize:25,
        fontWeight:"700",
        letterSpacing:2
    },
    ViewDestaques:{
        marginHorizontal:5
    },
    viewPromocao:{
        flexDirection:'column',
    },
    textoPromocao:{
        color:'#cc9706',
        fontSize:20
    },
    viewContatos:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-start',
        alignSelf:'flex-start'
        
    }
    
})