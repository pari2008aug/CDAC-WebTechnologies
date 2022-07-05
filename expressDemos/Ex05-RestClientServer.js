//We are creating  a server app that will host the Client App of jquery...
const app = require("express")();
const root = __dirname;

app.get("/Client", (req, res) => res.sendFile(root + "/ClientApp.html"));

app.listen(4321, () => console.log("Server is available at port:4321"));