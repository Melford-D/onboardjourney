import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ImageGrid = () => {
    return (
        <View style={styles.nav}>
            <View style={styles.navText}>
                <View>
                    <Text style={styles.mainText}>What do you do?</Text>
                    <Text style={styles.text}>You can select multiple options</Text>
                </View>
                <View>
                    <Text style={styles.textSkip}>Skip</Text>
                </View>
            </View>
        </View>
    )
}

export default ImageGrid

const styles = StyleSheet.create({
    nav:{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#161F51'
    },
    navText:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'baseline'
    },
    mainText:{
        fontFamily: 'WorkSans-Regular',
        color: '#FFFFFF',
        fontSize: 28,
        fontWeight: '500',
        marginTop: 50
    },
    text:{
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 20
    },
     textSkip:{
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: '500',
        marginBottom: 20,
        textTransform: 'uppercase',
        textDecorationLine: 'underline',
        letterSpacing: 1
    }
})
