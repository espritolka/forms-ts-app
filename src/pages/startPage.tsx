import react from 'react';
import Button from '../Components/Button';
import { useSelector, useDispatch } from 'react-redux';
import { steps, init } from '../redux/reducers/init';

const StartPage = (props:any) => {

    const count = useSelector(steps)
    const dispatch = useDispatch()

return(
    <div>
        <Button type={'primary'} title={'Авторизоваться'} id={'signIn'} 
        onClick={(e:object)=> dispatch(init(['test','2test']))}/>
    </div>
)
}

export default StartPage;