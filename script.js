document.getElementById("getJokeBtn").addEventListener("click", function() {
    // Створення запиту
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Обробка отриманих даних
            var jokes = this.responseText.split("\n"); // Розділити на масив за рядками
            var randomJoke = jokes[Math.floor(Math.random() * jokes.length)]; // Випадковий жарт
            document.getElementById("joke").innerText = randomJoke;
        }
    };
    xhttp.open("GET", "jokes.txt", true);
    xhttp.send();
});
