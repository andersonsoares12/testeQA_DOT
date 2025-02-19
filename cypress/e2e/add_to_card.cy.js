describe('Amazon Book Purchase', () => {
  it('Should add the correct book to the cart', () => {
    // Define o tamanho da tela para MacBook Air M1
    cy.viewport(1440, 900);

    // Acessa a página inicial da Amazon Brasil
    cy.visit('https://www.amazon.com.br/');

    // Preenche o campo de busca
    cy.get('#twotabsearchtextbox').type('AI Engineering: Building Applications with Foundation Models');
    cy.get('#nav-search-submit-button').click();

    // Verifica se o livro correto está nos resultados da busca
    cy.get('h2[aria-label="AI Engineering: Building Applications with Foundation Models"]').click();
    
    
    // Certifica que é a edição em inglês, autor Chip Huyen, livro físico(Capa Comum) e novo
    cy.contains('AI Engineering: Building Applications with Foundation Models');
    cy.contains('Chip Huyen');
    cy.contains('Edição Inglês');
    cy.contains('Capa Comum')  /// o testes no  item 3 esta escrito Você está 
    // comprando o livro físico mas na pagina da amazon aparece Capa Comum  

    // clica todos formatos de livro
    cy.get('#morpheus-ingress-link > span').click();
    //verifica se o produto é novo
    cy.get('#productCondition').should('contain.text', 'Novo');

  
    //Adiciona o livro ao carrinho
    cy.get('#add-to-cart-button').click();  

    // Verifica a mensagem de confirmação
    cy.get('.a-size-medium').should('have.text', 'Adicionado ao carrinho');

    // clica no Botão ir para o carrinho
    cy.get('#sw-gtc > .a-button-inner > .a-button-text').click();

  });
});


