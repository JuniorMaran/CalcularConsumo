import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const Home = (props) => {
    const { navigation } = props
    const { route } = props
    let { media, letraConsumo} = route.params
    let cor



    const letraConsumoA = () =>{
        if(letraConsumo == "A"){
            return cor = '#039340'
        }
    }

    const letraConsumoB = () => {
        if(letraConsumo == "B"){
            return cor = '#99D014'
        }
    }

    const letraConsumoC = () => {
        if(letraConsumo == "C"){
            return cor = '#FDF900'
        }
    }

    const letraConsumoD = () => {
        if(letraConsumo == "D"){
            return cor = '#F1AE02'
        }
    }

    const letraConsumoE = () => {
        if(letraConsumo == "E"){
            return cor = '#DD2A18'
        }
    }



    return (
        <View style = {styles.containerPrincipal}> 
            <Text style = {styles.textMedia}>   Sua média é:  {media}  </Text>
            
            <Text style = {styles.maisEficiente}>Mais Eficiente</Text>
            <View style = {styles.containerA}>
                <View style = {{backgroundColor: letraConsumoA(), flex: 1}}>
                <Text style = {styles.textContainer} >A</Text>
                </View>
            </View>
            
            <View style = {styles.containerB}>
            <View style = {{backgroundColor: letraConsumoB(), flex: 1}}>
                <Text style = {styles.textContainer} >B</Text>
                </View>
            </View>

            <View style = {styles.containerC}>
            <View style = {{backgroundColor: letraConsumoC(), flex: 1}}>
                <Text style = {styles.textContainer} >C</Text>
                </View>
            </View>

            <View style = {styles.containerD}>
            <View style = {{backgroundColor: letraConsumoD(),flex: 1}}>
                <Text style = {styles.textContainer} >D</Text>
                </View>
            </View> 

            <View style = {styles.containerE}>
            <View style = {{backgroundColor: letraConsumoE(), flex: 1}}>
                <Text style = {styles.textContainer} >E</Text>
                </View>
            </View>

            <Text style = {styles.menosEficiente}>Menos Eficiente</Text>
            <Button
                title="Voltar"
                onPress={() => navigation.replace("Calcular")}
                color="#0078D4"
            />
            </View>

    )
}

export default Home

const styles = StyleSheet.create({
    containerPrincipal: {
        marginHorizontal: 5
    },

    textMedia:{
        fontSize: 17,
        marginTop: 5,
        marginBottom: 10,
        marginLeft: 5
    },

    containerA: {
        borderWidth: 1.5,
        marginTop: 10,
        marginBottom: 2,
        flexDirection: 'row',
        justifyContent: "space-between",
        width: "70%",
        height: 25       
    },

    containerB: {
        borderWidth: 1.5,
        marginVertical: 2,
        flexDirection: 'row',
        justifyContent: "space-between",
        width: "65%",
        height: 25       
    },

    containerC: {
        borderWidth: 1.5,
        marginVertical: 2,
        flexDirection: 'row',
        justifyContent: "space-between",
        width: "60%",
        height: 25       
    },

    containerD: {
        borderWidth: 1.5,
        marginVertical: 2,
        flexDirection: 'row',
        justifyContent: "space-between",
        width: "55%",
        height: 25       
    },

    containerE: {
        borderWidth: 1.5,
        marginTop: 2,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: "space-between",
        width: "50%",
        height: 25       
    },
    maisEficiente:{
        fontWeight: "bold"
    },
    menosEficiente:{
        marginBottom: 30,
        fontWeight: "bold"
    }, 

    textContainer: {
        marginLeft : 25
    }


})
