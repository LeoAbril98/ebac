describe("Testes de Crud Contatos", () => {
    beforeEach(() => {
        cy.visit("https://agenda-contatos-react.vercel.app/");
    });

    it("deve testar o montagem da App", () => {
        cy.get("header > h1").should("have.length.greaterThan", 0);
        cy.get("form > input").should("have.length", 3);
    });

    it("deve incluir um novo contato", () => {
        cy.get('[type="text"]').type("Leonardo Abril");
        cy.get('[type="email"]').type("leoabril@mail.com");
        cy.get('[type="tel"]').type("41 99000 1234");
        cy.get(".adicionar").click();
    });

    it("deve ativar modo de edição", () => {
        cy.get(":nth-child(2) > .sc-gueYoa > .edit").click();
        cy.get('[type="text"]').should("have.length.greaterThan", 0);
    });

    it("deve alterar o primeiro contato selecionado", () => {
        cy.get(".edit").first().click();

        //Altera nome
        cy.get('[type="text"]').clear();
        cy.get('[type="text"]').type("Leonardo Abril Oliveira");
        //Altera mail
        cy.get('[type="email"]').clear();
        cy.get('[type="email"]').type("leonardoabril@mailer.com");
        //Altera telefone
        cy.get('[type="tel"]').clear();
        cy.get('[type="tel"]').type("41 91000 1234");
        //Salva
        cy.get(".alterar").click();
    });

    it("Deve apagar o ultimo contato", () => {
        cy.get(".delete").last().click();
    });
});
