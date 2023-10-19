exports.getHealthMetrics = async (req, res) => {
  const healthData = [
    {
      name: "Blood Sugar",
      measure: "80",
      measureUnit: "mg / dL",
      result: "Normal",
      colour: "#F8DEBD",
    },
    {
      name: "Heart Rate",
      measure: "98",
      measureUnit: "bpm",
      result: "Normal",
      colour: "#FBF0F3",
    },
    {
      name: "Blood Pressure",
      measure: "102 ",
      measureUnit: "/ 72 mmhg",
      result: "Normal",
      colour: "#D0FBFF",
    },
  ];
  res.send(healthData);
};

exports.getActivityGrowth = async (req, res) => {
  const dataBar = [
    {
      name: "Jan",
      Aerobics: 4000,
      Yoga: 2400,
      Meditation: 2500,
    },
    {
      name: "Feb",
      Aerobics: 3000,
      Yoga: 1398,
      Meditation: 1000,
    },
    {
      name: "Mar",
      Aerobics: 2000,
      Yoga: 9800,
      Meditation: 2600,
    },
    {
      name: "Apr",
      Aerobics: 2780,
      Yoga: 3908,
      Meditation: 7800,
    },
    {
      name: "May",
      Aerobics: 1890,
      Yoga: 4800,
      Meditation: 6700,
    },
    {
      name: "Jun",
      Aerobics: 2390,
      Yoga: 3800,
      Meditation: 7500,
    },
    {
      name: "Jul",
      Aerobics: 3490,
      Yoga: 4300,
      Meditation: 8900,
    },
    {
      name: "Aug",
      Aerobics: 3490,
      Yoga: 4300,
      Meditation: 4500,
    },
    {
      name: "Sep",
      Aerobics: 3490,
      Yoga: 4300,
      Meditation: 8788,
    },
    {
      name: "Oct",
      Aerobics: 3490,
      Yoga: 2500,
      Meditation: 6700,
    },
    {
      name: "Nov",
      Aerobics: 3490,
      Yoga: 4300,
      Meditation: 7500,
    },
    {
      name: "Dec",
      Aerobics: 3490,
      Yoga: 4300,
      Meditation: 5400,
    },
  ];

  res.send(dataBar);
};

exports.getbodyparts = async (req, res) => {
  const bodyParts = [
    {
      parts: "Chest (in)",
      value: "44.5",
    },
    {
      parts: "Waist (in)",
      value: "34",
    },
    {
      parts: "Hip (in)",
      value: "42.5",
    },
  ];

  res.send(bodyParts);
};
