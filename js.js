document.getElementById('vendaForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  fetch('http://localhost:3000/enviar-formulario', {
    method: 'POST',
    body: formData,
  })
  .then(res => res.json())
  .then(data => {
    alert(data.mensagem || 'Venda cadastrada com sucesso!');
    form.reset();
    document.getElementById('preview').innerHTML = '';
  })
  .catch(err => {
    console.error('Erro ao enviar:', err);
    alert('Erro ao cadastrar venda.');
  });
});
