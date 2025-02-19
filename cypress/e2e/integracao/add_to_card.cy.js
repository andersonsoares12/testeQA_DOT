
// Caso de Teste 01: Buscar o Livro
describe('Buscar o Livro', () => {
  it('Deve encontrar o livro correto nos resultados da busca', () => {
    cy.viewport(1440, 900);

    cy.intercept('GET', '**/some-api-endpoint').as('pageLoad');

    cy.visit('https://www.amazon.com.br/');

    cy.get('#twotabsearchtextbox').type('AI Engineering: Building Applications with Foundation Models');
    cy.get('#nav-search-submit-button').click();
    cy.get('img[alt="AI Engineering: Building Applications with Foundation Models"]')
      .should('be.visible')
      .screenshot('busca com sucesso');
    });
  });
// Caso de Teste 02: Verificar os Detalhes do Livro
describe('Verificar os Detalhes do Livro', () => {
  it('Deve verificar se os detalhes do livro estão corretos', () => {
    cy.viewport(1440, 900);

    cy.visit('https://www.amazon.com.br/');

    // Realiza a busca pelo livro
    cy.get('#twotabsearchtextbox').type('AI Engineering: Building Applications with Foundation Models');
    cy.get('#nav-search-submit-button').click();
    cy.get('h2[aria-label="AI Engineering: Building Applications with Foundation Models"]').click();

    // Verifica os detalhes do livro
    cy.contains('AI Engineering: Building Applications with Foundation Models');
    cy.contains('Chip Huyen');
    cy.contains('Edição Inglês');
    cy.contains('Capa Comum');
    
    // Verifica se o livro é novo
    cy.get('#mediaMatrixGridAODPopover > .a-popover-trigger > .a-size-base').click();
    cy.get('#mm-grid-aod-popover-paperback_meta_binding-entry').click();
    cy.get(':nth-child(2) > .a-fixed-right-grid-inner > .aod-padding-right-10 > #aod-offer-heading > .a-size-base').should('contain.text', 'Novo');
    cy.get('.a-declarative > span > .a-icon').click();
  });
});
// Caso de Teste 03: Adicionar ao Carrinho
describe('Adicionar ao Carrinho', () => {
  it('Deve adicionar o livro ao carrinho e verificar a mensagem de confirmação', () => {
    cy.viewport(1440, 900);

    cy.visit('https://www.amazon.com.br/');

    // Realiza a busca pelo livro
    cy.get('#twotabsearchtextbox').type('AI Engineering: Building Applications with Foundation Models');
    cy.get('#nav-search-submit-button').click();
    cy.get('h2[aria-label="AI Engineering: Building Applications with Foundation Models"]').click();

    // Verifica os detalhes do livro
    cy.contains('AI Engineering: Building Applications with Foundation Models');
    cy.contains('Chip Huyen');
    cy.contains('Edição Inglês');
    cy.contains('Capa Comum');

    // Adiciona o livro ao carrinho
    cy.get('#add-to-cart-button').click();

    // Verifica a mensagem de confirmação
    cy.get('.a-size-medium').should('be.visible', 'Adicionado ao carrinho');
    cy.get('#sw-atc-details-single-container').should('be.visible').screenshot();
  });
});
