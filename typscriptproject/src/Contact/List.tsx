import './app.css';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import {searchList} from './Selector';
import {detailInfo,addDetail, } from './Atom';

const List = () => {

    const contactList = useRecoilValue(searchList);
    const setInfo = useSetRecoilState(detailInfo);
    const setVch = useSetRecoilState(addDetail);
    const contactlClick = (data:any) => {
        setVch('result');
        setInfo(data);
    }
    return (
    <div className="contact-list">
         <ul>
          
            {contactList.map((item, index) => {
                return(
                    <li key={index}>
                        <button type="button" onClick={() => contactlClick(item)}>{item.name}</button>
                    </li>
                )
            })}
          
         </ul>        
    </div>
    )
}

export default List;