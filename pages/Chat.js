import react from "react";
import { View , StyleSheet,Text,Image , FlatList } from "react-native";
import {COLOURS} from '../database/items';
import { user } from "../constants/icons";

const message =[
    {
        id:'1',
        userName:'islem saadi',
        userImg:require('../database/image/saloumi.jpg'),
        messageTime:'4min ago',
        messageText:'classic maison disponible'
    }
]


const Chat = () => {
    return (
       
        <View>
             <FlatList 
             data={message}
             renderItem={({item}) => (
                <View>
                <Text>
                {item.userName}
                {item.userImg}
                
                </Text>
                </View>
             )}
             />
                

             
            </View>
    )
};


export default Chat;