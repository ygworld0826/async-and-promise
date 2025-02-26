const path = require('path');
const { getDataFromFilePromise } = require('./02_promiseConstructor');

const user1Path = path.join(__dirname, 'files/user1.json');
const user2Path = path.join(__dirname, 'files/user2.json');

const readAllUsers = () => {
  return Promise.all([
    getDataFromFilePromise(user1Path),
    getDataFromFilePromise(user2Path)
  ])
    .then(([user1Data, user2Data]) => {
      return {
        user1: JSON.parse(user1Data),
        user2: JSON.parse(user2Data)
      };
    });
};

// 테스트 호출 (주석 해제 후 사용 가능)
// readAllUsers().then(result => console.log(result)).catch(err => console.error("에러:", err));

module.exports = {
  readAllUsers
};
