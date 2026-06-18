function calculateBudget() {
    let travel =
        parseInt(document.getElementById("travel").value) || 0;

    let hotel =
        parseInt(document.getElementById("hotel").value) || 0;

    let food =
        parseInt(document.getElementById("food").value) || 0;

    let total = travel + hotel + food;

    document.getElementById("result").innerHTML =
        "Total Trip Cost = ₹" + total;
}

function toggleMode() {
    document.body.classList.toggle("dark");
}

function searchPlace() {
    let input =
        document.getElementById("searchBox")
            .value.toLowerCase();

    let places =
        document.getElementsByClassName("place");

    for (let i = 0; i < places.length; i++) {
        let text =
            places[i].innerText.toLowerCase();

        if (text.includes(input))
            places[i].style.display = "inline-block";
        else
            places[i].style.display = "none";
    }
}

function bookHotel() {
    let name =
        document.getElementById("name").value;

    if (name == "") {
        alert("Enter Name");
        return false;
    }

    alert("Hotel Booked Successfully!");

    return false;
}