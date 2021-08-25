import './app.css';
import {useState} from 'react';
import { useSetRecoilState } from 'recoil';
import {inputKeyword,detailInfo } from './Atom';

const Keyword = () => {

    const [inputValue, setInputValue] = useState('');
    const setKeyword = useSetRecoilState(inputKeyword);
    const setInfo = useSetRecoilState(detailInfo);

    const onChange = (e:any) => {
        setInputValue(e.target.value);
        setKeyword(e.target.value);
        setInfo({name: '', department: '', phoneNumber: '', email: ''});
    }

  
    return (
        <div className="search-box">
          <input type="text" className="inp-sch" placeholder="검색어를 입력하세요." value={inputValue} onChange={onChange}/>
        </div>
    )
}

export default Keyword;