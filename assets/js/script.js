const nav = document.getElementById('nav-bar-fixed');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    nav.classList.add('nav-bar-fixed');
  } else {
    nav.classList.remove('nav-bar-fixed');
  }
});

document
  .getElementById('whatsappForm')
  .addEventListener('submit', function (e) {
    e.preventDefault();

    // Get field values
    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    const org = document.getElementById('organization').value;
    const email = document.getElementById('email').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const message = document.getElementById('message').value;

    // WhatsApp number (Your number)
    const phoneNumber = '919310925111';

    // Format message
    const whatsappMessage = `Hello! 👋%0AI would like to inquire:%0A
*Name:* ${name}%0A
*Mobile:* ${mobile}%0A
*Organization:* ${org}%0A
*Email:* ${email}%0A
*City:* ${city}%0A
*State:* ${state}%0A
*Message:* ${message}`;

    // Open WhatsApp chat
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
    window.open(whatsappURL, '_blank');
  });

document
  .getElementById('whatsappFormPopup')
  .addEventListener('submit', function (e) {
    e.preventDefault();

    // Collect input values
    const name = document.getElementById('namePopup').value;
    const mobile = document.getElementById('mobilePopup').value;
    const organization = document.getElementById('organizationPopup').value;
    const email = document.getElementById('emailPopup').value;
    const city = document.getElementById('cityPopup').value;
    const state = document.getElementById('statePopup').value;
    const message = document.getElementById('messagePopup').value;

    // WhatsApp number
    const phoneNumber = '919310925111';

    // Format WhatsApp message
    const whatsappMessage = `Hello! 👋%0AI would like to inquire:%0A
*Name:* ${name}%0A
*Mobile:* ${mobile}%0A
*Organization:* ${organization}%0A
*Email:* ${email}%0A
*City:* ${city}%0A
*State:* ${state}%0A
*Message:* ${message}`;

    // Open WhatsApp chat in new tab
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
    window.open(whatsappURL, '_blank');
  });
