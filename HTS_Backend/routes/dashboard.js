const dashbord = (app) => {
  const healthTech = require("../controller/healthtech.controller");
  const router = require("express").Router();

  router.get("/healthmetrics", healthTech.getHealthMetrics);
  router.get("/activitygrowth", healthTech.getActivityGrowth);

  router.get("/bodyparts", healthTech.getbodyparts);

  app.use("/api", router);
};

module.exports = dashbord;
