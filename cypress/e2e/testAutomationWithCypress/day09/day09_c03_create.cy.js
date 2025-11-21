describe('Create POST', () => {

    const bodyrequest={"name":"Ipek","salary":"3500","age":"33"}

    it('POST Request Test', () => {
        cy.request({
            url: 'https://dummy.restapiexample.com/api/v1/create',
            method: 'POST',
            body :bodyrequest
        }).then(response =>{
            expect(response.body.message).to.eq("Successfully! Record has been added.")
            expect(response.body.data.name).to.eq("Ipek")
            expect(response.body.data.salary).to.eq("3500")
            expect(response.body.data.age).to.eq("33")
            
        })
        
    });
});