export class methods {

    static openWebSite()
    {
        cy.fixture('url.json').then((site) => {
            cy.visit(site.url)
        })
    }

    static click(elements)
    {
        cy.get(elements).wait(100).click()
    }

    static check(elements)
    {
        cy.get(elements).should('exist')
    }

    static type(elements, text)
    {
        cy.get(elements).type(text)
    }

    static checkValue(elements, value)
    {
        cy.get(elements).should('have.value', value)
    }
}
export default methods;