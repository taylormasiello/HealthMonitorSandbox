import React, { useState } from 'react';
import { Text, View, Switch } from 'react-native';
import { useHeartBeat } from './src/hooks/heartBeat';
import { styles } from './src/styles/theme';
import { UserInputs  } from "./src/types"; //DangerLevel

// DONT FORGET TO REMOVE COMMENTS AND CONSOLE LOGS AT THE END OF THE PROJECT !!!

// "warning !!" will be made dynamic ; only displays when "high danger"
// user name input, TextInput 

// function toggleUserInputs(inputs: UserInputs){
//   // const isAthelte = inputs.isAthlete;
//   // const isExercising = inputs.isExercising;

//   // const [isAthlete, setIsAthlete] = useState(inputs.isAthlete);
//   // const [isExercising, setIsExercising] = useState(inputs.isExercising);

//   const toggleIsAthlete = () => setIsAthlete(previousState => !previousState);
//   const toggleIsExercising = () => setIsExercising(previousState => !previousState);
// }

//export default function App() {
export default function App(inputs: UserInputs) {
  //maybe not? - init states for isAthlete and isExercising for user input
  // const [isAthelte, setIsAthlete] = useState(false);
  // const [isExercising, setIsExercising] = useState(false);

  // const isAthelte = inputs.isAthlete;
  // const isExercising = inputs.isExercising;

    var inputUpdate: UserInputs = {
    isAthlete: inputs.isAthlete,
    isExercising: inputs.isExercising,
  }

  // const toggleIsAthlete = () => setIsAthlete(previousState => !previousState);
  // const toggleIsExercising = () => setIsExercising(previousState => !previousState);

  let user = "Alex";

  const [isAthlete, setIsAthlete] = useState<boolean>(inputUpdate.isAthlete); //need <boolean> for setters w/ arrow function below
  const [isExercising, setIsExercising] = useState<boolean>(inputUpdate.isExercising);

  // const toggleIsAthlete = () => setIsAthlete(isAthlete.previousState => !isAthlete.previousState);
  // const toggleIsExercising = () => setIsExercising(isExercising.previousState => !isExercising.previousState);

  const toggleIsAthlete = () => setIsAthlete(previousState => !previousState);//prevState needs to know what type it is; why <boolean> in above setter
  const toggleIsExercising = () => setIsExercising(previousState => !previousState);

      var newInputs: UserInputs = {
    isAthlete: isAthlete, //updated values from userInput toggles/checkbox clicking
    isExercising: isExercising,
  }
  
  const { beat, isDanger } = useHeartBeat(newInputs); //needs UserInputs obj



  //const { beat, inputs: UserInputs } = useHeartBeat(inputs);
  // const [isAthelte, setIsAthlete] = useState(false);
  // const [isExercising, setIsExercising] = useState(false);
 
  //const toggleIsAthlete = () => setIsAthlete(previousState => !previousState);
  //const toggleIsExercising = () => setIsExercising(previousState => !previousState);
  //<Switch onValueChange={toggleIsAthlete => ()} value={isAthlete}/>


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
      <Text style={styles.warningOrange}>!! Warning!!</Text>
    </View>
  );
};


