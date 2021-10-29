import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Login() {
    return (
        <View style={{flex:1, justifyContent: "center", alignItems: 'center', backgroundColor: 'white'}}>
            <Image
              style={{
                  width: 150,
                  height: 150,
                  borderRadius: 10,
                  marginBottom: 30,
                  transform: [{rotate:"45deg"}],
              }}
              source={{
                  uri:"https://cdn.pixabay.com/photo/2014/02/13/07/28/wordpress-265132__340.jpg",
              }}
            />  
        <Text style={{color: 'grey', fontSize: 24}}> Welcome To</Text>
        <Text style={{color: 'black', fontSize: 36, fontWeight: '600'}}> MyBlogSite</Text>
        <TouchableOpacity
            style={{
                backgroundColor: "#e3e3e3",
                padding: 10,
                paddingHorizontal: 40,
                borderRadius: 10,
                marginBottom: 10,
                flexDirection: "row",
            }}
        >
            <AntDesign name="google" size={24} color="orange" />
            <Text style={{ fontSize:20 , paddingLeft:10}}>
                Login with Gmail
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={{
                backgroundColor: "black",
                padding: 10,
                paddingHorizontal: 40,
                borderRadius: 10,
                flexDirection: 'row',
            }}
        >
            <AntDesign name="apple1" size={24} color="white" />
            <Text style={{ fontSize:20, color: 'white', paddingLeft: 10}}>
                Login with Apple
            </Text>
        </TouchableOpacity>
        <Text style={{color:'grey', padding:15}}>Not a member?
            <TouchableOpacity>
            <Text style={{color:'orange', paddingLeft:5}}>Sign up</Text>
            </ TouchableOpacity>
        </Text>
        </View>
    );
}
