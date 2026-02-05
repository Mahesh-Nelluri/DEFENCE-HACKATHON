let records=[

// MORE DEFAULT EXAMPLES

{
image:"https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=400",
waste:"Plastic Bottle",
material:"PET",
location:"Bay 4",
confidence:"97%",
time:"09:20 AM"
},

{
image:"https://images.unsplash.com/photo-1605600659908-0ef719419d41?w=400",
waste:"Fishing Net",
material:"Nylon",
location:"Sector 2",
confidence:"95%",
time:"10:05 AM"
},

{
image:"https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=400",
waste:"Metal Can",
material:"Aluminum",
location:"Dock Area",
confidence:"92%",
time:"11:15 AM"
}

];

const table=document.getElementById("dataTable");
let uploadedImage="";

// IMAGE PREVIEW
document.getElementById("imageInput")
.addEventListener("change",function(){

const file=this.files[0];
if(file){

uploadedImage=URL.createObjectURL(file);
document.getElementById("preview").src=uploadedImage;

}

});


// LOAD TABLE
function loadTable(){

table.innerHTML="";

records.forEach((record,index)=>{

table.innerHTML+=`
<tr>
<td><img src="${record.image}" class="waste-img"></td>
<td>${record.waste}</td>
<td>${record.material}</td>
<td>${record.location}</td>
<td>${record.confidence}</td>
<td>${record.time}</td>
<td><button onclick="deleteRecord(${index})">Remove</button></td>
</tr>`;

});

}

loadTable();


// ADD RECORD
function addRecord(){

let waste=document.getElementById("wasteInput").value;

if(!uploadedImage || !waste){
alert("Upload image + Waste type!");
return;
}

records.unshift({

image:uploadedImage,
waste:waste,
material:document.getElementById("materialInput").value,
location:document.getElementById("locationInput").value,
confidence:document.getElementById("confidenceInput").value,
time:new Date().toLocaleTimeString()

});

loadTable();

document.querySelectorAll(".controls input")
.forEach(input=>input.value="");

document.getElementById("preview").src="";
uploadedImage="";

}


// DELETE
function deleteRecord(index){
records.splice(index,1);
loadTable();
}


// SEARCH
document.getElementById("searchBar")
.addEventListener("keyup",function(){

let value=this.value.toLowerCase();

let filtered=records.filter(r=>
r.waste.toLowerCase().includes(value)
);

table.innerHTML="";

filtered.forEach((record,index)=>{

table.innerHTML+=`
<tr>
<td><img src="${record.image}" class="waste-img"></td>
<td>${record.waste}</td>
<td>${record.material}</td>
<td>${record.location}</td>
<td>${record.confidence}</td>
<td>${record.time}</td>
<td><button onclick="deleteRecord(${index})">Remove</button></td>
</tr>`;

});

});


// SETTINGS
function openSettings(){
document.getElementById("settingsModal").style.display="flex";
}

function closeSettings(){
document.getElementById("settingsModal").style.display="none";
}

function applySettings(){
closeSettings();
}







