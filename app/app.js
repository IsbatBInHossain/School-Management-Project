const express = require("express");
const morgan = require("morgan");

const app = express();

//* Middlewares

app.use(morgan("dev"));

//* Routes

// Admin register

app.post("api/v1/admins/register", (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Admin has been successfully registered",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.messsage,
    });
  }
});

// Admin login

app.post("api/v1/admins/login", (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Admin has been successfully logged in",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.messsage,
    });
  }
});

// Get all admins

app.get("api/v1/admins", (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "All admins",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.messsage,
    });
  }
});

// Get single admin

app.get("api/v1/admins/:id", (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "single admins",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.messsage,
    });
  }
});

// Update admins

app.put("api/v1/admins/:id", (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "updated an admins",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.messsage,
    });
  }
});

// Delete admin

app.delete("api/v1/admins/:id", (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "deleted an admins",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.messsage,
    });
  }
});

// Admin suspend a teacher

app.put("api/v1/admins/suspend/teachers/:id", (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "admin suspended a teacher",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.messsage,
    });
  }
});

// Admin unsuspend a teacher

app.put("api/v1/admins/unsuspend/teachers/:id", (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "admin unsuspended a teacher",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.messsage,
    });
  }
});

// Admin withdraw a teacher

app.put("api/v1/admins/withdraw/teachers/:id", (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "admin withdrawn a teacher",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.messsage,
    });
  }
});

// Admin unwithdraw a teacher

app.put("api/v1/admins/unsuspend/teachers/:id", (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "admin unwithdrawn a teacher",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.messsage,
    });
  }
});

// Admin publish exam result

app.put("api/v1/admins/publish/exams/:id", (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "admin published exam result",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.messsage,
    });
  }
});

// Admin unpublish exam result

app.put("api/v1/admins/unpublish/exams/:id", (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "admin unpublished exam result",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.messsage,
    });
  }
});

module.export = app;
