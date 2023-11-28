
describe('TutorialsNinja', () => {
  beforeEach(() => {
    cy.login('maxmonthon6@gmail.com', 'Aa112233');
    //setting command foder | support > e2e.js
  });
  //เปลื่ยนทุกครั้งที่รัน maxmonthon3@gmail.com
  it('Register', () => {
    cy.visit('https://tutorialsninja.com/demo/index.php?route=account/register')
    cy.wait(2000)
    cy.get('#input-firstname').type("max")
    cy.get('#input-lastname').type("monthon")
    cy.get('#input-email').type("maxmonthon6@gmail.com")
    cy.get('#input-telephone').type("09999999999")
    cy.get('#input-password').type("Aa112233")
    cy.get('#input-confirm').type("Aa112233")
    cy.get('[type="checkbox"]').click({ focus })
    cy.get('.pull-right > .btn').click()
    cy.get('#content > h1').should('have.text', 'Your Account Has Been Created!')
    cy.get('.pull-right > .btn').click()
  })
  it('Home Page', () => {

    cy.visit('https://tutorialsninja.com/demo/index.php?route=common/home');
    cy.get('.nav.navbar-nav').contains('Desktops').should('exist');
    cy.get('.nav.navbar-nav').contains('Laptops & Notebooks').should('exist');
    cy.get('.nav.navbar-nav').contains('Components').should('exist');
    cy.get('.nav.navbar-nav').contains('Tablets').should('exist');
    cy.get('.nav.navbar-nav').contains('Software').should('exist');
    cy.viewport('iphone-6')
    cy.visit('https://tutorialsninja.com/demo/index.php?route=common/home')
    cy.viewport('macbook-15');
    cy.visit('https://tutorialsninja.com/demo/index.php?route=common/home');
    cy.get('h3').should('have.text', 'Featured');


  });

  it('Search Functionality', () => {

    cy.visit('https://tutorialsninja.com/demo/index.php?route=common/home');
    cy.get('.form-control').type("Maxmonthon").clear()
    cy.get('.form-control').type("Macbook")
    cy.get('.input-group-btn > .btn').click()
    cy.get("#content > div:nth-child(8) > div:nth-child(2) > div > div:nth-child(2) > div.button-group > button:nth-child(1)").click({ focus })
    cy.get(':nth-child(1) > .product-thumb > .image > a > .img-responsive').click({ focus })

  });
  it('Product Detail', () => {
    cy.visit('https://tutorialsninja.com/demo/index.php?route=product/product&product_id=43');
    cy.get("#content > div > div.col-sm-4 > div.btn-group > button:nth-child(1)").click()
    cy.get('.alert').invoke('text').then((actualText) => {
      cy.log(`Actual Text: ${actualText}`);
    });
    cy.get('#input-quantity').clear().type('2')
    cy.get('#button-cart').click()
    cy.get('#cart > .btn').click()
    cy.get('[href="https://tutorialsninja.com/demo/index.php?route=checkout/cart"] > strong').click()
    cy.wait(1000)
    cy.go('back')
  });
  it('Cart Functionality', () => {
    cy.visit('https://tutorialsninja.com/demo/index.php?route=checkout/cart');
    cy.get(':nth-child(1) > :nth-child(4) > .input-group > .form-control').clear().type("1")
    cy.get(':nth-child(1) > :nth-child(4) > .input-group > .input-group-btn > .btn-primary').click()
    cy.get('.alert').contains('Success: You have modified your shopping cart!').should('exist');
    //ปุ่ม remove
    cy.get(':nth-child(2) > :nth-child(4) > .input-group > .input-group-btn > .btn-danger').click()
    cy.get(':nth-child(1) > .panel-heading > .panel-title > .accordion-toggle > .fa').click({ focus })
    cy.get('#input-coupon').type("coupon2023giveme{enter}")
    cy.get('#button-coupon').click()
    cy.get('.alert').invoke('text').then((actualText) => {
      cy.log(`Actual Text: ${actualText}`);
    });


  });
  it('Checkout Payment Page', () => {
    cy.visit('https://tutorialsninja.com/demo/index.php?route=checkout/checkout');
    cy.wait(3000)
    cy.get('#button-payment-address').click()
    cy.get('#input-payment-firstname').type("maxmonthon")
    cy.get('#input-payment-lastname').type("allsome")
    cy.get('#input-payment-company').type("areatech")
    cy.get('#input-payment-address-1').type("118/88 ")
    cy.get('#input-payment-city').type("bangkok")
    cy.get('#input-payment-postcode').type("Aa11")
    cy.get('#input-payment-country').type("Thai")
    cy.get('#input-payment-zone').select("Conwy")
    cy.get('#button-payment-address').click({ focus })
    cy.get(':nth-child(3) > .form-control').type("chunked")
    cy.get('[type="checkbox"]').click({focus})
    cy.get('#button-payment-method').click({ focus })
  });
});