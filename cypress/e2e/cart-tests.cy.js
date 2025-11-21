describe('TESTES PARA FEATURE "CARRINHO"', () => {

  beforeEach(() =>
  {
    cy.openWebSite()
    cy.addItemToShopCart()
  })

  it('1.1 - Acessando Carrinho por Botão "Mini Cart"', () => 
  {
    cy.goShopCartByMiniCart()
    cy.validateShopCartPage()
  })

  it('1.2 - Acessando Carrinho por Botão "Ver Carrinho"', () => 
  {
    cy.goShopCartByLookCart()
    cy.validateShopCartPage()
  })

  it('1.3 - Validando aumento da quantidade de itens e total"', () => 
  {
    cy.goShopCartByLookCart()
    cy.addItemQuantity()
  })

  it('1.4 - Validando aplicar cupom de desconto "desconto10"', () => 
  {
    cy.goShopCartByLookCart()
    cy.applyCoupon()
  })

  it('1.5 - Validando aumento da quantidade de itens com cupom de desconto', () => 
  {
    cy.goShopCartByLookCart()
    cy.applyCoupon()
    cy.addItemQuantity()
  })

  it('1.6 - Validando tentar aplicar mais de um cupom de desconto', () => 
  {
    cy.goShopCartByLookCart()
    cy.applyCoupon()
    cy.tryApplyTwoCoupons()
  })

  it('1.7 - Validando adicionar cupom invalido', () => 
  {
    cy.goShopCartByLookCart()
    cy.tryApplyInvalidCoupon()
  })
  
  it('1.8 - Validando remover cupom e atualização do total', () => 
  {
    cy.goShopCartByLookCart()
    cy.applyCoupon()
    cy.removeCoupon()
  })

  it('1.9 - Validando remover item por Botão "Menos" da quantidade', () => 
  {
    cy.goShopCartByLookCart()
    cy.removeItemByMinusButton()
  })

  it('2.0 - Validando remover item por Botão "Remove"', () => 
  {
    cy.goShopCartByLookCart()
    cy.removeItemByRemoveButton()
  })

  it('2.1 - Validando Botão "Desfazer"', () => 
  {
    cy.goShopCartByLookCart()
    cy.removeItemByRemoveButton()
    cy.restoreItem()
  })

  it('2.2 - Validando Botão "Concluir Compra"', () => 
  {
    cy.goShopCartByLookCart()
    cy.goToCheckout()
  })

})