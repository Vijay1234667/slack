import React from 'react';
import { Link } from 'react-router-dom';
import { useUsersContext } from '../Context/UsersContext';

import SendIcon from '@mui/icons-material/Send';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt'; 
import LockIcon from '@mui/icons-material/Lock';
import TagIcon from '@mui/icons-material/Tag';

const SingleUser = ({ UserName, UserProfile, Icon, handleUserClick }) => {
    
    const { base_url, public_url } = useUsersContext();



    const renderIcon = () => {
        if (Icon === 'SendIcon') {
            return <SendIcon className='fs-5' />;
        } else if (Icon === 'MarkUnreadChatAltIcon') {
            return <MarkUnreadChatAltIcon className='fs-5' />;
        } else if (Icon === 'LockIcon') {
            return <LockIcon className='fs-5'/>;
        } else if (Icon === 'TagIcon') {
            return <TagIcon className='fs-5'/>;
        } else if (UserProfile) {
            return <img className='img-fluid rounded me-1' width="20px" src={`${base_url}${public_url}/${UserProfile}`} alt={UserName} />;
        } else {
            return ;
        }
    };

    return (
        <>
            <li className='singleuser mb-1'>
                <Link onClick={() => handleUserClick(UserName, `${base_url}${public_url}/${UserProfile}`)} className="d-flex justify-content-between align-items-center">
                    <div>
                        {/* <img className='img-fluid rounded me-1' width="20px" src={`${base_url}${public_url}/${UserProfile}`} alt={UserName} /> */}
                        {renderIcon()}
                        <span>{UserName}</span>
                    </div>
                    <div>
                        <button className='btn'>X</button>
                    </div>
                </Link>
            </li>
        </>
    );
};

export default SingleUser;
