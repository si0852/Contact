import {selector} from 'recoil';
import {contactList, inputKeyword, detailInfo} from './Atom';

export const searchList = selector({
    key: 'searchList',
    get: ({get}) => {
        const list = get(contactList);
        const keyword = get(inputKeyword);

        if(keyword === ''){
            return list;
        }else {
            return list.filter(member => member.name.includes(keyword));
        }
    }
})

export const returnInfo = selector({
    key: 'returnInfo',
    get: ({get}) => {
        const lInfo = get(detailInfo);
        return lInfo;
    }
})