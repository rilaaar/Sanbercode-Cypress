describe('Login using fixture', () => {
    beforeEach(() => {
        cy.visit('')
      })

    it('Success Login', () => {
      cy.fixture('usersSaucedemo.json').then((usersSaucedemo) => {
        const datauser = usersSaucedemo[0];
        cy.loginSaucedemo(datauser.username, datauser.password)
        });
    })

    it('Success Login (fixtures)', () => {
      cy.fixture('usersSaucedemo.json').then((usersSaucedemo) => {
        if (usersSaucedemo.length === 0) {
           throw new Error('usersSaucedemo.json is empty.');
        }
         const datauser0 = usersSaucedemo[0];
         cy.loginSaucedemo(datauser0.username, datauser0.password);
      });
    })

  it('Success Login (fixtures)', () => {
    cy.fixture('usersSaucedemo.json').then((usersSaucedemo) => {
      if (usersSaucedemo.length === 0) {
         throw new Error('usersSaucedemo.json is empty.');
      }
       const datauser1 = usersSaucedemo[1];
       cy.loginSaucedemo(datauser1.username, datauser1.password);
    });
  })
})