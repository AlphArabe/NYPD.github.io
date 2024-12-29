document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Connexion réussie (simulation). Accès activé à la recherche.');
  document.getElementById('login').style.display = 'none';
  document.getElementById('search').style.display = 'block';
});

document.getElementById('searchForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const id = document.getElementById('id').value;
  const results = document.getElementById('results');

  if (name || id) {
    results.innerHTML = `
      <h3>Résultat de la recherche :</h3>
      <p>Nom : ${name || 'John Doe'}</p>
      <p>ID : ${id || '123456'}</p>
      <p>Statut : Casier vierge</p>
    `;
  } else {
    results.innerHTML = '<p>Veuillez entrer un nom ou un ID valide.</p>';
  }
});
