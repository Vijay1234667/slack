import React, { useState } from 'react';
import SlackTopHeader from '../SlackTopHeader';
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import SortIcon from '@mui/icons-material/Sort';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AbcIcon from '@mui/icons-material/Abc';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import MicNoneIcon from '@mui/icons-material/MicNone';
import DuoIcon from '@mui/icons-material/Duo';
import EditIcon from '@mui/icons-material/Edit';
import SendIcon from '@mui/icons-material/Send';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import vijay from "./assets/vijay.jpeg";

import Tooltip from '@mui/material/Tooltip';


import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import Avtar from "./assets/Avtar.png";
import Avtar1 from "./assets/Avtar1.png";
import { NavLink } from 'react-router-dom';
import { useUsersContext } from '../Context/UsersContext';
import SingleUser from './SingleUser';
import { Container, OverlayTrigger } from 'react-bootstrap-v5';
// import Tooltip from 'react-bootstrap/Tooltip';
import MainUser from '../MainUser';

const MainSection = () => {
    const { Allusers, handleUserClick, currentuser, message, handleMessageChange, SendMessage } = useUsersContext();

    return (
        <>
            <section className='Slack-bg-Theme'>
                <Container fluid className='p-0'>
                    <div>
                        <SlackTopHeader />
                    </div>
                    <section>
                        <div className="row g-0">
                            <div className="col-lg-1 d-flex justify-content-between flex-column text-center">
                                <ul>
                                    <li className='mb-3'>
                                        <NavLink className="text-decoration-none">
                                            <Tooltip title="Delete">
                                                <AccountCircleIcon className='text-info fs-1' />
                                                <span className='text-white tooltip-bottom-name'>Users</span>
                                            </Tooltip>
                                        </NavLink>
                                    </li>
                                    <li className='mb-3'>
                                        <NavLink className="text-decoration-none">
                                            <Tooltip title="Home">
                                                <HomeRoundedIcon className='text-white homesymboll rounded fs-1 mb-1' />
                                                <span className='text-white tooltip-bottom-name'>Home</span>
                                            </Tooltip>
                                        </NavLink>
                                    </li>
                                    <li className='mb-3'>
                                        <NavLink className="text-decoration-none">
                                            <Tooltip title="Activity">
                                                <NotificationsOutlinedIcon className='text-danger fs-1' />
                                                <span className='text-white tooltip-bottom-name'>Activity</span>
                                            </Tooltip>
                                        </NavLink>
                                    </li>
                                    <li className='mb-3'>
                                        <NavLink className="text-decoration-none">
                                            <Tooltip title="Dm's">
                                                <MailOutlineIcon className='text-secondary fs-1' />
                                                <span className='text-white tooltip-bottom-name'>Dm's</span>
                                            </Tooltip>
                                        </NavLink>
                                    </li>

                                    <li className='mb-3'>
                                        <NavLink className="text-decoration-none">
                                            <Tooltip title="Later">
                                                <AlarmOnIcon className='text-warning fs-1' />
                                                <span className='text-white tooltip-bottom-name'>Later</span>
                                            </Tooltip>
                                        </NavLink>
                                    </li>

                                    <li className='mb-3'>
                                        <NavLink className="text-decoration-none">
                                            <Tooltip title="More">
                                                <MoreHorizIcon className='text-primary fs-1' />
                                                <span className='text-white tooltip-bottom-name'>More</span>
                                            </Tooltip>
                                        </NavLink>
                                    </li>
                                </ul>
                                <ul>
                                    <li className='mb-3'>
                                        <NavLink>
                                            <Box>
                                                <Fab size="small" color="secondary" aria-label="add">
                                                    <AddIcon />
                                                </Fab>
                                            </Box>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink>
                                            <OverlayTrigger
                                                placement="right"
                                                overlay={<Tooltip>Vijaykumar Yadav</Tooltip>}
                                            >
                                                <img className='img-fluid rounded d-block mx-auto' src={vijay} width="35px" alt="" />
                                            </OverlayTrigger>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 SlackLeftAllUsers px-3">
                                <div className='d-flex justify-content-between LeftAllUsers-position-sticky py-2'>
                                    <div>
                                        <h4>ChatBot</h4>
                                    </div>
                                    <div className='me-3'>
                                        <NavLink>
                                            <OverlayTrigger
                                                placement="bottom"
                                                overlay={<Tooltip>Filter Conversation</Tooltip>}
                                            >
                                                <SortIcon className='me-2 fs-5 text-dark' />
                                            </OverlayTrigger>
                                        </NavLink>
                                        <NavLink>
                                            <OverlayTrigger
                                                placement="bottom"
                                                overlay={<Tooltip>New Message</Tooltip>}
                                            >
                                                <EditCalendarOutlinedIcon className='ms-2 text-dark fs-5' />
                                            </OverlayTrigger>
                                        </NavLink>
                                    </div>
                                </div>
                                <ul className='p-0'>
                                    {Allusers.map((curElem) => {
                                        return (
                                            <SingleUser
                                                key={curElem.id}
                                                {...curElem}
                                                handleUserClick={handleUserClick}
                                            />
                                        );
                                    })}
                                </ul>
                            </div>
                            <div className="col-lg-8 SlackRightChatbox">
                                <div className='RightChatbox-body d-flex justify-content-between py-2 px-4'>
                                    <h4>
                                        <img src={currentuser.profile} alt="" width="30px" className="me-2 rounded-circle" />
                                        {currentuser.name}
                                    </h4>
                                    <div className='d-flex'>
                                        <div className='chatboxtopright-borderd me-3 bg-dark'>
                                            <img className='img-fluid rounded-sm me-1' src={currentuser.profile} alt="" width="20px" />
                                            <img className='img-fluid rounded-sm me-1' src={Avtar1} alt="" width="20px" />
                                            <img className='img-fluid rounded-sm' src={Avtar} alt="" width="20px" />
                                        </div>
                                        <div className='chatboxtopright-borderd bg-dark text-white'>
                                            <HeadphonesOutlinedIcon className='fs-5 text-info' />
                                            <KeyboardArrowDownOutlinedIcon className='fs-5' />
                                        </div>
                                        <div className='ms-2 chatboxtopright-borderd bg-dark text-white'>
                                            <EditCalendarOutlinedIcon className='fs-5 me-1 text-info' />Canvas
                                        </div>
                                    </div>
                                </div>

                                <MainUser />

                                <div className='chatboxright-bottom-input-section px-3'>
                                    <div className='position-relative'>
                                        <input placeholder='Type Message Here...' value={message} onChange={handleMessageChange} type="text" className='mb-1' />
                                        <div className='messagesendSymboll'>
                                            <NavLink onClick={SendMessage}><SendIcon className='fs-5 text-primary' /></NavLink>
                                        </div>
                                    </div>
                                    <div>
                                        <ul className='p-0 d-flex'>
                                            <li>
                                                <NavLink>
                                                    <AddCircleIcon className='text-dark fs-5' />
                                                </NavLink>
                                            </li>
                                            <li className='ms-3'>
                                                <NavLink>
                                                    <AbcIcon className='text-dark fs-5' />
                                                </NavLink>
                                            </li>
                                            <li className='ms-2 border-end px-2'>
                                                <NavLink>
                                                    <InsertEmoticonIcon className='text-dark fs-5' />
                                                </NavLink>
                                            </li>
                                            <li className='ms-3'>
                                                <NavLink>
                                                    <AlternateEmailIcon className='text-dark fs-5' />
                                                </NavLink>
                                            </li>
                                            <li className='ms-3'>
                                                <NavLink>
                                                    <DuoIcon className='text-dark fs-5' />
                                                </NavLink>
                                            </li>
                                            <li className='ms-2 border-end px-2'>
                                                <NavLink>
                                                    <MicNoneIcon className='text-dark fs-5' />
                                                </NavLink>
                                            </li>
                                            <li className='ms-3'>
                                                <NavLink>
                                                    <EditIcon className='text-dark fs-5' />
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Container>
            </section>
        </>
    );
};

export default MainSection;
