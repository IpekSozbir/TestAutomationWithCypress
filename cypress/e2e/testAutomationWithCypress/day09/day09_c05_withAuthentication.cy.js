describe('Test with Authentication', () => {

    /*
  {
  "firstname": "John",
  "lastname": "Smith",
  "totalprice": 111,
  "depositpaid": true,
  "bookingdates": {
    "checkin": "2018-01-01",
    "checkout": "2019-01-01"
  },
  "additionalneeds": "Breakfast"
}
    */

    it('Test01 - GET', () => {
        cy.request({
            url: 'https://restful-booker.herokuapp.com/booking/149',
            method: 'GET',
            auth: {
                "username" : "admin",
                "password" : "password123"
            },
            token: 'abc123'
        }).then(response => {
            expect(response.body.lastname).to.equal("Smith")
        })
    });

    it('Test02 - POST and Assert', () => {
        cy.request({
            url: 'https://restful-booker.herokuapp.com/booking',
            method: 'POST',
            auth: {
                "username" : "admin",
                "password" : "password123"
            },
            token: 'abc123',
            body: {
                "firstname": "Ipek",
                "lastname": "Sozbir",
                "totalprice": 111,
                "depositpaid": true,
                "bookingdates": {
                  "checkin": "2026-01-01",
                  "checkout": "2026-01-10"
                },
                "additionalneeds": "Breakfast"
              }
        }).then(response => {
            expect(response.body.booking.firstname).to.equal("Ipek")
            expect(response.body.booking.lastname).to.equal("Sozbir")
            expect(response.body.booking.bookingdates.checkin).to.equal("2026-01-01")
            expect(response.body.booking.depositpaid).to.equal(true)
        })
    });
});