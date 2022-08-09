const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
app.use(cors());
app.use(express.json());
const PORT = 3001;

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "HAPPYBIRTHDAY9661715024",
    database: "student_elective_info"
});

db.connect((err)=>{
    if(!err){
        console.log("Connected");
    }else{
        console.log("Connection Failed");
    }
})

app.post('/create', (req,res)=>{
        const First_Name = req.body.First_Name;
        const Middle_Name = req.body.Middle_Name;
        const Last_Name = req.body.Last_Name;
        const Email = req.body.Email;
        const PRN_No = req.body.PRN_No;
        const Department = req.body.Department;
        const Division = req.body.Division;
        const TE_Roll_No = req.body.TE_Roll_No;
        const Elective_II_First_Preference = req.body.Elective_II_First_Preference;
        const Elective_II_Second_Preference = req.body.Elective_II_Second_Preference;
        const Elective_II_Third_Preference = req.body.Elective_II_Third_Preference;
        const Elective_II_Fourth_Preference = req.body.Elective_II_Fourth_Preference;
        

        db.query(`INSERT INTO students_elective_final VALUES ("${First_Name}","${Middle_Name}","${Last_Name}","${Email}","${PRN_No}","${Department}","${Division}","${TE_Roll_No}"," (${Elective_II_First_Preference})"," (${Elective_II_Second_Preference})"," (${Elective_II_Third_Preference})"," (${Elective_II_Fourth_Preference})")`,(err,result)=>{
               if(err){
                   console.log(err);
               }else {
                   res.send("values inserted");
               }
        });

});
app.get('/info', (req,res)=>{
db.query("SELECT * FROM students_elective_final",(err,result)=>{
    if(err){
        console.log(err);
    }else{
        res.send(result);
    }
});
});

app.listen(process.env.PORT || PORT ,()=>{
    console.log(`Server running on port ${PORT}`);
});