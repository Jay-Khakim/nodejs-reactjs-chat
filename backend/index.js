const express = require("express")
const cors = require("cors")


const app = express();
app.use(express.json());
app.use(cors({origin:true}));

app.post("/authentificate", async (req, res)=>{
    const {username} = req.body;

    try {
        const r = await axios.post(
          'https://api.chatengine.io/users/',
          { username: username, secret: username, first_name: username },
          { headers: { "Private-Key": "9e57158f-98b5-4484-bf04-5c1071a5e6de" } }
        );


        return res.status(r.status).json(r.data);
      } catch (e) {
        if (e.response) {
            // Error response received
            return res.status(e.response.status).json(e.response.data);
        } else {
            // Error occurred without receiving a response
            return res.status(500).json({ error: 'An unexpected error occurred' });
        }
      }
});

app.listen(3001);