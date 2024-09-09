import React from 'react'
// import { useUsersContext } from './Context/UsersContext';
import Avtar from "./Component/assets/Avtar.png";


const MainUser = () => {
    // const { currentuser } = useUsersContext();

    const CurrenetMessage = () =>{

    }

    return (
        <>
            <div className='px-4 py-4 d-flex'>
                <div className='d-flex '>
                    <img src={Avtar} alt="" width="30px" height="30px" className="me-2 rounded-circle" />
                    <div>
                        <h4>current user</h4>
                        <p>message</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainUser
