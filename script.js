const form = document.getElementById("bookingForm");
const checkin = document.getElementById("checkin");
const checkout = document.getElementById("checkout");
const error = document.getElementById("error");

form.addEventListener("submit", function(e) {

    const checkinDate = new Date(checkin.value);
    const checkoutDate = new Date(checkout.value);
    const today = new Date();

    if (checkinDate < today) {
        e.preventDefault();
        error.textContent = "Check-in date cannot be in the past!";
        return;
    }

    if (checkoutDate <= checkinDate) {
        e.preventDefault();
        error.textContent = "Check-out must be after check-in!";
        return;
    }

    error.textContent = "";
    alert("Booking Successful!");
});
