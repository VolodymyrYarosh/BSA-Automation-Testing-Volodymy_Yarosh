const { AuthPage } = require('./auth.page');
const { DoctorsPage } = require('./doctors.page');
const { UserProfilePage } = require('./user-profile.page')
 
class App {
  constructor() {
    this.authPage = new AuthPage();
    this.doctorsPage = new DoctorsPage();
    this.userProfilePage = new UserProfilePage();
  }
}

module.exports = { App };
