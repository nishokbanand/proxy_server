const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
const app = express();

app.use(cors());
app.listen(3000);
app.use(express.json());

app.get("/animeid", async (req, res) => {
  const q = req.query["q"];
  const result = await fetch(
    `https://api.myanimelist.net:443/v2/anime?q=${q}`,
    {
      headers: {
        "X-MAL-CLIENT-ID": "ac6b1812e6ee400f38858cd0eba0259e",
      },
    }
  );
  res.send((await result.json())["data"][0]);
});

app.get("/animedesc", async (req, res) => {
  const q = req.query["q"];
  const result = await fetch(
    `https://api.myanimelist.net/v2/anime/${q}?fields=id,title,synopsis`,
    {
      headers: {
        "X-MAL-CLIENT-ID": "ac6b1812e6ee400f38858cd0eba0259e",
      },
    }
  );
  //   console.log(await result.json());
  res.send(await result.json());
});
