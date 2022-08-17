import Icon from '../../assets/Icon.svg';
import classes from '../Card/Card.module.css';
import Button from '../Button/Button.js';
const Card = ({ name, logo, available }) => {
  return (
    <div className={classes.card}>
      <div className={classes.img}>
        <img src={logo ? logo : Icon} alt="icon" />
      </div>
      <p>{name}</p>
      <Button
        title="Available"
        style={available ? classes.green : classes.red}
      />
    </div>
  );
};

export default Card;
