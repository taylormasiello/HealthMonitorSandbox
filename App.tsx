import React, { useState } from 'react';
import { Text, View, Switch } from 'react-native';
import { useHeartBeat } from './src/hooks/heartBeat';
import { styles } from './src/styles/theme';
import { UserInputs, DangerLevel } from "./src/types"; //DangerLevel

// DONT FORGET TO REMOVE COMMENTS AND CONSOLE LOGS AT THE END OF THE PROJECT !!!

// "warning !!" will be made dynamic ; only displays when "high danger"
// user name input, TextInput 

//export default function App() {
export default function App(inputs: UserInputs) { //inputs are from user inputs (before new change that may happen within this function)
  //init states for isAthlete and isExercising for user input to update
  
  //"default" inputObj from inputs arg
  var inputUpdate: UserInputs = {
    isAthlete: inputs.isAthlete,
    isExercising: inputs.isExercising,
  }
  
  //text box input to update this string variable !
  let user = "Alex";
  //text box input to update this string variable !

  const [isAthlete, setIsAthlete] = useState<boolean>(inputUpdate.isAthlete); //need <boolean> for setters w/ arrow function below
  const [isExercising, setIsExercising] = useState<boolean>(inputUpdate.isExercising);

  const toggleIsAthlete = () => setIsAthlete(previousState => !previousState); //prevState needs to know what type it is;
  const toggleIsExercising = () => setIsExercising(previousState => !previousState); //^why <boolean> in above setter

  //updated inputObj from user inputs from checkbox toggles
  var newInputs: UserInputs = {
    isAthlete: isAthlete, //updated values from userInput toggles/checkbox clicking/changing the values of the checkboxes
    isExercising: isExercising,
  }
  
  const { beat, isDanger } = useHeartBeat(newInputs); //takes in updated from user inputs UserInputs obj

  //isDanger conditional styling logic; returns STYLE COLOR not dangerLevel
  function checkDangerLevel(danger: DangerLevel){
    if (danger === 'EMG'){
      return styles.veryDangerRed;
    }

    if (danger === 'HIGH'){
      return styles.dangerRed;
    } else if (danger === 'NONE'){
      return styles.normalGreen;
    }

    return styles.normalGreen;
  }

  //"as DangerLevel" necessary to type gaurd dangerCheck to prevent string vs DangerLevel obj conflicts
  //^"as" operator explicitly tells compiler result of parenthesis is to be treated AS the obj, DangerLevel
  //^^forces dangerCheck to match necessary arg type required by checkDangerLevel
  const dangerCheck: DangerLevel = (isDanger || 'NONE') as DangerLevel;   //'NONE' default for first render
  
  
  //const test = isDanger;
  //const testing: DangerLevel = (isDanger ? isDanger : 'NONE');
  //const testing: DangerLevel = (isDanger || 'NONE') as DangerLevel;

  return ( 
    <View style={styles.mainContainer}>
      <Text style={styles.bigTitleBlue}>Tay's Heart Beat Monitor</Text>
      <Text style={styles.medTitlePurple}>Hello {user}!</Text>

      <View>
        <Text>"Check if you're an Athlete:</Text>
        <Switch onValueChange={() => toggleIsAthlete()} value={isAthlete}/>
      </View>
        <View>
          <Text>Check if you're currently Exercising:</Text>
          <Switch onValueChange={() => toggleIsExercising()} value={isExercising}/>
      </View>

      <Text style={styles.smallTitleDarkYellow}>My beats so far are:</Text>
      <Text style={checkDangerLevel((dangerCheck))}>{beat}</Text>
      
      {(isDanger === 'EMG') ? <Text style={styles.warningOrange}>!! Warning!!</Text> : null}
    </View>
  );
};

// if EMG => verydangerred

  // function checkIsDanger(isDanger){
  //   if (isDanger === 'EMG'){
  //     return isDanger;
  //   }

  //   if (isDanger === 'HIGH'){
  //     return isDanger;
  //   } else if (isDanger === 'NONE'){
  //     return isDanger;
  //   }

  //   return 'NONE';
  // }

//{isDanger ? <Text style={styles.warningOrange}>!! Warning!!</Text> : null}
//<Text style={[styles.normalGreen, isDanger && styles.dangerRed]}>{beat}</Text>
//<Text style={[isDanger ? styles.warningOrange : null]}>!! Warning!!</Text>
//<Text style={[isDanger ? styles.warningOrange : null]}>!! Warning!!</Text>
//<Text style={[styles.invisible, isDanger && styles.warningOrange]}>!! Warning!!</Text>


    //<Text style={[(styles.normalGreen, isDanger && styles.dangerRed) || (styles.veryDangerRed, (DangerLevel='EMG'))]}>{beat}</Text> */

      //<Text style={[(isDanger === 'NONE') ? styles.normalGreen : (((isDanger === 'HIGH') ? styles.dangerRed) : (isDanger === 'EMG') ? styles.veryDangerRed : styles.normalGreen))]}>{beat}</Text>*/