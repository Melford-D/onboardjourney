import React,{useState, useEffect} from 'react'
import { StyleSheet, Text, View, FlatList, ActivityIndicator, Image } from 'react-native'

const Server = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(async ()=>{
        try {
            let response = await fetch('https://uplanit-test-api.herokuapp.com/public/category');
            let json = await response.json();
            return setData(json.map((item) => item.image))
        } catch (error) {
            console.error(error)
        }
            setLoading(false);
    },[]);
    return (
        <View style={styles.container}>
           {isLoading ? <ActivityIndicator size='large' /> : (
               <FlatList 
                data={data}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => (
                        <View>
                            <Text style={{fontSize: 20, color:'black'}}>{item.name}</Text>
                            <Image
                            source={{
                                width: 150,
                                height: 150,
                                uri: item.path
                                }}
                            />
                        </View>
                )}
               />
           )}
        </View>
    )
}

export default Server

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
