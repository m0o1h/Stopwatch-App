import React,{useState, useEffect} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Styles } from './Styles';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Screen2({navigation}) {
  const [hour, setHour]= useState(0)
  const [minute, setMinute]= useState(0)
  const [second, setSecond]= useState(0)
  const [interv, setInterv] = useState()
  const [timerOn, setTimerOn] = useState(0)
  const [stoped, setStoped] = useState(0)
  const [updated, setUpdated] = useState(false)

  let currentSecond=second
  let currentMinute=minute
  let currentHour=hour
  const updateTimer=()=>{
    if(currentSecond == 59 && updated==false){
      currentSecond=0
      currentMinute = currentMinute + 1
      setUpdated(true)
    }
    else if(currentMinute == 59 && updated==false){
      currentMinute = 0
      currentSecond = 0
      currentHour = currentHour + 1
      setUpdated(true)
    }
    else if(updated==false){
      currentSecond++
      setUpdated(true)
    }
    setSecond(currentSecond)
    setMinute(currentMinute)
    setHour(currentHour)
    setUpdated(false)
  }
  const startTimer=()=>{
    //updateTimer()
    setInterv(setInterval(() => { updateTimer() }, 1000))
    setTimerOn(1)
    setStoped(0)
  }
  const stopTimer=()=>{
    setStoped(1)
    clearInterval(interv)
  }
  const restartTimer=()=>{
    setHour(0)
    setMinute(0)
    setSecond(0)
    clearInterval(interv)
    setTimerOn(0)
  }
  return (
    <View style={Styles.screen1_container} >
        <Text style={Styles.hour} >{hour>9?hour:'0'+hour}
            <Text style={Styles.smallText} >Hr</Text>
        </Text>
        <Text style={Styles.minute} >{minute>9?minute:'0'+minute}
        <Text style={Styles.smallText} >Min</Text>
        </Text>
        {/* <Text style={Styles.ampm} >AM</Text> */}
        <Text style={Styles.timerSeconds} >{second>9?second:'0'+second}
        <Text style={Styles.smallText} >Sec</Text>
        </Text>

        {timerOn==0?
        <View style={Styles.startStop} >
          <TouchableOpacity onPress={startTimer} >
            <Text style={Styles.start} >Start</Text>
          </TouchableOpacity>
        </View>
        :

        <View style={Styles.startStop} >
           <TouchableOpacity onPress={restartTimer} >
                <Text style={Styles.reset} >Reset</Text>
            </TouchableOpacity>

            {stoped==0?
            <TouchableOpacity onPress={stopTimer}
            style={Styles.stopContainer}
             >
                <Text style={Styles.stop} >Stop</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity onPress={startTimer}
            style={Styles.stopContainer}
             >
                <Text style={Styles.stop} >Continue</Text>
            </TouchableOpacity>
            }
        </View>

        }

        <View style={Styles.bottomNavigation} >
          <TouchableOpacity
          onPress={()=>navigation.navigate('Screen1')}
          >
            {/* <Text style={Styles.bottomButtonText} >+</Text> */}
            <AntDesign name="clockcircle" size={35} color="grey" style={Styles.bottomButtonIcon} />
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>navigation.navigate('Screen2')}
          >
            {/* <Text style={Styles.bottomButtonText} >+</Text> */}
            <MaterialCommunityIcons name="timer" size={40} color="white" style={Styles.bottomButtonIcon} />
          </TouchableOpacity>
        </View>
    </View>
  )

}

