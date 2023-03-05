import React,{useState, useEffect} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Styles } from './Styles';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Screen1({navigation}) {
    const [hour,setHour] = useState('00');
    const [minute,setMinute] = useState('00');
    const [second,setSecond] = useState('00');
    const [ampm,setAmPm] = useState('00');

    useEffect(()=>{
      getHour()
      getMinute()
      getSceond()
      getAmpm()
    },[])

    const getHour = () =>{
        const date = new Date();
        const hour = date.getHours();
        hour > 9 ? setHour(hour) : setHour('0' + hour)
    }

    const getMinute = () =>{
      const date = new Date();
      const minute = date.getMinutes();
      minute > 9 ? setMinute(minute) : setMinute('0' + minute)
    }

    const getSceond = () =>{
      const date = new Date();
      const second = date.getSeconds();
      second > 9 ? setSecond(second) : setSecond('0' + second)
    }

    const getAmpm = () =>{
      const date = new Date();
      const ampm = date.getHours() >= 12 ? 'PM' : 'AM';
      setAmPm(ampm)
    }

    setInterval(() => {
      getHour()
      getMinute()
      getSceond()
      getAmpm()
    }, 1000);


  return (
    <View style={Styles.screen1_container} >
        <Text style={Styles.hour} >{hour}</Text>
        <Text style={Styles.minute} >{minute}</Text>
        <Text style={Styles.clockSeconds} >{second}
            <Text style={Styles.ampm} >{ampm}</Text>
        </Text>

        <View style={Styles.bottomNavigation} >
          <TouchableOpacity
          onPress={()=>navigation.navigate('Screen1')}
          >
            <AntDesign name="clockcircle" size={35} color="white" style={Styles.bottomButtonIcon} />
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>navigation.navigate('Screen2')}
          >
            <MaterialCommunityIcons name="timer" size={40} color="grey" style={Styles.bottomButtonIcon} />
          </TouchableOpacity>
        </View>
    </View>
  )

}

