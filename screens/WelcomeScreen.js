import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const WelcomeScreen = ({navigation}) => {
    return (
    
          <View style={styles.main}>
            <Text style={styles.mainHeadingColor}>Welcome Jane!</Text>
            <Text style={styles.mainParagraphColor}>Now, let's set up your business profile</Text>
            <View style={styles.circles}>
                <View style={styles.outerCircle}>
                    <View style={styles.innerCircle} onPress={()=> navigation.navigate('AboutScreen')}>
                        <Image 
                        style={styles.arrowHead} source={require('../assets/arrowhead3.png')
                        }/>
                    </View> 
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
                         <View style={styles.innerSmallCircle}>
                            <View style={styles.innerMostSmallCircle}></View>
                        </View>
                     </View>
                      </View>
                </View>
            </View>
        </View>

    )
};

  const styles = StyleSheet.create({
    main:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E5E5E5',
        marginTop: 10,
        width: '100%',
        fontFamily: 'WorkSans-Regular, sans-serif',
  },
  mainHeadingColor: {
        fontSize: 28,
        color: '#C20370',
  },
  mainParagraphColor: {
        fontSize: 16,
        color: '#C20370',
        marginTop: 15,
  },
  circles:{
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
  },
  outerCircle: {
        position: 'relative',
        width: 200, 
        height: 200, 
        borderRadius: 100,
        marginTop: 80,
        marginLeft: 30,
        backgroundColor: '#C20370'
  },
   innerCircle: {
        position: 'absolute',
        width: 180, 
        height: 180, 
        backgroundColor:'white', 
        borderRadius: 90,
        marginTop: 200,
        left: 10,
        zIndex: 90,
        top: -190,
  },
  arrowHead:{
      width: 90,
      height: 90,
      left: 40,
      top: 50,
      backgroundColor: 'white',
      zIndex: 99
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
    backgroundColor: '#C20370',
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
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    },
innerMostSmallCircle:{
    width: 12, 
    height: 12,  
    borderRadius: 6,
    backgroundColor: '#C20370',
    },
 line:{
     width: 80,
     height: 2,
     backgroundColor: '#C20370',
 }
})

export default WelcomeScreen


