const { Button, Input } = require('../elements');

class DoctorsPage {
    constructor() {
        this.myProfileButton = new Button('a.link_link__3zEN3', 3);
       
    }

  async openMyProfile() {
      await this.myProfileButton.click();
      
      }
}

module.exports = { DoctorsPage };