function calculateSI() {
    let p = document.getElementById("principal").value;
    let r = document.getElementById("rate").value;
    let t = document.getElementById("time").value;

    if (p === "" || r === "" || t === "") {
        document.getElementById("result").innerText = "Please fill all fields!";
        return;
    }

    let si = (p * r * t) / 100;

    document.getElementById("result").innerText = "Simple Interest = ₹ " + si;
}