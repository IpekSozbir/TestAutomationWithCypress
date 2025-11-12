describe('JSON Object', () => {

    it('Json Key Value', () => {
        cy.visit('https://www.google.com')

        const simpleObject= {"key1": "deger1", "key2" : "deger2", "key3" : "deger3"}

        console.log(simpleObject.key2) // console.log() komutu herhangi bir seyi konsola yazdirmak istedigimizde kullanacagimiz komut
        console.log(simpleObject["key3"])

        const ArrayDegerler = ["Efe","Ece","Ege"]
        console.log(ArrayDegerler[2]) // indexle yazdirdik

        const ArrayDegerler2 = [{"e1": "Efe", "e2" : "Ege"},{"k1" : "Ece", "k2" : "Ela"}]
        console.log(ArrayDegerler2[0].e1)

        const body = {
            "student" : [{
                "firstname" : "Ipek",
                "lastname" : "Sozbir"},
             {
                "firstname" : "Volga",
                "lastname" : "Sozbir",
            }]
        }

        console.log(body.student[1].firstname)
        


    });
});