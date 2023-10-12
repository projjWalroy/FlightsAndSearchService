const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");
const ApiRoutes = require("./routes/index");

const { Airport, City } = require("./models/index");

const setupAndStartServer = async () => {
    //create the express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use("/api", ApiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server started at ${PORT}`);
        // const repo = new CityRepository();
        // repo.createCity({ name: "New Delhi" });
        //repo.deleteCity(1);
        // const airports = await Airport.findAll({
        //     include: [
        //         {
        //             model: City,
        //         },
        //     ],
        // });
        // console.log(airports);
        //City.findByPk(4);

        
    });
};

setupAndStartServer();
