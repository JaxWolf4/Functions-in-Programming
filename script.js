var wrap = document.body.querySelector(".wrap");
var dragonHealth = 0
var Firedamage = 3
var Icedamage = 1
var Poisondamage = 4
var Damage = 0
function dragon(type, damage){
if (damage){
  Damage = Firedamage - 1;
}else{
  Damage = Icedamage + 1;
}
}
document.body.querySelector(".poison").addEventListener("click", function(){
 var psn = dragonHealth = dragonHealth + Poisondamage;
  dragon(psn);
  if (dragonHealth>=10){
 wrap.innerHTML = "Dragon Damage: "+(dragonHealth) +"<br>You win!"
}else{
wrap.innerHTML = "Dragon Damage: " +(dragonHealth);
}
})
document.body.querySelector(".fire").addEventListener("click", function(){
  dragon(fr, true);
 var fr = dragonHealth = dragonHealth + Damage
  if (dragonHealth>=10){
  wrap.innerHTML = "Dragon Damage: "+(dragonHealth) +"<br>You win!"
}else{
wrap.innerHTML = "Dragon Damage: "+(dragonHealth);
}
})
document.body.querySelector(".ice").addEventListener("click", function(){
  dragon(ic, false);
 var ic = dragonHealth = dragonHealth + Damage
  if (dragonHealth>=10){
  wrap.innerHTML = "Dragon Damage: "+(dragonHealth) +"<br>You win!"
}else{
wrap.innerHTML = "Dragon Damage: "+(dragonHealth);
}
})
wrap.innerHTML = "Dragon Damage: " +(dragonHealth);