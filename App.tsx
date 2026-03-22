import React, { useState } from 'react';
import { Text, View, Switch } from 'react-native';
import { useHeartBeat } from './src/hooks/heartBeat';
import { styles } from './src/styles/theme';
import { UserInputs  } from "./src/types"; //DangerLevel

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
      <Text style={[styles.normalGreen, isDanger && styles.dangerRed]}>{beat}</Text>
      {isDanger ? <Text style={styles.warningOrange}>!! Warning!!</Text> : null}
    </View>
  );
};

//<Text style={[styles.normalGreen, isDanger && styles.dangerRed]}>{beat}</Text>
//<Text style={[isDanger ? styles.warningOrange : null]}>!! Warning!!</Text>
//<Text style={[isDanger ? styles.warningOrange : null]}>!! Warning!!</Text>
//<Text style={[styles.invisible, isDanger && styles.warningOrange]}>!! Warning!!</Text>