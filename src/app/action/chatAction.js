import { ActionTypes } from "../costans/actionTypes";
import axios from "axios";

export const getDataStart = () => ({
    type: ActionTypes.GET_DATA_START,
    payload: true,
});

export const getAnswer = (prompt) => async (dispatch) => {
    const options = {
        method: 'POST',
        url: 'https://openai80.p.rapidapi.com/chat/completions',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': 'b8717b5f54msh9dbff07f172799dp1f2ba0jsn0e27d418320d',
            'X-RapidAPI-Host': 'openai80.p.rapidapi.com'
        },
        data: `{"model":"gpt-3.5-turbo","messages":[{"role":"user","content":"${prompt}"}]}`,
    };

    const res = await axios.request(options);

    dispatch({
        type: ActionTypes.GET_ANSWER,
        payload: { prompt, answer: res.data.choices[0].message.content },
    });
};

export const getImage = (prompt) => async (dispatch) => {
    const options = {
        method: 'POST',
        url: 'https://openai80.p.rapidapi.com/images/generations',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': 'b8717b5f54msh9dbff07f172799dp1f2ba0jsn0e27d418320d',
            'X-RapidAPI-Host': 'openai80.p.rapidapi.com'
        },
        data: `{"prompt":"${prompt}","n":2,"size":"1024x1024"}`,
    };
    const res = await axios.request(options);

    dispatch({
        type: ActionTypes.GET_IMAGES,
        payload: { prompt, answer: res.data.data },
    });
};