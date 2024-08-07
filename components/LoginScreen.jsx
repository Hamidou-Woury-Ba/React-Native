import { View, Text } from 'react-native'
import React from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import {Colors} from './../constants/Colors'
import * as WebBrowser from 'expo-web-browser'
import { useWarmUpBrowser } from './../hooks/useWarmUpBrowser'
import { useOAuth } from '@clerk/clerk-expo'

WebBrowser.maybeCompleteAuthSession()
export default function LoginScreen() {
    useWarmUpBrowser()

    const {startOAuthFlow} = useOAuth({ strategy : "oauth_google"})
    
    const onPress = React.useCallback(async () => {
        try {
            const {createdSessionId, SignIn, SignUp, setActive} = await startOAuthFlow()
            if(createdSessionId){
                setActive({session:createdSessionId})
            }else{

            }
        } catch (error) {
            console.log("OAuth error", error)
        }
    }, [])

    return (
    <View>
        <View style={{
            display:'flex',
            alignItems:'center',
            marginTop: 100
        }}>        
            <Image source={require('./../assets/images/Login.png')} 
                style={{
                    width: 220, 
                    height: 400, 
                    borderRadius:20, 
                    borderWidth:6, 
                    borderColor:'#000000'
                }} 
            />
        </View>
        <View style={styles.subContainer}>
            <Text style={{
                fontSize:30,
                fontFamily:'outfit-bold',   
                textAlign:'center',
            }}> You Ultimate
                <Text style={{color:Colors.PRIMARY}}> Community Business Directory </Text>
                <Text> App</Text>
            </Text>
            <Text style={{
                fontSize:15,
                fontFamily:'outfit',
                textAlign:'center',
                marginVertical:15,
                color:Colors.GRAY
            }}>Find your favorite near you and post your own business to your community</Text>
        
            <TouchableOpacity style={styles.btn} onPress={onPress}>
                <Text style={{
                    textAlign:'center',
                    color:'#fff',
                    fontFamily:'outfit'
                }}>Let's get started</Text>
            </TouchableOpacity>
            
        </View>
    </View>
    )
}

    const styles = StyleSheet.create({
    subContainer:{
    backgroundColor:'#fff',
    padding:20,
    marginTop:-20,
    },

    btn:{
    backgroundColor:Colors.PRIMARY,
    padding:16,
    borderRadius:99,
    marginTop:20
    }
})
