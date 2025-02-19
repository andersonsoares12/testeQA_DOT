describe('Amazon Book Purchase', () => {
    it('Should add the correct book to the cart', () => {
      // Acessa a página inicial da Amazon Brasil
      cy.visit('https://www.amazon.com.br/');
  
      // Preenche o campo de busca
      cy.get('#twotabsearchtextbox').type('AI Engineering: Building Applications with Foundation Models');
      cy.get('#nav-search-submit-button').click();
  
      // Verifica se o livro correto está nos resultados da busca
      cy.contains('AI Engineering: Building Applications with Foundation Models').click();
      
      // Certifica que é a edição em inglês, autor Chip Huyen, livro físico e novo
      cy.get('#productTitle').should('contain.text', 'AI Engineering: Building Applications with Foundation Models');
      cy.get('#bylineInfo').should('contain.text', 'Chip Huyen');
      cy.get('#bookEdition').should('contain.text', 'Inglês');
      cy.get('#productDetails').should('contain.text', 'Livro físico');
      cy.get('#productCondition').should('contain.text', 'Novo');
  
      // Adiciona o livro ao carrinho
      cy.get('#add-to-cart-button').click();
  
      // Verifica a mensagem de confirmação
      cy.get('.a-size-medium').should('have.text', 'Adicionado ao carrinho');
    });
  });
  