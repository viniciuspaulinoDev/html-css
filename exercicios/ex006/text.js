window.addEventListener("beforeunload", event => {
    event.preventDeFault();
    event.returnValue = '';
})
/*notificacao antes de fechar a guia. Perguntando se tem certeza que quer fechar.*/