import React, {useState} from "react";
import "./dashboard.scss";
import standard from "../../images/standard.svg";
import sicon from "../../images/s_icon.png";
import calender from "../../images/calender.svg";
import message from "../../images/message.svg";
import clock from "../../images/clock.svg";
import settings from "../../images/setting.svg";
import logout from "../../images/logout.svg";
import windowicon from "../../images/windowicon.png";



const LeftPanel = () => {

    const [colourIcon, setColourSicon] = useState(false);

    const [colourCalender, setColourCalender] = useState(false);

    const [colourMessage, setColourMessage] = useState(false);
    const [colourClock, setColourClock] = useState(false);

    const [colourSettings, setColourSettings] = useState(false);
    const [colourLogout, setColourLogout] = useState(false);


    const handleColourSIcon = () => {
        setColourSicon(!colourIcon)
    }

    const handleColourCalender = () => {
        
        setColourCalender(!colourCalender);
        if (colourCalender === false) {
            setColourSicon(false);
            setColourMessage(false);
            setColourClock(false);
            setColourSettings(false);
            setColourLogout(false);
        }
    }

    const handleColourMessage = () => {
        setColourMessage(!colourMessage);
        if (colourMessage === false) {
            setColourCalender(false)
            setColourSicon(false);
            setColourClock(false);
            setColourSettings(false);
            setColourLogout(false);
        }
    }

    const handleColourClock = () => {
        setColourClock(!colourClock);
        if (colourClock === false) {
            setColourSicon(false)
            setColourCalender(false);
            setColourMessage(false);
            setColourSettings(false);
            setColourLogout(false);
        }
    }

    const handleColourSettings = () => {
        setColourSettings(!colourSettings);
        if (colourSettings === false) {
            setColourSicon(false)
            setColourCalender(false);
            setColourMessage(false);
            setColourClock(false);
            setColourLogout(false);
        }
    }

    const handleColourLogout = () => {
        setColourLogout(!colourLogout);
        if (colourLogout === false) {
            setColourSicon(false)
            setColourCalender(false);
            setColourMessage(false);
            setColourClock(false);
            setColourSettings(false);
        }
    }


    return (
        <div className="options">
            <div className="alignicons">
                <div id="iconStandard">
                    <img src={standard} /* height={50} width={50} */ alt="image"/>
                </div>

                <div className="subIcon">

                    <div id="iconSicon" onClick={() => handleColourSIcon("sicon")}>
                        <span className={colourIcon === true ? "selecticonSIcon" : "selecticonSIconNoBorder"}>
                                <img src={windowicon} height={20} width={20} alt="image" />
                        </span>
                    </div>

                    <div id="iconCalender" onClick={() => handleColourCalender("calender")}>
                        <span className={colourCalender === true ? "selecticonCalender" : "selecticonCalenderNoBorder"}>
                            <img src={calender} height={20} width={20} alt="image" />
                        </span>
                    </div>

                    <div id="iconMessage" onClick={() => handleColourMessage("message")}>
                        <span className={colourMessage === true ? "selecticonIconMessage" : "selecticonIconMessageNoBorder"}>
                            <img src={message} height={20} width={20} alt="image" />
                        </span>
                    </div>

                    <div id="iconClock" onClick={() => handleColourClock("clock")}>
                        <span className={colourClock === true ? "selecticonIconClock" : "selecticonIconClockNoBorder"}>
                            <img src={clock} height={20} width={20} alt="image" />
                        </span>
                    </div>

                    <div id="iconSettings" onClick={() => handleColourSettings("settings")}>
                        <span className={colourSettings === true ? "selecticonIconSettings" : "selecticonIconSettingsNoBorder"}>
                            <img src={settings} height={20} width={20} alt="image" />
                        </span>
                    </div>

                    <div id="iconLogout" onClick={() => handleColourLogout("logout")}>
                        <span className={colourLogout === true ? "selecticonIconLogout" : "selecticonIconLogoutNoBorder"}>
                            <img src={logout} height={20} width={20} alt="image" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftPanel;