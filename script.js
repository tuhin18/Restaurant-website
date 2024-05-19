document.addEventListener('DOMContentLoaded', function() {
    // Initialize FullCalendar
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: [ 'dayGrid' ],
        initialView: 'dayGridMonth',
        events: [
            { title: 'Event 1', start: '2024-05-01' },
            { title: 'Event 2', start: '2024-05-02' }
        ]
    });
    calendar.render();

    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert('Thank you for contacting us, ' + name + '!');
            contactForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Reservation Form Submission
    const reservationForm = document.getElementById('reservationForm');
    reservationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const resName = document.getElementById('resName').value;
        const resEmail = document.getElementById('resEmail').value;
        const resDate = document.getElementById('resDate').value;
        const resTime = document.getElementById('resTime').value;
        const resGuests = document.getElementById('resGuests').value;

        if (resName && resEmail && resDate && resTime && resGuests) {
            alert('Thank you for your reservation, ' + resName + '!');
            reservationForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Social Media Sharing
    const shareButtons = document.querySelectorAll('.share-button');
    shareButtons.forEach(button => {
        button.addEventListener('click', () => {
            const url = window.location.href;
            let shareUrl;
            if (button.classList.contains('facebook')) {
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
            } else if (button.classList.contains('twitter')) {
                shareUrl = `https://twitter.com/share?url=${encodeURIComponent(url)}`;
            } else if (button.classList.contains('linkedin')) {
                shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}`;
            }
            window.open(shareUrl, '_blank');
        });
    });
});