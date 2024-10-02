
window.addEventListener('wheel', function(event) {
    event.preventDefault();
    const scrollSpeed = 3.5;

    
    window.scrollBy({ top: event.deltaY * scrollSpeed, behavior: 'smooth' });
}, { passive: false });
function validateForm(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    var email = document.getElementById("email").value;

    // Verifica se o email é válido usando uma expressão regular
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Por favor, insira um email válido.");
        return false; // Impede o envio do formulário
    }

    // Se a validação passar, envia os dados para o FormSubmit
    fetch('https://formsubmit.co/lucassmaciel2006@gmail.com', {
        method: 'POST',
        body: new FormData(document.getElementById('contactForm'))
    }).then(response => {
        if (response.ok) {
            alert("Formulário enviado com sucesso!");
            window.location.href = './index.html'; // Redireciona para a home
        } else {
            throw new Error('Erro ao enviar o formulário.');
        }
    }).catch(error => {
        console.error('Erro ao enviar o formulário:', error);
        alert("Ocorreu um erro ao enviar o formulário.");
    });

    return false; // Impede o envio do formulário padrão
}
