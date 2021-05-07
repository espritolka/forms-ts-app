import react from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.css';


 type ButtonType = 'primary'| 'secondary'

 interface IButton{
    type: ButtonType;
    id: string; 
    title: string; 
    onClick(e: object): void; 
  }

let cx = classNames.bind(styles);


const Button = ({id, title, type, onClick}: IButton) => {

    let className = cx({
        'btn-wrapper': true,
        [`btn-${type}`]: true 
      });

    return(
        <div key={id} onClick={onClick} className={className}>{title}</div>
    )
}

export default Button;