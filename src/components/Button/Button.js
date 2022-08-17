import classes from '../Button/Button.module.css';


const button = ({title, style}) => {
    return(
        <div>
            <button className= {`${style} ${classes.btn}`}>{title}</button>
        </div>
    )
}


export default button;