document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const hotelName = document.getElementById('hotelName').value;
    const roomNumber = document.getElementById('roomNumber').value;
    alert(`Booking confirmed for ${hotelName}, Room Number: ${roomNumber}`);
});
