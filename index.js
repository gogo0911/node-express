const express = require("express");
const MongoClient = require("mongodb").MongoClient;
//데이터베이스의 데이터 입력,출력을 위한 함수명령어 불러들이는 작업
const app = express();
const port = 5000;
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');


app.use(session({secret :'secret', resave : false, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session()); 


//ejs 태그를 사용하기 위한 세팅
app.set("view engine","ejs");
//사용자가 입력한 데이터값을 주소로 통해서 전달되는 것을 변환(parsing)
app.use(express.urlencoded({extended: true}));
app.use(express.json()) 
//css/img/js(정적인 파일)사용하려면 이코드를 작성!
app.use(express.static('public'));

//데이터 베이스 연결작업
let db; //데이터베이스 연결을 위한 변수세팅(변수의 이름은 자유롭게 지어도 됨)

MongoClient.connect("mongodb+srv://02skdisk:Aa9755815@cluster0.pbta6ip.mongodb.net/?retryWrites=true&w=majority",function(err,result){
    //에러가 발생했을경우 메세지 출력(선택사항)
    if(err) { return console.log(err); }

    //위에서 만든 db변수에 최종연결 ()안에는 mongodb atlas 사이트에서 생성한 데이터베이스 이름
    db = result.db("portfolio");

    //db연결이 제대로 됬다면 서버실행
    app.listen(port,function(){
        console.log("포트폴리오 연결 성공");
    });

});
let local = ['store','mobile','login','forgotpass','service','join','account']
app.get("/",(req,res)=>{
    res.render("index",{login:req.user})
    console.log(req.user);
})
app.get(`/${local[0]}`,(req,res)=>{
    res.render(`${local[0]}`,{login:req.user})
})

app.get(`/${local[1]}`,(req,res)=>{
    res.render(`${local[1]}`,{login:req.user})
})

app.get(`/${local[2]}`,(req,res)=>{
    res.render(`${local[2]}`,{login:req.user})
})
app.get(`/${local[3]}`,(req,res)=>{
    res.render(`${local[3]}`,{login:req.user})
})
app.get(`/${local[4]}`,(req,res)=>{
    res.render(`${local[4]}`,{login:req.user})
})
app.get(`/${local[5]}`,(req,res)=>{
    res.render(`${local[5]}`,{login:req.user})
})
app.get(`/${local[6]}`,(req,res)=>{
    res.render(`${local[6]}`,{login:req.user})
})



//회원가입 데이터 db에 저장 요청
app.post("/joindb",function(req,res){
   
    db.collection("members").findOne({userId:req.body.userId},(err,member)=>{
        // 찾은 데이터값이 존재할 때 -> 중복된 아이디가 있음
        if(member){
            //자바스크립트 구문을 삽입할 때 사용가능
            res.send("<script> alert('이미 가입된 아이디입니다.'); location.href='/join'</script>")
        }
        else{
            // const userId = req.body.userId;
            // const userPass = req.body.userPass;
            
            db.collection('count').findOne({name:'회원'},(err,result)=>{
                db.collection('members').insertOne({
                    userNo:result.memberCount,
                    userId:req.body.userId,
                    userPass:req.body.userPass,
                    userName:req.body.userName,
                    userBirth:req.body.userBirth
                },(err)=>{
                    db.collection('count').updateOne({name:'회원'},{$inc:{memberCount:1}},(err,result)=>{
                        res.send("<script> alert('회원가입 완료'); location.href='/login'</script>")
                        
                    })
                })
            })
        }
    })
});
passport.use(new LocalStrategy({
    usernameField:"userId",
    passwordField:"userPass",
    session:true,
    },      //해당 name값은 아래 매개변수에 저장
    function(userId, userPass, done) {
                    //회원정보 콜렉션에 저장된 아이디랑 입력한 아이디랑 같은지 체크                                 
      db.collection("members").findOne({ userId:userId }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        //비밀번호 체크 여기서 user는 db에 저장된 아이디의 비번값
        if (userPass == user.userPass) {
            return done(null, user)
          } else {
            return done(null, false)
          }
      });
    }
  ));

//처음 로그인 했을 시 세션 생성 memberid는 데이터에 베이스에 로그인된 아이디
passport.serializeUser(function (user, done) {
    done(null, user.userId)
});
  
  //다른 페이지(서브페이지,게시판 페이지 등 로그인 상태를 계속 표기하기 위한 작업)
  //로그인이 되있는 상태인지 체크
passport.deserializeUser(function (userId, done) {
    db.collection('members').findOne({userId:userId }, function (err,result) {
        done(null, result);
    })
}); 

//로그인 처리 요청경로
app.post("/logincheck",passport.authenticate('local', {failureRedirect : '/login'}),(req,res)=>{
    db.collection("members").findOne({userId:req.body.userId},(err,member)=>{
        // 찾은 데이터값이 존재할 때 -> 중복된 아이디가 있음
        if(member){
            res.redirect('/'); //로그인 성공시 메인페이지로 이동
        }
        else{
            res.send("<script> alert('아이디 및 비밀번호가 맞지않습니다'); </script>")
        }
    })
 })

 //로그아웃 처리 요청경로
 app.get('/logout',(req,res)=>{
    // 로그아웃 함수 적용후 메인페이지로 이동
    // logout 함수는 서버에 있는 세션을 제거해주는 역할
    req.logout(()=>{
        res.redirect("/")
    })
 })

