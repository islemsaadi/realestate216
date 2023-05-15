import React, { useState } from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView,TextInput,Button,FlatList} from 'react-native';
import {COLOURS} from '../database/items';
import { icons, } from '../constants'


const Details = ({route, navigation}) => {
  const {
    name,
    price,
    image,
    crust,
    ingredients,
    isTopOfTheWeek,
    location,
    description,
    weight,
    size
  } = route.params;
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleCommentChange = (text) => {
    setComment(text);
  };

  const handleCommentSubmit = () => {
    if (comment.trim() !== '') {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.white,
        position: 'relative',
      }}>
      <View
        style={{
          padding: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            width: 40,
            height: 40,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: COLOURS.lightGray,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
                        source={icons.heyy}
                        
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
        </TouchableOpacity>
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 10,
            backgroundColor: COLOURS.accent,
            opacity: isTopOfTheWeek ? 1 : 0.5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
                        source={icons.like}
                        
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
        </View>
      </View>
      <Text
        style={{
          fontSize: 38,
          color: COLOURS.black,
          fontWeight: '800',
          paddingHorizontal: 20,
          maxWidth: 310,
        }}>
        {name}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 20,
        }}>
          <Text
          style={{
            fontSize: 15,
            color: COLOURS.accentRed,
            fontWeight: '900',
          }}>
          {price}
        </Text>
        
      </View>
      <View
        style={{
          flexDirection: 'row',
          maxHeight: 300,
          width: '100%',
          alignItems: 'center',
        }}>
        <View style={{paddingHorizontal: 20}}>
          <View style={{paddingVertical: 10}}>
            <Text
              style={{
                fontSize: 18,
                color: COLOURS.black,
                fontWeight: '600',
              }}>
              location
            </Text>
            <Text
              style={{
                fontSize: 13,
                color: COLOURS.black,
                opacity: 0.5,
              }}>
              {location}
            </Text>
          </View>
          <View style={{paddingVertical: 20}}>
            <Text
              style={{
                fontSize: 12,
                color: COLOURS.black,
                opacity: 0.5,
              }}>
              surface
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: COLOURS.black,
                fontWeight: '600',
              }}>
              {crust}
            </Text>
          </View>
          <View style={{paddingVertical: 20}}>
            <Text
              style={{
                fontSize: 12,
                color: COLOURS.black,
                opacity: 0.5,
              }}>
              disponibilité
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: COLOURS.black,
                fontWeight: '600',
              }}>
              disponible
            </Text>
          </View>                  
        </View>
        <View
          style={{
            width: 380,
            height: 380,
          }}>
          <Image
            source={image}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
            }}
          />
          
        </View>
      </View>
      <Text
        style={{
          paddingTop: 1,
          paddingHorizontal: 20,
          fontSize: 20,
          fontWeight: '700',
          color: COLOURS.black,
        }}>
house tower       </Text>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {ingredients.map((data, index) => {
          return (
            <View
              key={index}
              style={{
                margin: 12,
                width: 80,
                height: 80,
                borderRadius: 20,
                backgroundColor: COLOURS.white,
                elevation: 5,
              }}>
              <Image
                source={data}
                style={{width: '100%', height: '100%', resizeMode: 'contain'}}
              />
              
          
            </View>
            
            
          );
          
          
          
        })}
         
        
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          width: '100%',
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <TextInput
        value={comment}
        onChangeText={handleCommentChange}
        placeholder="Ajouter un commentaire"
      />
      
      <FlatList
        data={comments}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
          
     
          
        <TouchableOpacity
          onPress={() => navigation.navigate('Formulaire')}
          style={{
            width: '90%',
            height: 80,
            backgroundColor: COLOURS.accent,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row', 
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: COLOURS.black,
              letterSpacing: 1,
              marginRight: 10,
            }}>
            Reserver
          </Text>
          
        </TouchableOpacity>
      </View>
    </View>
  );
  
};

export default Details;
