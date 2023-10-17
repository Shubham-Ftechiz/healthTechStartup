import React from "react";
import "./dashboard.scss";

import LeftPanel from "./left-panel";

const Dashboard = () => {
    return (
<div className="mainDashboard">
        <LeftPanel/>
        <div className="healthOverview">
                <h5> Health Overview</h5>
        </div>
        <div className="bmicalculator">
                <h5> BMI Calculator </h5>
        </div>
</div>
    )
}

export default Dashboard;