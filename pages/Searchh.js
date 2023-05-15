import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import {Categories, COLOURS} from '../database/items';
import { icons, images, SIZES, COLORS, FONTS } from '../constants'



const Searchh = ({navigation}) => {
  const [currentSelected, setCurrentSelected] = useState([0]);

  const renderCategories = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => setCurrentSelected(index)}>
        <View
          style={{
            width: 120,
            height: 180,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor:
              currentSelected == index ? COLOURS.accent : COLOURS.white,
            borderRadius: 20,
            margin: 10,
            elevation: 5,
          }}>
          <View style={{width: 60, height: 60}}>
            <Image
              source={item.image}
              style={{
                width: '100%',
                height: '100%',
                resizeMode: 'center',
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 16,
              color: COLOURS.black,
              fontWeight: '600',
            }}>
            {item.name}
          </Text>
          <View
            style={{
              width: 30,
              height: 30,
              borderRadius: 100,
              backgroundColor:
                currentSelected == index ? COLOURS.white : COLOURS.accentRed,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
                        source={icons.hey}
                        resizeMode="contain"
                        style={{
                            width: 31,
                            height: 31
                        }}
                    />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderItems = (data, index) => {
    return (
      <TouchableOpacity
        key={index}
        activeOpacity={0.9}
        style={{
          width: '100%',
          height: 180,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() =>
          navigation.push('Details', {
            name: data.name,
            price: data.price,
            image: data.image,
            size: data.size,
            crust: data.crust,
            location: data.location,
            ingredients: data.ingredients,
            isTopOfTheWeek: data.isTopOfTheWeek,
            navigation: navigation,
            surface:data.surface,
            weight:data.weight,
            weight:data.weight,
          })
        }>
        <View
          style={{
            width: '90%',
            height: 160,
            backgroundColor: COLOURS.white,
            borderRadius: 20,
            elevation: 4,
            position: 'relative',
            padding: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{marginBottom: 50}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                display: data.isTopOfTheWeek ? 'flex' : 'none',
              }}>
              <Image
                        source={icons.etoile}
                        resizeMode="contain"
                        style={{
                            width: 20,
                            height: 20
                        }}
                    />
              <Text
                style={{
                  fontSize: 12,
                  color: COLOURS.black,
                  opacity: 50,
                  marginLeft: 5,
                }}>
                top of the week
              </Text>
            </View>
            <Text
              style={{
                fontSize: 22,
                color: COLOURS.black,
                fontWeight: 'bold',
                paddingTop: 10,
              }}>
              {data.name}
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: COLOURS.black,
                opacity: 3,
              }}>
              {data.weight}
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: COLOURS.accentRed,
                opacity: 3,
              }}>
              {data.location}
            </Text>
          </View>
          <View style={{width: 150, height: 150, marginRight: -45}}>
            <Image
              source={data.image}
              style={{
                width: '100%',
                height: '100%',
                resizeMode: 'contain',
              }}
            />
          </View>
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 85,
                height: 50,
                
                borderTopRightRadius: 20,
                borderBottomLeftRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}> 
                 <Image
                        source={icons.location}
                        resizeMode="contain"
                        style={{
                            width: 25,
                            height: 25
                            
                        }}
                    />       
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 20,
              }}>
              <Image
                        source={icons.room}
                        resizeMode="contain"
                        style={{
                            width: 40,
                            height: 40
                        }}
                    />
              <Text
                style={{
                  fontSize: 12,
                  color: COLOURS.black,
                  fontWeight: 'bold',
                }}>
                {data.rating}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 20,
              }}>
              <Image
                        source={icons.rectangle}
                        resizeMode="contain"
                        style={{
                            width: 40,
                            height: 40
                        }}
                    />
              <Text
                style={{
                  fontSize: 12,
                  color: COLOURS.black,
                  fontWeight: 'bold',
                }}>
                {data.surface}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.white,
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: COLOURS.white,
            position: 'relative',
          }}>
          <StatusBar backgroundColor={COLOURS.white} barStyle="dark-content" />
          <Image
            source={require('../database/image/background.png')}
            style={{position: 'absolute', top: 0, left: -100}}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 20,
            }}>
            <TouchableOpacity
              style={{
                width: 40,
                height: 40,
              }}>
              <Image
                source={require('../database/image/saloumi.jpg')}
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'contain',
                  borderRadius: 500,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Details')}>                    
            <Image
                        source={icons.Notification}
                        
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
            
            
            </TouchableOpacity>
          </View>
          <View style={{padding: 20}}>
            <Text
              style={{
                fontSize: 16,
                color: COLOURS.black,
                opacity: 200,
                fontWeight: '400',
              }}>
              Real
            </Text>
            <Text
              style={{
                fontSize: 40,
                color: COLOURS.black,
                fontWeight: '600',
                letterSpacing: 2,
              }}>
              Estate216
            </Text>
          </View>
          <View
            style={{
              paddingHorizontal: 20,
              paddingVertical: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
                        source={icons.search}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
            <TextInput
              placeholder="Search..."
              style={{
                color: COLOURS.black,
                fontSize: 16,
                paddingVertical: 5,
                borderBottomWidth: 1,
                borderBottomColor: COLOURS.black + 20,
                width: '90%',
                marginLeft: 10,
                letterSpacing: 1,
              }}
            />
          </View>
          <Text
            style={{
              paddingTop: 20,
              paddingHorizontal: 20,
              fontSize: 18,
              fontWeight: '700',
              color: COLOURS.black,
              letterSpacing: 1,
            }}>
            Categories
          </Text>
          <FlatList
            horizontal={true}
            data={Categories}
            renderItem={renderCategories}
            showsHorizontalScrollIndicator={false}
          />
          <Text
            style={{
              paddingTop: 20,
              paddingHorizontal: 20,
              fontSize: 18,
              fontWeight: '700',
              color: COLOURS.black,
            }}>
            Popular
          </Text>
          {Categories[currentSelected].items.map(renderItems)}
          <TouchableOpacity
            style={{
              margin: 30,
              justifyContent: 'center',
              alignItems: 'center',
              opacity: 0.5,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: COLOURS.black,
                borderBottomWidth: 1,
                borderBottomColor: COLOURS.black,
              }}>
              Load more
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Searchh;
