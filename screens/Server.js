import React,{useState, useEffect} from 'react'
import { StyleSheet, Text, View, FlatList, ActivityIndicator, Image } from 'react-native'

const Server = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            let response = await fetch('https://uplanit-test-api.herokuapp.com/public/category');
            let json = await response.json();
            setLoading(false);
            return setData(json.map((item) => item.image))
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(async ()=>{
        fetchData()
    },[]);

    const _renderItem = ({ item }) =>{
                    return(
                        <View>
                            <Text style={{fontSize: 20, color:'black'}}>{item.name}</Text>
                            <Image 
                            source={{uri: item.path}}
                            style={{width: 150, height: 150}}
                            />
                        </View>
                )};
    return (
        <View style={styles.container}>
           {isLoading ? <ActivityIndicator size='large' /> : (
               <FlatList 
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={_renderItem}
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
