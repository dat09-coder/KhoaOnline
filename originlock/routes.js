const express = require("express");
const originLockModel = require("./models");
const app = express();
app.post("/add_origin", async (request, response) => {
    console.log(request.body);
    const origin = new originLockModel(request.body);
    try {
        await origin.save();
        response.send(`Added ${request.body.domain}!!!`);
    } catch (error) {
        console.log(error)
        response.status(500).send('Duplicated domain!!!');
    }
});
app.post("/delete_origin", async (request, response) => {
    try {
        const origin = await originLockModel.findByIdAndDelete(
            request.body._id
        );
        console.log(origin);
        if (!origin) {
            throw "Origin not found";
        }
        response.send("Deleted success!!!");
    } catch (error) {
        console.log(error);
        response.status(500).send(error);
    }
});
app.post("/check_origin", async (req, response) => {
    try {
        const origin = await originLockModel.findOne({
            domain: atob(req.body.d),
        });
        if(!origin){
            throw 'origin not found!!!'
        }
        response.send(true);
    } catch (error) {
        response.send(false);
    }
});
app.get("/getall_origin", async (req, response) => {
    const origins = await originLockModel.find({});
    try {
        response.send(origins);
    } catch (error) {
        response.status(500).send(error);
    }
});
module.exports = app;
