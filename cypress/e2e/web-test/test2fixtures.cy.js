describe('Login using fixture', () => {
    beforeEach(() => {
        cy.visit('')
      })

    it('Success Login', () => {
      cy.fixture('usersSaucedemo.json').then((usersSaucedemo) => {
        const datauser = usersSaucedemo[0];
        cy.loginSaucedemo(datauser.username, datauser.password)
    });

    // it('Success Login using data1', () => {
    //     cy.fixture('usersSaucedemo.json').then((usersSaucedemo) => {
    //       const datauser1 = usersSaucedemo[1];
    //       cy.loginSaucedemo(datauser1.username, datauser1.password)
    //   });

});
})