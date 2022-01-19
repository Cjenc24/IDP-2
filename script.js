//not super important bc covered in style.css
function setup() {
  createCanvas(400, 400);
}
//1st interaction & response
function chatter(){
  let x,y;
  x = prompt("Say: yes, another one, one more, again, or please");
  if(x == "yes"){
    y = "What kind of music do mummies like listening to on Halloween?"
  }
  else if(x=="another one"){
 y="How do vampires get around on Halloween?"}
 else if(x=="one more"){
   y = "Why can't skeletons play church music?"
 }
 else if(x=="again"){
   y = "Where do zombies live?"
 }
 else if(x=="no"){
   y = "Boo..."
 }
  else if(x== null){
   y = "Try again."
 }
  else if(x== ""){
    y = "Try following the instructions."
 }
 else if(x=="please"){
   y = "I dropped my pumpkin yesterday. Jack-o-lantern?"
 }
  document.body.innerHTML = document.body.innerHTML +
  "<p class='x'>" + x + "</p>" +
  "<p class='y'>" + y + "</p>";   
}
//2nd response & interaction
function answer(){
  let msg,reply;
 msg = prompt("If you said 'yes' say 'what', another one: how,  one more: why, again: where, no: who, please: ?");
  if (msg == "what"){
    reply = "Wrap Music"
  }else if(msg=="how"){
    reply = "on blood vessels"
  }else if(msg=="why"){
  reply = "Because they have no organs"}
  else if(msg=="where"){
  reply = "On a dead end street"}
    else if(msg=="who"){
  reply = "BOO you!"}
  else if(msg=="?"){
  reply = "More like crack-o-lantern!"}
   else if(msg== null){
   reply = "Try again."
 }
  else if(msg== ""){
    reply = "Try following the instructions."
  }
//format
 document.body.innerHTML = document.body.innerHTML +
  "<p class='msg'>" + msg + "</p>" +
  "<p class='reply'>" + reply + "</p>";   
}
chatter();
answer();



  

