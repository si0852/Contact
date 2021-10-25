import './app.css';
import DetailInfo from './DetailInfo';
import Keyword from './Keyword';
import List from './List';
import Result from './Result';
import UpdateDetailInfo from './UpdateDetailInfo';
import { useRecoilValue } from 'recoil';
import {addViewChange} from './Selector';


const Contact = () => {

    const vCh = useRecoilValue(addViewChange);
    
    return (
    <div className="container">
        <h1 className="subject">박시현 연락처</h1>
        <div className="contact-wrap">
        <div className="col left">
            <Keyword/>
            <List/>
        </div>
        {vCh ==='result' && <Result/>}
        {vCh ==='default' && <Result/>}
        {vCh === 'addview' && <DetailInfo/>}
        {vCh === 'updateview' && <UpdateDetailInfo/>}
        </div>
    </div>
    )
}

export default Contact;