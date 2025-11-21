import methods from "./methods"
import elements from "./elements"

Cypress.Commands.add('openWebSite', () => 
{
    methods.openWebSite()
})

Cypress.Commands.add('addItemToShopCart', () => 
{
    methods.check(elements.btn_SizeXL)
    methods.click(elements.btn_SizeXL)
    methods.check(elements.btn_ColorOrange)
    methods.click(elements.btn_ColorOrange)
    methods.check(elements.btn_AddToCart)
    methods.click(elements.btn_AddToCart)
})

Cypress.Commands.add('goShopCartByMiniCart', () => 
{
    methods.check(elements.btn_MiniCart)
    methods.click(elements.btn_MiniCart)
    methods.check(elements.btn_LookCartMiniCart)
    methods.click(elements.btn_LookCartMiniCart)
})

Cypress.Commands.add('goShopCartByLookCart', () => 
{
    methods.check(elements.btn_LookCart)
    methods.click(elements.btn_LookCart)
})

Cypress.Commands.add('validateShopCartPage', () => 
{
    methods.check(elements.title_PageCart)
    methods.check(elements.product_Thumbnail)
    methods.check(elements.product_Name)
    methods.check(elements.product_Price)
    methods.check(elements.product_Quantity)
    methods.check(elements.product_Total)
    methods.check(elements.btn_Remove)
    methods.check(elements.input_Coupon)
    methods.check(elements.btn_ApplyCoupon)
})

Cypress.Commands.add('addItemQuantity', () => 
{
    methods.check(elements.btn_PlusQuantity)
    methods.click(elements.btn_PlusQuantity)
    methods.checkValue(elements.product_QntValue, 2)
    methods.check(elements.alert_CartUpdate)
})

Cypress.Commands.add('applyCoupon', () =>
{
    methods.check(elements.input_Coupon)
    methods.click(elements.input_Coupon)
    methods.type(elements.input_Coupon, 'desconto10')
    methods.click(elements.btn_ApplyCoupon)
    methods.check(elements.alert_CartUpdate)
    methods.check(elements.couponTotal)
})

Cypress.Commands.add('tryApplyTwoCoupons', () => 
{
    methods.check(elements.input_Coupon)
    methods.click(elements.input_Coupon)
    methods.type(elements.input_Coupon, 'desconto20')
    methods.click(elements.btn_ApplyCoupon)
    methods.check(elements.alert_CartUpdate)

})

Cypress.Commands.add('tryApplyInvalidCoupon', () => 
{
    methods.check(elements.input_Coupon)
    methods.click(elements.input_Coupon)
    methods.type(elements.input_Coupon, 'invalidCoupon')
    methods.click(elements.btn_ApplyCoupon)
    methods.check(elements.alert_CouponInvalid)
})

Cypress.Commands.add('removeCoupon', () => 
{
    methods.check(elements.btn_RemoveCoupon)
    methods.click(elements.btn_RemoveCoupon)
    methods.check(elements.alert_CartUpdate)
})

Cypress.Commands.add('removeItemByMinusButton', () =>
{
    methods.check(elements.btn_MinusQuantity)
    methods.click(elements.btn_MinusQuantity)
    methods.check(elements.alert_CartUpdate)
})

Cypress.Commands.add('removeItemByRemoveButton', () =>
{
    methods.check(elements.btn_Remove)
    methods.click(elements.btn_Remove)
    methods.check(elements.alert_CartUpdate)
})

Cypress.Commands.add('restoreItem', () =>
{
    methods.check(elements.btn_RestoreItem)
    methods.click(elements.btn_RestoreItem)
})

Cypress.Commands.add('goToCheckout', () =>
{
    methods.check(elements.btn_GoToCheckout)
    methods.click(elements.btn_GoToCheckout)
    methods.check(elements.title_PageCheckout)
})

