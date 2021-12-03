var personajeIMG;
var personaje;
var youkairedIMG;
var youkaired;
var youkaispikeyIMG;
var youkaispikey;
var youkaiyellowIMG;
var youkaiyellow;
var youkaiwhiteIMG;
var youkaiwhite;
var bg;

function preload() {
personajeIMG = loadAnimation ("Personaje/Personaje1.png","Personaje/Personaje2.png","Personaje/Personaje3.png", "Personaje/Personaje4.png", "Personaje/Personaje5.png", "Personaje/Personaje6.png", "Personaje/Personaje7.png", "Personaje/Personaje8.png", "Personaje/Personaje9.png", "Personaje/Personaje10.png", "Personaje/Personaje11.png", "Personaje/Personaje12.png", "Personaje/Personaje13.png", "Personaje/Personaje14.png", "Personaje/Personaje15.png", "Personaje/Personaje16.png", "Personaje/Personaje17.png", "Personaje/Personaje18.png", "Personaje/Personaje19.png" );
youkairedIMG = loadAnimation ("Youkai Red/HeadButt/RedButt1.png","Youkai Red/HeadButt/RedButt2.png","Youkai Red/HeadButt/RedButt3.png","Youkai Red/HeadButt/RedButt4.png","Youkai Red/HeadButt/RedButt5.png","Youkai Red/HeadButt/RedButt6.png","Youkai Red/HeadButt/RedButt7.png");
//youkaispikeyIMG = loadAnimation ("Youkai Spikey Ball/HeadButt/ SpikeyButt1.png", "Youkai Spikey Ball/HeadButt/SpikeyButt2.png","Youkai Spikey Ball/ HeadButt/SpikeyButt3.png","Youkai Spikey Ball/ HeadButt/SpikeyButt4.png","Youkai Spikey Ball/ HeadButt/SpikeyButt5.png", "Youkai Spikey Ball/ HeadButt/SpikeyButt6.png", "Youkai Spikey Ball/ HeadButt/SpikeyButt7.png");
//youkaiyellowIMG = loadAnimation ("Youkai Thunder 2/thunder2HeadButt_1.png", "Youkai Thunder 2/thunder2HeadButt_2.png", "Youkai Thunder 2/thunder2HeadButt_3.png", "Youkai Thunder 2/thunder2HeadButt_4.png", "Youkai Thunder 2/thunder2HeadButt_5.png", "Youkai Thunder 2/thunder2HeadButt_6.png", "Youkai Thunder 2/thunder2HeadButt_7.png");
//youkaiwhiteIMG = loadAnimation ("yOUKAI wHITE/HEAD BUT/whiteRebota1.png", "yOUKAI wHITE/HEAD BUT/whiteRebota4.png", "yOUKAI wHITE/HEAD BUT/whiteRebota5.png", "yOUKAI wHITE/HEAD BUT/whiteRebota6.png", "yOUKAI wHITE/HEAD BUT/whiteRebota7.png")
bg = loadImage("Images/image.png");


}

function setup() {
  createCanvas(1200, 800);
  personaje =  createSprite(75,200,50,50);
  //personaje.addAnimation("Personaje", personajeIMG);
  youkaired = createSprite(150,400,50,50);
  //youkaired.addAnimation("Youkai Red", youkairedIMG)


 
}
function draw() {
  
  background(bg);
  Comandos();
  youkaired.velocityX = random(-5,5);
  youkaired.velocityY= random(-5,5);
  drawSprites();
 
  
}

function Comandos() {
  if(keyDown("down")){
    personaje.y = personaje.y+1;
  }
  if(keyDown ("right")){
    personaje.x = personaje.x+1;
  }
  if(keyDown ("left")){
    personaje.x = personaje.x-1;
  }
  if(keyDown ("up")){
    personaje.y = personaje.y-1;
  }

}