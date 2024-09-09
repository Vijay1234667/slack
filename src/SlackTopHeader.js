import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ScheduleIcon from '@mui/icons-material/Schedule';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import { NavLink } from 'react-router-dom';
import { OverlayTrigger } from 'react-bootstrap-v5';
import Tooltip from 'react-bootstrap/Tooltip';

const SlackTopHeader = () => {
    return (
        <>
            <section className='py-2'>
                <div className='d-flex'>
                    <div></div>
                    <div className='d-flex mx-auto'>
                        <div>
                            <NavLink>
                                <ArrowBackIcon className='text-primary' />
                            </NavLink>
                        </div>
                        <div>
                            <NavLink>
                                <ArrowForwardIcon className='text-primary ms-2' />
                            </NavLink>
                        </div>
                        <div>
                            <NavLink>
                                {['bottom'].map((placement) => (
                                    <OverlayTrigger
                                        placement={placement}
                                        overlay={
                                            <Tooltip >
                                                History
                                            </Tooltip>
                                        }
                                    >
                                        <ScheduleIcon className='text-warning ms-2 me-3' />
                                    </OverlayTrigger>
                                ))}
                            </NavLink>
                        </div>
                        <div className='Header-search-input'>
                            <input type="text" placeholder='Search Member Here' />
                            <div className='Header-search-input-Searchbtn'>
                                <ZoomOutIcon className='text-white'/>
                            </div>
                        </div>
                    </div>
                    <div className='ms-auto'>
                        <HelpOutlineIcon className='text-info me-3' />
                    </div>
                </div>

            </section>
        </>
    )
}

export default SlackTopHeader
