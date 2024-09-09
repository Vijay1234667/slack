import axios from "axios";
import { createContext, useContext, useEffect, useReducer, useState } from "react";
import reducer from "../Reducer/UsersReducer";


const AppContext = createContext();
const API = "http://localhost:3001/UserList";

const initialState = {
    isLoading: false,
    isError: false,
    Allusers: [],
};


const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [currentuser, setCurrentUser] = useState({ name: 'Select a User', profile: '' });
    const [message, setMessage] = useState('');

    const handleUserClick = (userName, userProfile) => {
        setCurrentUser({ name: userName, profile: userProfile });
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const SendMessage = () => {
        if (message.trim() && currentuser.name !== 'Select a User') {
            console.log(`Message sent to ${currentuser.name}: ${message}`);
            setMessage('');
        } else {
            alert('Please select a user and type a message.');
        }
    };





    const getAllUsers = async (url) => {
        dispatch({ type: "SET_LOADING" });
        try {
            const res = await axios.get(url);
            const Allusers = await res.data;
            console.log(Allusers,"data")
            dispatch({ type: "SET_API_DATA", payload: Allusers });
        } catch (error) {
            dispatch({ type: "API_ERROR" });
        }
    };

    useEffect(() => {
        getAllUsers(API);
    }, []);


   let base_url = process.env.REACT_APP_BASE_URL;
   let public_url =process.env.PUBLIC_URL;

    return(
        <AppContext.Provider value={{ ...state, base_url, handleUserClick, SendMessage, handleMessageChange, setCurrentUser,currentuser, public_url }}>
            {children}
        </AppContext.Provider>
    );
    
};


const useUsersContext = () => {
    return useContext(AppContext)
};

export {AppProvider, AppContext, useUsersContext };



