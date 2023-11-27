let express = require("express");
let app = express();

const path = require("path");
const publicPath = path.resolve(__dirname,"../public");
app.use(    express.static(publicPath)  );


const port= process.env.PORT || 3029;
app.listen(port,()=>{
    console.log(`Servidor corriendo en el portal https://localhost:${port}`);
});

app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../src/views/index.html"))
})