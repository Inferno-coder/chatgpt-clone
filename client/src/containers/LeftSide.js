import React from 'react'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import Home from '@mui/icons-material/Home';
import Save from '@mui/icons-material/Grade';
import Pro from '@mui/icons-material/RocketLaunch';
import AddIcon from '@mui/icons-material/Add';
import ChatIcon from '@mui/icons-material/Chat';
import './leftside.css'
export const LeftSide = () => {
  return (
    <div>
           <div className="left-side">
                 <div className="left-upper">
                   <div className="m-2 p-2 new-chat"><AcUnitIcon style={{ fontSize: 30, color: 'blue' }} />
                   <span className="ms-2 me-2 p-3 ">New Chat</span></div>
                </div>
                <div className="left-middle">
                   <ul className="recentSearch">
                    <li className="recentItem">
                    <div className="m-2 "><ChatIcon style={{ fontSize: 30, color: 'blue' }} />
                   <span className="m-2">What is chatgpt</span></div>
                    </li>
                    <li className="recentItem">
                    <div className="m-2 "><ChatIcon style={{ fontSize: 30, color: 'blue' }} />
                   <span className="ms-2 ">DEV vs DSA</span></div>
                    </li>
                    <li className="recentItem">
                    <div className="m-2 "><ChatIcon style={{ fontSize: 30, color: 'blue' }} />
                   <span className="ms-2 ">Hello World</span></div>
                    </li>
                   </ul>
                </div>
                <div className="top-lower">
                  <ul className="functions">
                    <li className="func-items p-2 m-2">
                     <Home/><span className="ms-2 me-2 item-name">Saved</span>
                    </li>
                    <li className="func-items p-2 m-2">
                     <Save/><span className="ms-2 me-2 item-name">Saved</span>
                    </li>
                    <li className="func-items p-2 m-2">
                     <Pro/><span className="ms-2 me-2 item-name">Saved</span>
                    </li>
                  </ul>
                </div>         
            </div>
    </div>
  )
}
