describe('Dummy Assertion', () => {
    /*
        {
          "id": 4,
          "employee_name": "Cedric Kelly",
          "employee_salary": "433060",
          "employee_age": "22",
          "profile_image": ""
          }
            */
    
        it('Dummy Assert', () => {
            cy.request('https://dummy.restapiexample.com/api/v1/employees').should((response => {
                assert.equal(response.body.data[3].id,4)
                assert.equal(response.body.data[3].employee_age,22)
                assert.equal(response.body.data[3].employee_name,'Cedric Kelly')
            }))
        });
    });