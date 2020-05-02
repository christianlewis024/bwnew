const express = require("express");
const bodyParser = require("body-parser");
const CORS = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(CORS());

let strains = [
  {
    id: 0,
    strain: "White Widow",
    flavor: "citrus",
    rating: 100,
    effect: ["euphoric"],
  },
  {
    id: 1,
    strain: "OG Kush",
    flavor: ["skunky"],
    rating: 92,
    effect: ["euphoric"],
  },
  {
    id: 2,
    strain: "8-Ball-Kush",
    flavor: "Earthy",
    rating: 92,
    effect: ["Relaxed"],
  },
  {
    id: 3,
    strain: "Madman-Og",
    flavor: "Woody",
    rating: 94,
    effect: ["Sleepy"],
  },
  {
    id: 4,
    strain: "Og-Tonic",
    flavor: "Pungent",
    rating: 76,
    effect: ["Happy"],
  },
  {
    id: 5,
    strain: "Chief NugNug",
    flavor: "New Car",
    rating: 89,
    effect: ["Instant Madness"],
  },
];

let strainId = strains.length;

app.get("/api/strains", (req, res) => {
  res.send(strains);
});

app.get("/api/strains/:id", (req, res) => {
  const strain = strains.filter(
    (strain) => `${strain.id}` === req.params.id
  )[0];
  res.status(200).json(strain);
});

app.post("/api/strains", (req, res) => {
  if (req.body.strain !== undefined) {
    const newStrain = req.body;
    newStrain["id"] = strainId;
    strains.push(newStrain);
  }
  ++strainId;
  res.status(201).json(strains);
});

app.put("/api/strains/:id", (req, res) => {
  if (!req.params.id)
    res.status(400).send("Your request is missing the strain id");
  if (
    req.body.id === undefined ||
    !req.body.strain ||
    !req.body.flavor ||
    !req.body.rating ||
    !req.body.effect
  ) {
    res
      .status(422)
      .send("Make sure your request body has all the fields it needs");
  }
  strains = strains.map((strain) => {
    if (`${strain.id}` === req.params.id) {
      return req.body;
    }
    return strain;
  });
  res.status(200).send(req.body);
});

app.delete("/api/strains/:id", (req, res) => {
  if (!req.params.id)
    res.status(400).send("Your request is missing the strain id");
  strains = strains.filter((strain) => `${strain.id}` !== req.params.id);
  res.status(202).send(req.params.id);
});

app.get("/", function (req, res) {
  res.send("App is working 👍");
});

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
