const express = require("express");
const MongoClient = require("mongodb").MongoClient;
//데이터베이스의 데이터 입력,출력을 위한 함수명령어 불러들이는 작업
const app = express();
const port = 5000;

//ejs 태그를 사용하기 위한 세팅
app.set("view engine","ejs");
//사용자가 입력한 데이터값을 주소로 통해서 전달되는 것을 변환(parsing)
app.use(express.urlencoded({extended: true}));
app.use(express.json()) 
//css/img/js(정적인 파일)사용하려면 이코드를 작성!
app.use(express.static('public'));

//데이터 베이스 연결작업
// let db; //데이터베이스 연결을 위한 변수세팅(변수의 이름은 자유롭게 지어도 됨)

// MongoClient.connect("mongodb+srv://02skdisk:Aa9755815@cluster0.pbta6ip.mongodb.net/?retryWrites=true&w=majority",function(err,result){
//     //에러가 발생했을경우 메세지 출력(선택사항)
//     if(err) { return console.log(err); }

//     //위에서 만든 db변수에 최종연결 ()안에는 mongodb atlas 사이트에서 생성한 데이터베이스 이름
//     db = result.db("portfolio");

//     //db연결이 제대로 됬다면 서버실행
//     app.listen(port,function(){
//         console.log("서버연결 성공");
//     });

// });
// 해당 사이트 서버에 접속시 성공일 경우 콘솔창 실행
app.listen(port,()=>{
    console.log("포트폴리오 연결됨");
})
let local = ['store','mobile','login','forgotpass','service']
app.get("/",(req,res)=>{
    res.render("index")
})

app.get(`/${local[0]}`,(req,res)=>{
    res.render(`${local[0]}`)
})

app.get(`/${local[1]}`,(req,res)=>{
    res.render(`${local[1]}`)
})

app.get(`/${local[2]}`,(req,res)=>{
    res.render(`${local[2]}`)
})
app.get(`/${local[3]}`,(req,res)=>{
    res.render(`${local[3]}`)
})
app.get(`/${local[4]}`,(req,res)=>{
    res.render(`${local[4]}`)
})

// app.post("/dblogin",(req,res)=>{
//     db.collection("userdata").find().toArray((err,result)=>{
//         res.render()
//     })
// })

