narizX = 0
narizY = 0

function preload(){
}
function setup(){
    Canvas = createCanvas(400,400)
    background("lime")
    video = createCapture(VIDEO)
    video.size(400,400)
    video.hide()
    pose = poseNet(video,listo)
    pose.on("pose",respuesta)
}



function draw(){
image(video,0,0,400,400)
fill("red")
circle(narizX,narizY,50)
}
function listo() {
    console.log("El modelo ya esta listo");

}
function respuesta(resultado){
    if(resultado && resultado.length > 0){
    console.log(resultado);
    narizX  = resultado[0].pose.nose.x
    narizY  = resultado[0].pose.nose.y
    }
    
}
function guardar(){
    save("filtro.png")
}