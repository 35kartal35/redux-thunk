import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { getAnswer, getDataStart } from '../app/action/chatAction'


const ChatAi = () => {
    const state = useSelector((state) => state.chatState)
    const dispatch = useDispatch
    const [prompt, setPrompt] = useState('')

    const handleSubmit = () => {
        dispatch(getDataStart());
        dispatch(getAnswer(prompt));
        setPrompt('');

    };
    const handleChange = (e) => {
        setPrompt(e.target.value)
    };
    console.log(state)
    return (
        <div className='chat'>
            <div className='list'>
                {state.chatData.map((message) => (
                    <>
                        <p>{message.prompt}</p>
                        <p>{message.answer}</p>
                    </>
                ))}

                {state.isLoading && "Mesaj Yükleniyor...."}
            </div>
            <div className='form'>
                <input
                    value={prompt}
                    onChange={handleChange}
                    type='text'
                    placeholder='yapay zekadan birşey isteyin' />
                <button onClick={handleSubmit}>Gönder</button>
            </div>

        </div>
    );
};

export default ChatAi;
