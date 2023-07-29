const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();

app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async(req, res) => {
    const { username } = req.body;

    try {
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            { username: username, secret: username, first_name: username },
            { headers: { "private-key": "89592ac1-5951-4c87-9368-53253baab107" } }
        );
        return res.status(r.status).json(r.data);
    } catch(e) {
        return res.status(e.response.status).json(e.response.data0);
    }
});

app.listen(3001);

//46951dbc-fb52-44bf-a76c-a34ab2545e77 - project id
//89592ac1-5951-4c87-9368-53253baab107 - private key