import React from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { ActionTypes } from '../costans/actionTypes'
import { getDataStart } from '../action/chatAction'

const ChatAi = () => {
    const dispatch = useDispatch
    const handleSubmit = () => {
        dispatch(getDataStart());
        axios.get('https://jsonplaceholder.typicode.com/todos/')
            .then((res) =>
                dispatch({ type: ActionTypes.GET_ANSWER, payload: res.data })
            );
    };
    return (
        <div className='chat'>
            <div className='list'> liste</div>
            <div className='form'>
                <input type='text' placeholder='yapay zekadan birşey isteyin' />
                <button onClick={handleSubmit}>Gönder</button>
            </div>
            Chat
        </div>
    )
}

export default ChatAi
