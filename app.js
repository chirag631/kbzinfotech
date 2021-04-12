var express = require('express');
require('dotenv/config');
const AWS=require('aws-sdk')
var fileUpload=require('express-fileupload')
var path = require('path');
const Register=require("./src/models/registers");
const RegisterProject=require("./src/models/studentdetails");
const mongoose = require('mongoose');
const morgan = require('morgan');
const PORT  = process.env.PORT || 5000;
var app = express();
const bodyParser=require('body-parser');
const static_path=path.join(__dirname,"./client/build/index");
const uri='mongodb://localhost:27017/abcde';
const MONGODB_URI='mongodb+srv://chirag:Chirag@7321@cluster0.sbwl0.mongodb.net/chirag?retryWrites=true&w=majority';
mongoose.connect(process.env.MONGODB_URI || MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});

const s3=new AWS.S3({
  accessKeyId:process.env.AWS_ID,
  secretAccessKey:process.env.AWS_SECRET,
  region: "us-east-2"
})
var cors=require('cors');

app.use(fileUpload());
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));

app.use(express.static(static_path));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:false
}))
app.use(cors());

app.use((req,res,next)=>{
  console.log(`Request_Endpoint:${req.method} ${req.url}`);
  next();
});

app.get('/register',async(req,res)=>{
  Register.find()
  .then(result=>{
    res.status(200).json({
      studentData:result
    })
  })
.catch(err=>{
  console.log(err);
  res.status(500).json({
    error:err
  })
})
})

app.post("/post",async(req,res)=>{    
  var username=req.body.username;
  var email=req.body.email;
  var password=req.body.password;
console.log(email)
  let user = await Register.findOne({ email });
  if (user){ 
    res.status(400).json({
    message:"Email already Registered",
   
});
}else{

  console.log(username)
            const registerEmployee = new Register({
                name:username,
                email:email,
                password:password,
                image:'defaultprofile.png',
                age:'20'
            });
            registerEmployee.save().then(doc=>{
              res.status(201).json({
                  message:"User Registered Successfully",
                  results:doc
              });
          })
          .catch(err=>{
              res.json(err);
          });
        }
})

app.get('/getuser/:userid',async(req,res)=>{
  const {userid}=req.params
  console.log(userid) 
  Register.find({_id:userid})
  .then(result=>{
    res.status(200).json({
      studentData:result
    })
  })
.catch(err=>{
  console.log(err);
  res.status(500).json({
    error:err
  })
})
})

app.post("/updateprofile", function(req,res,next){
  
  if(!req.files )
  {
    var username=req.body.username;
    var email=req.body.email;
    var password=req.body.password;
    var _id=req.body.userid;
    var age=req.body.age;
    
    Register.findById(_id,function(err,data){
    if (!data){
      res.status(404).send("data is not found");
    }else{
      
      data.name=username,
    data.email=email,
    data.password=password,
    data.age=age,
  
    data.save().
      then(doc=>{
   return res.status(201).json({
        message:"User Registered Successfully",
        results:doc
    });
    })
    .catch(err=>{
    return res.json(err);
    });
    }
    
  })
  }
  else{
  if(req.files.articalImage.mimetype!='image/jpg'&&req.files.articalImage.mimetype!='image/jpeg'&&req.files.articalImage.mimetype!='image/png'){
    res.json({message:"Please upload image file"});
  }
else{
  
  var file=req.files.articalImage
      var username=req.body.username;
      var email=req.body.email;
      var password=req.body.password;
      var _id=req.body.userid;
      var name=file.name    
     
    
      Register.findById(_id,function(err,data){
      if (!data){
        res.status(404).send("data is not found");
      }else{
        
        data.name=username,
      data.email=email,
      data.password=password,
      data.image=name
    
      data.save().then(()=>{
        
        file = req.files.articalImage;
        const fileContent  = Buffer.from(file.data, 'binary');
      console.log(Date.now());
          // Setting up S3 upload parameters
          const params = {
              Bucket: process.env.AWS_BUCKET_NAME+'/users',
              Key: name, // File name you want to save as in S3
              Body: fileContent 
          };
      
          // Uploading files to the bucket
          s3.upload(params, function(err, data) {
              if (err) {
                res.status(500).json({
                  message:"Upload failed"});
              }
               else{
                res.status(201).json({
                  message:"User Registered Successfully",           
               })    
          }
        })
      })
      .catch(err=>{
      res.json(err);
      });
      }
      
    })
    
  }
}
})

app.post("/postprojectdata", function(req,res,next){
  file = req.files.articalImage;
  if(!req.files )
  {
    res.json({
      status:'false',
      message:"file is empty"});
  }
  if(file.mimetype!='image/jpg'&&file.mimetype!='image/jpeg'&&file.mimetype!='image/png'){
    res.json({
      status:'false',
      message:"Please upload image file"});
  }
else{
  var title=req.body.title;
    var discription=req.body.discription;
    var userid=req.body.userid;
    var name=file.name;
  const fileContent  = Buffer.from(file.data, 'binary');
console.log(Date.now());
    // Setting up S3 upload parameters
    const params = {
        Bucket: process.env.AWS_BUCKET_NAME+'/uploads',
        Key: name, // File name you want to save as in S3
        Body: fileContent 
    };

    // Uploading files to the bucket
    s3.upload(params, function(err, data) {
        if (err) {
          res.json({
            status:'false',
            message:"Upload failed"});
        }
        else{
      
  const registerEmployee = new RegisterProject({
    title:title,
    discription:discription,
    userid:userid,
    image:name
})
  registerEmployee.save().then(doc=>{
    res.status(201).json({
      status:'true',
        message:"User Registered Successfully",
        results:doc
    });
})
.catch(err=>{
    res.json(err);
});
        }    
    });
    
  }
})

app.post('/viewprojectdata',async(req,res)=>{
  const userid=req.body.userid;
  
RegisterProject.find({userid:userid})
.then(result=>{
  res.status(200).json({
    studentData:result
  })
})
.catch(err=>{
console.log(err);
res.status(500).json({
  error:err
})
})
})


app.post('/getprojectdata',async(req,res)=>{
    const name=req.body.name;
    try{
    const username=await Register.findOne({name:name});
    const image=username.image;
    const age=username.age;
    const userid=username._id;


  RegisterProject.find({userid:userid})
  .then(result=>{
    res.status(200).json({
      studentData:result,
      image,
      age
    })
  })
.catch(err=>{
  console.log(err);
  res.status(500).json({
    error:err
  })
})
    }catch(e){

    }
})



app.post("/login", async(req,res)=>{
  try{
    const email=req.body.email;
    const password=req.body.password;
    console.log(password)
    const useremail=await Register.findOne({email:email});
    console.log(useremail.password);
    const userid=useremail._id;
    const username=useremail.name;
    console.log(userid);
    if(useremail.password===password){
      res.status(201).json({msg:"User Login Successfuly",status:true,userid,username});
    }
    else{
      res.status(500).json({msg:"Invalid User",status:false});
    }  
  }catch(e){
    res.status(400).send("invalid Email");
}
})
          


// This middleware informs the express application to serve our compiled React files
if (process.env.NODE_ENV === 'production' ) {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function (req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
};


app.use(morgan('tiny'));

// This middleware informs the express application to serve our compiled React files
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function (req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
};


app.listen(PORT,()=>{
  console.log("server running on "+ PORT)
})

//module.exports = app;