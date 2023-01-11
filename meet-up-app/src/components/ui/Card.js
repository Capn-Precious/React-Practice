import classes from './Card.style.css'

function Card(props)
{
    return  <div className={classes.card}>{props.children}</div>;
}

export default Card;
