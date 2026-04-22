const form = document.querySelector('#contact-form');
const note = document.querySelector('#form-note');
const targetEmail = 'mediconnsupport@gmail.com';

if (form && note) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name') || 'Anonymous';
    const email = formData.get('email') || 'Not provided';
    const message = formData.get('message') || '';

    const subject = encodeURIComponent(`Mediconn feedback from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    note.textContent = `Opening your email app to send this to ${targetEmail}. If nothing opens, copy the address manually.`;
    window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
  });
}