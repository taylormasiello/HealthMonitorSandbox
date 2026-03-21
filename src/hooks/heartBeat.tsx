import React, {useState, useEffect } from 'react';
import * as Haptics from 'expo-haptics';

// red if above 100 OR below 60;
// checkbox for "are athelte?" - true=>diff const bmpMinAth used
// checkbox for "are excercising?" - true=>diff const bmpMaxEx used
// could add warning modals for specific thresholds

const bpmMin = 35
const bmpMax = 195

function getRandomBMP(min: number, max: number){
  var bpm = Math.random();

  return Math.floor(bpm * ((max - min + 1) + min)); // +1 makes it inclusive ; + min bumps math.random from 1 to the min value

}


var bpm = getRandomBMP(bpmMin, bmpMax);


const triggerBuzz = async () => {
  try {
    await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error); // changed to Error as Warning type was too subtle imo
    console.log("Haptic engine succeed!")  

  } catch (error) {
    console.log("Haptic engine failed: ", error)
  }
};

function buzzBuzz() {
  if (bpm > 100 || bpm < 60) {
    triggerBuzz();
  }
}

export function useHeartBeat() {
  const [beat, setBeat] = useState(bpm);

  useEffect (() => {
    const beatTimer = setTimeout(() => {
      setBeat(( getRandomBMP(bpmMin, bmpMax)));
    }, 1000);

    buzzBuzz();

    return () => clearTimeout(beatTimer);
  }, [beat]);

  //buzzBuzz();

  return {beat}
}