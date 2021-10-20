const express = require("express");
const lockTimeModel = require("./models");
const app = express();
app.post("/add_lockTime", async (request, response) => {
    const user = new lockTimeModel(request.body);
    try {
        await user.save();
        response.send(user);
    } catch (error) {
        response.status(500).send(error);
    }
});
app.post("/edit_lockTime", async (request, response) => {
    // const user = new lockTimeModel(request.body);
    const update = {
        name:request.body.name,
        lockTime:request.body.lockTime,
    }
    const user = await lockTimeModel.findByIdAndUpdate(request.body._id,update,{new: true});
    
    try {
        await user.save();
        response.send(user);
    } catch (error) {
        response.status(500).send(error);
    }
});
app.get("/lockTime/:name", async (req, response) => {
    const users = await lockTimeModel.find({ name: req.params.name });

    try {
        response.send(users);
    } catch (error) {
        response.status(500).send(error);
    }
});
app.get("/lockTime", async (req, response) => {
    const users = await lockTimeModel.find({});
    try {
        response.send(users);
    } catch (error) {
        response.status(500).send(error);
    }
});
module.exports = app;