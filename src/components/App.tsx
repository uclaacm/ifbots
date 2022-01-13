import { useState } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {generateRandomInteger} from '../common/math';
import { statsObject } from '../common/types';
import Landing from './pages/Landing';
import English from './pages/English';
import EasyIf from './pages/EasyIf';
import HungerIfElse from './pages/HungerIfElse';
import ObstacleIfElse from './pages/ObstacleIfElse';
import IfElif from './pages/IfElif';
import Nested from './pages/Nested';
import Footer from './shared/Footer';
import Stats from './shared/Stats';
import UpperSection from './shared/UpperSection';
import '../styles/app.scss';
import '../assets/WestwoodSans-Regular.ttf';

function App(): JSX.Element {
  const [playerStats, setPlayerStats] = useState<statsObject>({
    battery: generateRandomInteger(1,10),
    speed: generateRandomInteger(1,10),
    hunger: generateRandomInteger(1,10),
    strength: generateRandomInteger(1,10),
  });

  const onClick = (addBattery:number, addSpeed:number, addStrength:number, addHunger:number) => {
    setPlayerStats({
      battery: playerStats.battery + addBattery,
      speed: playerStats.speed + addSpeed,
      hunger: playerStats.hunger + addHunger,
      strength: playerStats.strength + addStrength,
    });
  };

  return (
    <Router>
      <div id="app-wrapper">
        <UpperSection onClick={onClick}/>
        <Switch>
          <Route exact path ="/"><Landing/></Route>
          <Route exact path ="/english"><English/></Route>
          <Route exact path ="/easyif"><EasyIf/></Route>
          <Route exact path="/hungerifelse"><HungerIfElse/></Route>
          <Route exact path="/obstacleifelse"><ObstacleIfElse/></Route>
          <Route exact path="/ifelif"><IfElif/></Route>
          <Route exact path="/nested"><Nested/></Route>
        </Switch>
        <Stats playerStats={playerStats}/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;