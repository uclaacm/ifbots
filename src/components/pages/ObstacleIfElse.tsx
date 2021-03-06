import '../../styles/illustrations.scss';
import boulder from '../../assets/boulder.svg';
import robot from '../../assets/robot.svg';

function ObstacleIfElse(): JSX.Element {
  return (
    <div className='illustration'>
      <img src={robot} className="robot" alt="robot"></img>
      <img src={boulder} id="boulder" alt="charger"></img>
    </div>
  );
}

export default ObstacleIfElse;