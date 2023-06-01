const { log } = require("console");
const  express = require("express");
const app = express();
app.set("view engine","ejs")

const port = 5000

// 해당 사이트 서버에 접속시 성공일 경우 콘솔창 실행
app.listen(port,()=>{
    console.log("포트폴리오 연결됨");
})
let local = ['store','mobile']
app.get("/",(req,res)=>{
    res.render("index.ejs")
})

app.get(`/${local[0]}`,(req,res)=>{
    res.render(`${local[0]}`)
})

app.get(`/${local[1]}`,(req,res)=>{
    res.render(`${local[1]}`)
})


app.use(express.static('public'));