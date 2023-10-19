import React, {useState} from "react";
import { SearchOutlined,BellOutlined } from '@ant-design/icons';
import BloodSugarDiagram from "../../images/bloodSugarDiagram.svg";
import HeartRateDiagram from "../../images/heartRateDiagram.svg";
import BloodPresureDiagram from "../../images/bloodPressureDiagram.svg";

import BloodSugareIcon from "../../images/bloodSugar.svg";
import HeartRateIcon from "../../images/heartRate.svg";
import BloodPresureIcon from "../../images/bloodPressure.svg";
import { DatePicker, Space } from 'antd';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid ,
Legend} from "recharts";




const HealthOverviewCards = () => {
  
    const healthData = [{
        name:"Blood Sugar",
        measure:"80",
        measureUnit: "mg / dL",
        result:"Normal",
        colour:"#F8DEBD",
        diagram: BloodSugarDiagram,
        icon: BloodSugareIcon
    },
    {
        name:"Heart Rate",
        measure:"98",
        measureUnit: "bpm",
        result:"Normal",
        colour:"#FBF0F3",
        diagram: HeartRateDiagram,
        icon: HeartRateIcon
    },
    {
        name:"Blood Pressure",
        measure:"102 ",
        measureUnit:"/ 72 mmhg",
        result:"Normal",
        colour:"#D0FBFF",
        diagram: BloodPresureDiagram,
        icon: BloodPresureIcon
    }
]


const dataBar = [
  {
    name: "Jan",
    Aerobics: 4000,
    Yoga: 2400,
    Meditation: 2500
  },
  {
    name: "Feb",
    Aerobics: 3000,
    Yoga: 1398,
    Meditation: 1000
  },
  {
    name: "Mar",
    Aerobics: 2000,
    Yoga: 9800,
    Meditation: 2600
  },
  {
    name: "Apr",
    Aerobics: 2780,
    Yoga: 3908,
    Meditation: 7800
  },
  {
    name: "May",
    Aerobics: 1890,
    Yoga: 4800,
    Meditation: 6700
  },
  {
    name: "Jun",
    Aerobics: 2390,
    Yoga: 3800,
    Meditation: 7500
  },
  {
    name: "Jul",
    Aerobics: 3490,
    Yoga: 4300,
    Meditation: 8900
  },
  {
    name: "Aug",
    Aerobics: 3490,
    Yoga: 4300,
    Meditation:4500
  },
  {
    name: "Sep",
    Aerobics: 3490,
    Yoga: 4300,
    Meditation: 8788
  },
  {
    name: "Oct",
    Aerobics: 3490,
    Yoga: 2500,
    Meditation: 6700
  },
  {
    name: "Nov",
    Aerobics: 3490,
    Yoga: 4300,
    Meditation: 7500
  },
  {
    name: "Dec",
    Aerobics: 3490,
    Yoga: 4300,
    Meditation: 5400
  }
];

const onChangeDate = (value, dateString) => {
    console.log('Selected Time: ', value);
  };

  const onOk = (value) => {
    console.log('onOk: ', value);
  };

return(
    <div className="healthOverviewMain">
        <div className="subhealthOverview">
            <div className="healthOverviewtop">
                <div className="healthHeading">Health Overview</div> 
                <div className="serachbellIcon">
                <BellOutlined style={{ backgroundColor: "white", color: "black",padding:"5px",border:"1px solid white"
                    ,borderRadius:"5px",marginLeft:"20px",float:"right"}}/>
                    <SearchOutlined style={{ backgroundColor: "white", color: "black",padding:"5px",border:"1px solid white"
                ,borderRadius:"5px",float:"right"}}/>
                </div>
            </div>
            <div className="dateCards">
                August 12, 2021
            </div>
         <div className="mainCards">
            {healthData?.map((data, index )=> 
                <div className="cards">
                    <div className="topIcon">
                        <div className="iconBackground" style={{backgroundColor:data.colour}}>
                            <img src={data.icon} alt="image" />
                        </div>
                        <div className="testName"> {data.name}</div> 
                    </div>

                    <div className="unitMain">
                        <span className="measureName">{data.measure} </span>
                        <span className="measureUnit">{data.measureUnit}</span>
                    </div>
                    <div className="testResult" style={{backgroundColor:data.colour}}>{data.result} </div>
                    <img src={data.diagram} alt="image" />
                </div>
            )}
          </div>
            
        </div>
        <div className="activityGrowth">
            <div className="subActivityGrowth">
                <span className="activityGrowthTxt"> Activity Growth </span> 
                <span className="datePicker">
                    <DatePicker showTime onChange={onChangeDate} onOk={onOk} />
                </span>
            </div>
            <div className="graph-chart">
                      <BarChart
                        width={683}
                        height={270}
                        data={dataBar}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        {/* <Tooltip /> */}
                        <Legend />
                        <Bar dataKey="Aerobics" fill="#CA6B6E" />
                        <Bar dataKey="Yoga" fill="#478F96" />
                        <Bar dataKey="Meditation" fill="#D08726" />
                        
                      </BarChart>
            </div>
        </div>
        <div className="appointments">
            <div className="upcomingAppointment">Upcoming Appointments</div>

            <div className="appointmentDate">August 14, 2021</div>

            <div className="appointmentName">Consultation with Dr. James</div>

        </div>
    </div>
)
}

export default HealthOverviewCards;