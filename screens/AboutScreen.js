import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const AboutScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.textBox}>
                <Text style={styles.mainHeader}>Tell us about your business</Text>
                <Text style={[styles.mainHeader, styles.resizeText]}>Business Name</Text>
                <TextInput 
                    style={styles.input}
                    autoCapitalize = 'characters'
                />
                <Text style={[styles.mainHeader, styles.resizeText]}>Describe your Business</Text>
                <TextInput
                    style={styles.textArea}
                    numberOfLines={10}
                    multiline={true}
                    autoCapitalize = 'characters'
                />
            </View>

             <View style={styles.progressBar}>
                    <View style={styles.progressBarAlignment}>
                        <View style={styles.outerSmallCircle}>
                            <View style={styles.innerSmallCircle}>
                            <View style={styles.innerMostSmallCircle}></View>
                        </View>
                    </View>
                    <View style={styles.line}></View>
                    <View style={styles.outerSmallCircle}>
                        <View style={styles.innerSmallCircle}>
                            <View style={styles.innerMostSmallCircle}></View>
                        </View>
                    </View>
                    <View style={styles.line} opacity={0.3}></View>
                     <View style={styles.outerSmallCircle} opacity={0.3}>
                         {/* <View style={styles.innerSmallCircle}>
                            <View style={styles.innerMostSmallCircle}></View>
                        </View> */}
                     </View>
                  </View>
                </View>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>Next</Text>
                </View>
        </View>
    )
}

export default AboutScreen

const styles = StyleSheet.create({
    container:{
        position: 'relative',
        flex: 1,
        backgroundColor: '#C20370',
        width: '100%',
    },
    mainHeader:{
        fontFamily: 'WorkSans-Regular, sans-serif',
        fontSize: 28,
        color: '#FFFFFF'
    },
    textBox:{
        marginHorizontal: 40 ,
        marginVertical: 20,
    },
     resizeText:{
        fontSize: 18,
        textTransform: 'uppercase',
        marginTop: 30
    },
    input:{
        fontSize: 16,
        borderBottomWidth: 2,
        borderBottomColor: '#FFFFFF',
        color: '#FFFFFF'
    },
    textArea: {
        height: 150,
        justifyContent: "flex-start",
        textAlignVertical: 'top',
        borderWidth: 2,
        borderColor: '#FFFFFF',
        marginTop: 30,
        color: '#FFFFFF'
  },
   progressBar:{
        width: '100%',
        bottom: 0,
        top: 10,
        zIndex: 80,
        justifyContent: 'space-between',
        alignItems: 'center',
  },
  outerSmallCircle:{
        width: 20, 
        height: 20, 
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
 progressBarAlignment:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 120
    },
innerSmallCircle:{
        width: 16, 
        height: 16,  
        borderRadius: 8,
        backgroundColor: '#C20370',
        justifyContent: 'center',
        alignItems: 'center',
    },
innerMostSmallCircle:{
        width: 12, 
        height: 12,  
        borderRadius: 6,
        backgroundColor: '#FFFFFF',
    },
 line:{
        width: 80,
        height: 2,
        backgroundColor: '#FFFFFF',
 },
 footer:{
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 60,
        width: '100%',
        height: 64,
        backgroundColor: '#FFFFFF',
        left: 0,
        top: 624
 },
 footerText:{
        fontSize: 22,
        fontWeight: '500'
 }

})
