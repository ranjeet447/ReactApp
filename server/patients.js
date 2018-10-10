var faker = require('faker')
var fs = require('fs');
function generatePatients () {
  var patients = []
  for (var id = 1; id <= 50; id++) {
    var name = faker.name.firstName() +" " + faker.name.lastName()
    var email = faker.internet.email()
    var phone = faker.phone.phoneNumber()
    patients.push({
      "id": id,
      "name": name,
      "email": email,
      "phone":phone
    })
  }
  return { "patients": patients }
}
var data=generatePatients();
fs.writeFile('db.json', JSON.stringify(data), function(err) {
    if (err) throw err;
    console.log('Patients\'s data saved!');
});
module.exports = generatePatients