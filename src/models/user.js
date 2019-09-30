import moment from 'moment';
import uuid from 'uuid';
import jwt from 'jsonwebtoken';
import config from 'config';

class Auth {
  /**
   * class construction
   * @param {object} data
   */
  constructor() {
    this.users = [
      {
        id: '92547f3f-3840-42c0-b5bc-0847ba907175',
        firstName: 'Olivier',
        lastName: 'Habimana',
        email: 'habimana@gmail.com',
        password:
          '$2a$10$rRXle9pE7AcF13lR6oObcelmOOSpe2iIKiVFVm5YdGs68uR/AM162',
        gender: 'male',
        jobRole: 'consultant',
        department: 'developer',
        address: 'kicukiro',
        isAdmin: true
      }
    ];
  }

  /**
   *
   * @return {object} user object
   */
  create(data) {
    const newUser = {
      id: uuid.v4(),
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      gender: data.gender,
      jobRole: data.jobRole,
      department: data.department,
      address: data.address,
      isAdmin: data.isAdmin
    };
    this.users.push(newUser);
    return newUser;
  }
  /**
   *
   * @param {object} user
   * @return {object} token
   */
  genToken(user) {
    const token = jwt.sign(user, config.get('jwtPrivateKey'));
    return token;
  }
  /**
   * @param {uuid} id
   * @return {object} return object
   */
  findOne(id) {
    return this.users.find(user => user.id === id);
  }
  /**
   * @param {object} email
   * @return {object} return object
   */
  findUser(email) {
    return this.users.find(user => user.email === email);
  }

  /**
   * @params {object} password
   * @return {object} return passowrd
   */
  findPassword(password) {
    return this.users.find(user => user.password === password);
  }
  /**
   * @return {object} return all reflections
   */
  findAll() {
    return this.users;
  }
}

export default new Auth();
