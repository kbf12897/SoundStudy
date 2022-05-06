'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
        profileImg: 'https://miro.medium.com/max/1200/1*mEcB3cHqi0R4G1nnMKvUqQ.jpeg'
      },
      {
        email: 'user1@user.io',
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync('password2'),
        profileImg: 'https://static.wikia.nocookie.net/cowboybebop/images/7/73/Screen_Shot_2013-12-11_at_12.52.29_PM.png/revision/latest/top-crop/width/360/height/450?cb=20140404054920',
      },
      {
        email: 'user2@user.io',
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync('password3'),
        profileImg: 'https://cdn.vox-cdn.com/thumbor/TjSv6GUYVKeXAnmb1ltpvmh600E=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23024343/CBP_e001_0239_0003.jpg',
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
