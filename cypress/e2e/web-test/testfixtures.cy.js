describe('Login using fixture', () => {
    beforeEach(() => {
        cy.visit('')
        cy.fixture('usersSaucedemo.json').then((usersSaucedemo) => {
            const datauser = usersSaucedemo;
      })

    //   it('Success Login', () => {
    //     cy.fixture('users.json').then((users) => {
    //       const datauser = users[0];
    //       cy.loginSaucedemo(datauser.username, datauser.password)
    //   });

    it('Success Login User1', () => {
        cy.loginSaucedemo(datauser.username[0], datauser.password[0])
    });

    it('Success Login User2', () => {
        cy.loginSaucedemo(datauser.username[1], datauser.password[1])
    });
});
})