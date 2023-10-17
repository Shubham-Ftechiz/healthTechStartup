import React from "react";
import "./dashboard.scss";

import standard from "../../images/standard.svg";
import sicon from "../../images/s_icon.png";
import calender from "../../images/calender.svg";
import message from "../../images/message.svg";
import clock from "../../images/clock.svg";
import settings from "../../images/setting.svg";
import logout from "../../images/logout.svg";


const LeftPanel = () => {
    return (
        <div className="options">
            <div className="alignicons">
                <div id="iconStandard">
                    <img src={standard} /* height={50} width={50} */ alt="image"/>
                </div>

                <div id="iconSicon">
                    <span className="selectChangeSicon">
                        <img src={sicon} height={40} width={40} alt="image" />
                    </span>
                </div>

                <div className="subIcon">

                    <div id="iconCalender">
                        <span className="selecticonCalender">
                            <img src={calender} height={20} width={20} alt="image" />
                        </span>
                    </div>

                    <div id="iconMessage">
                        <span className="selecticonIconMessage">
                            <img src={message} height={20} width={20} alt="image" />
                        </span>
                    </div>

                    <div id="iconClock">
                        <span className="selecticonIconClock">
                            <img src={clock} height={20} width={20} alt="image" />
                        </span>
                    </div>

                    <div id="iconSettings">
                        <span className="selecticonIconSettings">
                            <img src={settings} height={20} width={20} alt="image" />
                        </span>
                    </div>

                    <div id="iconLogout">
                        <span className="selecticonIconLogout">
                            <img src={logout} height={20} width={20} alt="image" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftPanel;