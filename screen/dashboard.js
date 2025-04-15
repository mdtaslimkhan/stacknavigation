import { StackActions } from "@react-navigation/native";
import { StyleSheet, View, StatusBar, Text, Pressable } from "react-native";

function Dashboard ({navigation, route}) {

   function handlePress(){
        navigation.dispatch(StackActions.popToTop());
   }

   return(    
    <>
        <StatusBar style="auto"/>
        <View style={styles.container}>
            <Text>Dashboard</Text>
            <Pressable onPress={handlePress} >
                <Text>Home</Text>
            </Pressable>
        </View>
    </>
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


export default Dashboard;