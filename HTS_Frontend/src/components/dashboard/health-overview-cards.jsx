import React, {useState, useEffect} from "react";
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

  const [healthMetrics, setHealthMetrics] = useState();
  const [activityDataBar, setDataBar] = useState();

  
  const healthmetricsAPI = 'http://localhost:8000/api/healthmetrics';
  const activitygrowthAPI = 'http://localhost:8000/api/activitygrowth';

const imgArr = [BloodSugarDiagram, HeartRateDiagram, BloodPresureDiagram]
const iconArr = [BloodSugareIcon, HeartRateIcon, BloodPresureIcon]
  
  useEffect(() => {
    // Health Cards
    fetch(healthmetricsAPI)
      .then(response => response.json())
      .then((json) => {
        setHealthMetrics(json);
      })
      .catch(error => console.error(error));

      // Graph
      fetch(activitygrowthAPI)
      .then(response => response.json())
      .then((json) => {
        setDataBar(json);
      })
      .catch(error => console.error(error));
  }, []);

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
        {healthMetrics?.map((data, index) => {
          return(
            <div className="cards">
              <div className="topIcon">
                <div className="iconBackground" style={{ backgroundColor: data.colour }}>
                      <img src={iconArr[index]} alt="image" />
                </div>
                <div className="testName"> {data.name}</div>
              </div>

              <div className="unitMain">
                <span className="measureName">{data.measure} </span>
                <span className="measureUnit">{data.measureUnit}</span>
              </div>
              <div className="testResult" style={{ backgroundColor: data.colour }}>{data.result} </div>
              <img src={imgArr[index]} alt="image" />
            </div>
          )
          
        })}
          </div>
            
        </div>
        <div className="activityGrowth">
            <div className="subActivityGrowth">
                <span className="activityGrowthTxt"> Activity Growth </span> 
                <span className="datePicker">
                    <DatePicker showTime onChange={onChangeDate} onOk={onOk} placement={"topLeft"}/>
                </span>
            </div>
            <div className="graph-chart">
                      <BarChart
                        width={683}
                        height={270}
                        data={activityDataBar}
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