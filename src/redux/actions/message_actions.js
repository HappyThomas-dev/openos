import axios from 'axios';
import {
    GET_INITIAL_MESSAGE_LISTS,
    GET_MESSAGE,
    SET_CURRENT_MESSAGE,
    GET_MORE_CHATS_MESSAGES,
    ADD_MESSAGE,
    DELETE_CHAT_MESSAGE,
    GET_SEARCHED_CHAT_MESSAGES
} from './types';
import { useDispatch, useSelector } from 'react-redux';
import messageLists from "../mock-datas/messages.json";
import { getMessage, getMessageDetail } from '../../components/ipcCommunication/ipcMessage'

export function setCurrentMessage(messageKey) {
    return {
        type: SET_CURRENT_MESSAGE,
        payload: messageKey
    }
}

export async function getInitialMessageLists() {
    const request = await getMessage('MSG_RECV', 0, 10)
    return {
        type: GET_INITIAL_MESSAGE_LISTS,
        payload: request.data.table.row
    }
}

export async function getMessageHo(messageKey) {
    console.log('getMessageHo messageKey', messageKey)

    const request = await getMessageDetail(messageKey)
    console.log('request', request)
    // let request = messageLists.filter(msg => msg.msg_key === messageKey)
    return {
        type: GET_MESSAGE,
        payload: request.data.table.row
    }
}

export function addMessage(newMessage) {
    return {
        type: ADD_MESSAGE,
        payload: newMessage
    }
}

// export function getMoreChatMessages(bandId, page = 1) {
//     const request = axios.get(`${SERVER_URI}:5000/api/talk?bandId=${bandId}&page=${page}`)
//         .then(response => response.data);

//     return {
//         type: GET_MORE_CHATS_MESSAGES,
//         payload: request
//     }
// }

// export function deleteChatMessage(item) {
//     const request = axios.delete(`${SERVER_URI}:5000/api/talk?talkId=${item.id}`)
//         .then(response => {
//             return { id: item.id }
//         });

//     return {
//         type: DELETE_CHAT_MESSAGE,
//         payload: request
//     }
// }

// export function getSearchedChatMessages(bandId, searchTerm) {
//     const request = axios.get(`${SERVER_URI}:5000/api/talk?bandId=${bandId}&searchTerm=${encodeURIComponent(searchTerm)}&page=1&type=search`)
//         .then(response => response.data);

//     return {
//         type: GET_SEARCHED_CHAT_MESSAGES,
//         payload: request
//     }
// }

