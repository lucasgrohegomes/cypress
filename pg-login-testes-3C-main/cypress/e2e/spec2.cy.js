describe('Página de Cadastro', () => {
  
  it('Campos obrigatórios vazios', () => {
    cy.visit('http://127.0.0.1:5500/cadastro.html');
    cy.get('#registrar').click();
    cy.get('#erro').should('be.visible').and('contain', 'Todos os campos são obrigatórios!');
  });

  it('Senhas diferentes', () => {
    cy.visit('http://127.0.0.1:5500/cadastro.html');
    cy.get('#nome').type('Lucas');
    cy.get('#email').type('lucas@example.com');
    cy.get('#senha').type('senha123');
    cy.get('#confirmaSenha').type('senha456');
    cy.get('#registrar').click();
    cy.get('#erro').should('be.visible').and('contain', 'As senhas não correspondem!');
  });

  it('Cadastro bem-sucedido', () => {
    cy.visit('http://127.0.0.1:5500/cadastro.html');
    cy.get('#nome').type('Lucas');
    cy.get('#email').type('lucas@example.com');
    cy.get('#senha').type('senha123');
    cy.get('#confirmaSenha').type('senha123');
    cy.get('#registrar').click();

    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('Cadastro realizado com sucesso!');
    });
  });
});
