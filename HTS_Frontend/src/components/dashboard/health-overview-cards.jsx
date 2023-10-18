import React, {useState} from "react";
import { SearchOutlined,BellOutlined } from '@ant-design/icons';
import BloodSugarDiagram from "../../images/bloodSugarDiagram.svg";
import HeartRateDiagram from "../../images/heartRateDiagram.svg";
import BloodPresureDiagram from "../../images/bloodPressureDiagram.svg";

import BloodSugareIcon from "../../images/bloodSugar.svg";
import HeartRateIcon from "../../images/heartRate.svg";
import BloodPresureIcon from "../../images/bloodPressure.svg";
import { DatePicker, Space } from 'antd';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";



const HealthOverviewCards = () => {

    const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
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

const tickets = [{
    status:"New",
    
},{
    status:"In Progress"
}]


const onChangeDate = (value, dateString) => {
    console.log('Selected Time: ', value);
  };

  const onOk = (value) => {
    console.log('onOk: ', value);
  };

  const yoga = Object.keys(
    tickets.filter((ticket) => ticket.status === "New")
  ).length;

  const aerobics = Object.keys(
    tickets.filter((ticket) => ticket.status === "In Progress")
  ).length;


  const meditation = Object.keys(
    tickets.filter((ticket) => ticket.status === "In Progress")
  ).length;

  const data = [
    {
      name: "Aerobics",
      uv: aerobics,
    },
    {
      name: "Yoga",
      uv: yoga,
    },
    {
        name: "Meditation",
        uv:meditation
    }
  ];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
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
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                          top: 20,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Bar
                          dataKey="uv"
                          fill="#8884d8"
                          shape={<TriangleBar />}
                          label={{ position: "top" }}
                        >
                          {data.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={colors[index % 20]}
                            />
                          ))}
                        </Bar>
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