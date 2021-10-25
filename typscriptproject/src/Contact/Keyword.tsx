import './app.css';
import {useState, useEffect} from 'react';
import { useSetRecoilState } from 'recoil';
import {inputKeyword,detailInfo,addDetail, receiveData, contactList , getData} from './Atom';

const Keyword = () => {

    const [inputValue, setInputValue] = useState<string>('');
    const setKeyword = useSetRecoilState(inputKeyword);
    //const setInfo = useSetRecoilState(detailInfo);
    const setInfo = useSetRecoilState(getData);
    const setAddChange = useSetRecoilState(addDetail);
    const setContactList = useSetRecoilState(contactList);
    const setVch = useSetRecoilState(addDetail);


    useEffect(() => {
        if(inputValue !== ''){
            fetch(`http://localhost:4000/contacts/search/${inputValue}`)
        .then(res =>  res.json())
        .then(
            (result:receiveData[]) => {
              setContactList(result);
             
            },
            (error:string) => {
                console.log("error", error);
            }
        )
        .finally(
           
            ()=>{
                setInfo({id: null,
                    name: '', deptName: '', phone: '', mail: '', delYn: ''});
            }
        )
        }
    }, [inputValue, setContactList, setInfo])

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        setKeyword(e.target.value);
        setAddChange('result');
        
    }

    const onClick = () => {
        setAddChange('addview');
    }

  
    return (
        <div className="search-box">
          <input type="text" className="inp-sch" placeholder="검색어를 입력하세요." value={inputValue} onChange={onChange}/>
          <button className="btn" onClick={onClick}>추가</button>
        </div>
    )
}

export default Keyword;

