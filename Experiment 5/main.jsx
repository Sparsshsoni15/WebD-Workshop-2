let employees=[];

function addEmployee(){

let name=document.getElementById("name").value;
let id=document.getElementById("id").value;
let salary=document.getElementById("salary").value;
let department=document.getElementById("department").value;

if(name===""||id===""||salary===""||department===""){
alert("Please fill all fields properly");
return;
}

let employee={
name:name,
id:id,
salary:Number(salary),
department:department
};

employees.push(employee);

alert("Employee "+name+" stored successfully");

document.getElementById("name").value="";
document.getElementById("id").value="";
document.getElementById("salary").value="";
document.getElementById("department").value="";
}

function displayAll(){

if(employees.length===0){
alert("No employees stored");
return;
}

let output="";

employees.forEach(function(emp){
output+="Name: "+emp.name+
" | ID: "+emp.id+
" | Salary: "+emp.salary+
" | Department: "+emp.department+"<br>";
});

document.getElementById("output").innerHTML=output;
}

function salaryAbove(){

let output="";

for(let i=0;i<employees.length;i++){

if(employees[i].salary>50000){

output+="Name: "+employees[i].name+
" | Salary: "+employees[i].salary+"<br>";
}
}

if(output===""){
output="No employees with salary greater than 50000";
}

document.getElementById("output").innerHTML=output;
}

function totalSalary(){

let total=0;

for(let i=0;i<employees.length;i++){
total+=employees[i].salary;
}

document.getElementById("output").innerHTML="Total Salary: "+total;
}

function averageSalary(){

if(employees.length===0){
alert("No employee data available");
return;
}

let total=0;

for(let i=0;i<employees.length;i++){
total+=employees[i].salary;
}

let avg=total/employees.length;

document.getElementById("output").innerHTML="Average Salary: "+avg.toFixed(2);
}

function countDepartment(){

let deptCount={};

for(let i=0;i<employees.length;i++){

let dept=employees[i].department;

if(deptCount[dept]){
deptCount[dept]++;
}
else{
deptCount[dept]=1;
}
}

let output="";

for(let d in deptCount){
output+=d+" : "+deptCount[d]+" employees<br>";
}

document.getElementById("output").innerHTML=output;
}