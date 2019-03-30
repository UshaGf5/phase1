function loadJson(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json")
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState === 4 && xhr.status=="200"){
      callback(xhr.responseText);
}
}
xhr.send();
}
loadJson("data.json",function(text){
     let data=JSON.parse(text);
     console.log(data);
     profile(data.profile);
     career(data.career);
     education(data.education);
     skills(data.skills);
     Hobbies(data.Hobbies);
})
var left=document.querySelector(".left");
function profile(p){
  var image=document.createElement("img");
 image.src=p.image;
 left.append(image);
 var h1=document.createElement("h1");
 h1.textContent=p.name;
 left.append(h1);
 var h2=document.createElement("h2");
 h2.textContent=p.desig;
 left.append(h2);
 var h3=document.createElement("h3");
 h3.textContent=p.e_mail;
 left.append(h3);
 var h3=document.createElement("h3");
 h3.textContent=p.ph_num;
 left.append(h3);
}
var right=document.querySelector(".right");
function career(c){
  var h2=document.createElement("h2");
  h2.textContent="Career Objective";
  right.append(h2);
  var h3=document.createElement("hr");
  right.append(h3);
  var c1=document.createElement("h4");
  c1.textContent=c.info;
  right.append(c1);
  var hr=document.createElement("hr");
  right.append(hr);
}
function education(e){
  var h1=document.createElement("h3");
  h1.textContent="Educational Details";
  right.append(h1);
  //var h2=document.createElement("hr");
  //right.append(h2);
  var table=document.createElement("table");
  table.border="2";
  right.append(table);
  var tr1="<tr><th>s_no</th><th>Institution</th><th>qualification</th><th>%</th><th>YOP</th></tr>"
  var tr2="";
  for(i=0;i<e.length;i++)
  {
    tr2=tr2+"<tr><td>"+e[i].s_no+"</td><td>"+e[i].Institution+"</td><td>"+e[i].qualification+"</td><td>"+e[i].perc+"</td><td>"+e[i].YOP+"</td>";
  }
  table.innerHTML=tr1+tr2;
  right.append(table);
  }
  function skills(s){
    var h3=document.createElement("h3");
    h3.textContent="Skills";
    right.append(h3);
    var hr=document.createElement("hr");
    right.append(hr);
    var p1=document.createElement("li");
    p1.textContent=s.skill_1;
    right.append(p1);
    var p2=document.createElement("li");
    p2.textContent=s.skill_2;
    right.append(p2);
    var p3=document.createElement("li");
    p3.textContent=s.skill_3;
    right.append(p3);
}
function Hobbies(h)
{
  var h3=document.createElement("h3");
  h3.textContent="Hobbies";
  right.append(h3);
  var hr=document.createElement("hr");
  right.append(hr);
  var p1=document.createElement("li");
  p1.textContent=h.h1;
  right.append(p1);
  var p2=document.createElement("li");
  p2.textContent=h.h2;
  right.append(p2);
  var p3=document.createElement("li");
  p3.textContent=h.h3;
  right.append(p3);

}
