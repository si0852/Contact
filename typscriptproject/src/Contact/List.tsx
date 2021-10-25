import './app.css';
import  {useEffect} from 'react';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import {searchList} from './Selector';
import {getData,addDetail, receiveData, contactList} from './Atom';

const List = () => {

    const contactListData = useRecoilValue(searchList);

    const setContactList = useSetRecoilState(contactList);
    const setInfo = useSetRecoilState(getData);
    const setVch = useSetRecoilState(addDetail);
    const detail = useRecoilValue(addDetail);
    const contactlClick = (data:receiveData) => {
        setInfo(data);
        setVch('result');
        
    }
    useEffect(() => {
        if(detail === 'result'){
            fetch("http://localhost:4000/contacts")
            .then(res =>  res.json())
            .then(
                (result:receiveData[]) => {
                  setContactList(result);
                  setVch('default')
                },
                (error:string) => {
                    console.log("error", error);
                }
            )
        }
    }, [detail,setContactList,setVch])
    return (
    <div className="contact-list">
         <ul>
          
            {contactListData.map((item, index) => {
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


