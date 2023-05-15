import react from "react";
import { View , StyleSheet,Text,Image,TouchableOpacity } from "react-native";
import {COLOURS} from '../database/items';
import { red100 } from "react-native-paper/lib/typescript/src/styles/themes/v2/colors";

const User = ({navigation}) => {
    return (
        <View style={styles.screen}>
            <View style={styles.imageContainer}>
                <Image source={require('../database/image/saloumi.jpg')}
                       style={styles.image} resizeMode="cover"
                >

                </Image>

            </View>
            <View>
                <Text style={styles.screenn}>
                    Profil
                </Text>
            </View>
            <View>
            <Text style={styles.screennn}> Nom:saadi </Text>
            <Text style={styles.screennn}> Prénom:islem </Text>
            <Text style={styles.screennn}> Email:islemsaidi164@gmail.com </Text>
            <Text style={styles.screennn}> Mdp:islemsaadi123 </Text>



            </View>
        <View style={styless.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('NewPasswordScreen')}
        >
          <Text style={styless.forgot}>New password?</Text>
        </TouchableOpacity>
      </View>

        </View>
        
    );
};
const styles =StyleSheet.create({
    screen:{
        flex:1,
        alignItems:'center',
        paddingTop:50
    },
    screenn:{
        fontSize: 30,
          color: COLOURS.black,
          fontWeight: '800',
          textAlign:'right'
    },
    screennn:{
        fontSize: 20,
          color: COLOURS.Gray,
          fontWeight: '800',
          textAlign:'left'
    },
    imageContainer:{
        width:200,
        height:200,
        borderRadius:200,
        borderColor:'black',
        overflow:'hidden',
        marginVertical:5
    },
    image:{
        width:'100%',
        height:'100%',
    }
});
const styless =StyleSheet.create({
    forgot:{
        flex:1,
        paddingTop:50,
        color: COLOURS.accentPink,
        fontSize: 17,
        fontWeight: '800',
        textAlign:'auto'



        
  
    },
   
});
export default User;