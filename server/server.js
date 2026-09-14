const express = require("express");
const cors = require("cors");
require("dotenv").config();

const projects = require(
  process.env.PROJECTS_DATA_PATH || "./data/projects"
);


const app = express();


const contacts = [];


const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN,
  })
);


app.use(express.json());



app.get("/", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/api/projects", (req, res) => {
  res.json(projects);
});

app.get("/api/projects/:id", (req, res) => {
  const project = projects.find((p) => p.id === req.params.id);

  if (!project) {
    return res.status(404).json({ error: "Project not found" });
  }

  res.json(project);
});

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  if (!email.includes("@")) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  const contact = {
    id: contacts.length + 1,
    name,
    email,
    message,
  };

  contacts.push(contact);

  res.status(201).json({
    message: "Contact submitted successfully",
    contact,
  });
});

app.get("/api/contact", (req, res) => {
  res.json(contacts);
});

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.use((err, req, res, next) => {
  console.error(err.message);

  res.status(err.status || 500).json({
    error: err.message || "Internal server error",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



