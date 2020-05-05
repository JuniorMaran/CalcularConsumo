import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

const Calcular = (props) => {
    const [kmRodado, setKmRodado] = useState("")
    const [combustivel, setCombustivel] = useState("")
    const [msg, setMsg] = useState("")

    const { navigation } = props
    let cor
    let media
    let letraConsumo

    const getConsumo = () => {
        media = kmRodado/combustivel 

        if (media > 0) {
            if (media > 12) {
                letraConsumo = "A"
            }
            else if ( media > 10 && media <= 12 ){
                letraConsumo = "B"
            }
            else if ( media > 8 && media <= 10 ){
                letraConsumo = "C"
            }
            else if ( media > 4 && media <= 8 ){
                letraConsumo = "D"
            }
            else if ( media <= 4 ){
               letraConsumo = "E"
            }

            navigation.navigate("Home", { media, cor, letraConsumo })
        }
        else {
            setMsg("Erro no calculo")
        }

    }

    return (
        <View style={styles.container}>
            <Text>{msg}</Text>
            <TextInput
                style={styles.caixaTexto}
                keyboardType={'numeric'}
                placeholder="Quilômetros rodados - KM"
                onChangeText={(valor) => setKmRodado(valor)}
                value={kmRodado}
            />
            <TextInput
                style={styles.caixaTexto}
                placeholder="Combustível gasto - L"
                keyboardType={'numeric'}
                onChangeText={(valor) => setCombustivel(valor)}
                value={combustivel}
            />
            <View style={styles.botaoDefault}>
                <Button
                    title="Calcular"
                    onPress={() => getConsumo()}
                />
            </View>
        </View>
    )
}

export default Calcular

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    caixaTexto: {
        borderWidth: 1,
        borderColor: 'gray',
        width: "90%",
        padding: 5,
        marginTop: 5
    },
    botaoDefault: {
        marginTop: 5
    }
});
