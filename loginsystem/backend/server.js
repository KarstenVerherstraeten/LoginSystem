// backend/server.js
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const { AUTH0_DOMAIN, AUTH0_CLIENT_ID, AUTH0_CLIENT_SECRET } = process.env;

app.use(cors());

// Define the route at the top level
app.get("/management-api-token", async (req, res) => {
  try {
    // Dynamically import node-fetch within the route handler
    const fetch = (await import("node-fetch")).default;

    // Fetch the Management API token
    const response = await fetch(`https://${AUTH0_DOMAIN}/oauth/token`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        client_id: AUTH0_CLIENT_ID,
        client_secret: AUTH0_CLIENT_SECRET,
        audience: `https://${AUTH0_DOMAIN}/api/v2/`,
        grant_type: "client_credentials",
      }),
    });
    
    const data = await response.json();
    res.json({ token: data.access_token });
  } catch (error) {
    console.error("Error fetching Management API token:", error);
    res.status(500).send("Error fetching token");
  }
});




const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log("Auth0 Domain:", AUTH0_DOMAIN);
console.log("Client ID:", AUTH0_CLIENT_ID);
console.log("Client Secret:", AUTH0_CLIENT_SECRET ? "Loaded" : "Missing");
});