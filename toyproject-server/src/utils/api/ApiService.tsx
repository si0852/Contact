import axios from 'axios';

const MEMBER_API_URL = `http://localhost:4000/contact`;

export const getContactList = async () =>{
    let list = await axios.get(MEMBER_API_URL);

    return list.data;
}