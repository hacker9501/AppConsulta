import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../../Tabs/patient/HomeScreen';
import ChatScreen from '../../../Tabs/patient/ChatScreen';
import AppointmentScreen from '../../../Tabs/patient/AppointmentScreen';
import ProfileScreen from '../../../Tabs/patient/ProfileScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const MyTabs =() =>{
    return(<Tab.Navigator 
            screenOptions={({route})=>({

                tabBarIcon:({focused,color,size})=>{

                    let iconName = '';
                    switch (route.name) {
                        case 'Home':
                            iconName=focused ? 'home': 'home-outline';
                            break;
                        case 'Chat':
                        iconName=focused ? 'chatbubbles': 'chatbubbles-outline';
                            break;
                        case 'Appointment':
                        iconName=focused ? 'calendar': 'calendar-outline';
                            break;
                        case 'Profile':
                        iconName=focused ? 'person':'person-outline';
                        break;
                        default:
                            break;
                    }


                    return <Icon name={iconName} size={size} color={color}/>
                }

            })}
         >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Appointment" component={AppointmentScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>)
}

export default function HomePaciente() {
    
    return (
        <NavigationContainer>
        <MyTabs />
        </NavigationContainer>
    );
  }
