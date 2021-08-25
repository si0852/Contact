import './app.css';
import Keyword from './Keyword';
import List from './List';
import Result from './Result';

const Contact = () => {

    return (
    <div className="container">
        <h1 className="subject">박시현 연락처</h1>
        <div className="contact-wrap">
        <div className="col left">
            <Keyword/>
            <List/>
        </div>
            <Result/>
        </div>
    </div>
    )
}

export default Contact;