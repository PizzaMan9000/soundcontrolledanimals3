function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });

    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/cwhqbMOq3/model.json", modelReady);
}

function modelReady(error, results) {
    classifier.classify(gotResults);
}

lion = 0;
cat = 0;
dog = 0;

function gotResults(error, results) {
    if (error) {
        console.log(error)
    } else {
        console.log(results);

        random_color_r = Math.floor(Math.random() * 255) + 1;
        random_color_g = Math.floor(Math.random() * 255) + 1;
        random_color_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("number").innerHTML = "Accuracy - " + (results[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("number").style.color = "rgb(" + random_color_r + "," + random_color_g + "," + random_color_b;

        document.getElementById("hearing").innerHTML = "I can hear - " + results[0].label;
        document.getElementById("hearing").style.color = "rgb(" + random_color_r + "," + random_color_g + "," + random_color_b;

        img = document.getElementById("animalIMG");

        if (results[0].label == "dog") {
            dog = 1;
            img.src = "dog.gif";
        } else if (results[0].label == "cat") {
            cat = 1;
            img.src = "cat.gif";
        } else if (results[0].label == "lion") {
            lion = 1;
            img.src = "lion.gif";
        } else {
            img.src = "ear.png";
        }
    }
}