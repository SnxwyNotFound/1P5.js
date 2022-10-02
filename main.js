function preload() {

}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(150, 150);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 230, 150, 220, 200);

    fill(99, 219, 255);
    stroke(99, 219, 255);
    circle(50,50,80);

    circle(590,50,80);

    circle(50,420,80);

    circle(590,420,80);

    fill(139, 245, 73);
    stroke(139, 245, 73);
    rect(90, 40, 460, 20);

    rect(90, 420, 460, 20);
    
}

function take_snapshot() {
    save('student_name.png');
}