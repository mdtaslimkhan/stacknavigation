import { useEffect } from 'react';
import { StyleSheet, View, Text, StatusBar, Pressable } from 'react-native';


function Home ({ navigation, route }) {


    function handlePress () {
        console.log("hello");
        navigation.navigate('Dashboard');
    }

    return(    
    <View style={styles.container}>
        <Text>Hello</Text>
        <StatusBar style="auto" />
        <Pressable onPress={handlePress}  >
            {({pressed}) => 
            <Text style={[{ fontSize : pressed ? 40 : 30}]} >
                { pressed ? ' Boop!' : 'preddes'}</Text>
            }
        </Pressable>
      </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    btn: {
        color: 'red',
        fontSize: 20
    },
    pressed: {
        color: 'green',
        fontSize: 30
    }
  });
  

export default Home;