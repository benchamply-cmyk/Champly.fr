const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
toggle.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(expanded));
  navigation.classList.toggle('open', expanded);
});
navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    toggle.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('open');
  }
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    toggle.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('open');
    toggle.focus();
  }
});
const email = (window.SITE_CONFIG?.email || '').trim();
const emailReady = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && !/[\r\n?&#]/.test(email);
const form = document.querySelector('#contact-form');
if (emailReady) {
  const link = document.querySelector('#email-link');
  link.textContent = email;
  link.href = `mailto:${email}`;
  link.hidden = false;
} else {
  form.querySelector('button').textContent = 'Télécharger mon message';
  document.querySelector('#contact-note').textContent = 'L’adresse de contact sera ajoutée prochainement. Vous pouvez préparer et télécharger votre message ; rien ne sera envoyé.';
}
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const subject = document.querySelector('#subject').value;
  const body = document.querySelector('#message').value.trim();
  if (!body) {
    document.querySelector('#contact-status').textContent = 'Décrivez votre projet en quelques mots.';
    document.querySelector('#message').focus();
    return;
  }
  if (emailReady) {
    window.location.href = `mailto:${email}?subject=${encodeURIComponent('Demande de mission — ' + subject)}&body=${encodeURIComponent(body)}`;
    document.querySelector('#contact-status').textContent = 'Votre messagerie peut maintenant s’ouvrir. Vérifiez puis envoyez le message depuis celle-ci.';
  } else {
    const url = URL.createObjectURL(new Blob([`Demande de mission — ${subject}\n\n${body}\n`], {type: 'text/plain;charset=utf-8'}));
    const link = document.createElement('a');
    link.href = url;
    link.download = 'mon-projet.txt';
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    document.querySelector('#contact-status').textContent = 'Votre message a été préparé pour téléchargement. Aucun message n’a été envoyé.';
  }
});
