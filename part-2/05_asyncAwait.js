const path = require('path');
const { getDataFromFilePromise } = require('./02_promiseConstructor');

const user1Path = path.join(__dirname, 'files/user1.json');
const user2Path = path.join(__dirname, 'files/user2.json');

const readAllUsersAsyncAwait = async () => {
  try {
    // 파일을 비동기적으로 읽음
    const user1Data = await getDataFromFilePromise(user1Path);
    const user2Data = await getDataFromFilePromise(user2Path);

    // JSON 변환 후 배열로 반환
    return [JSON.parse(user1Data), JSON.parse(user2Data)];
  } catch (error) {
    console.error("에러 발생:", error);
    throw error; // 오류를 호출한 쪽으로 전파
  }
};

// 테스트 호출 (주석 해제 후 사용 가능)
// readAllUsersAsyncAwait().then(result => console.log(result)).catch(err => console.error("에러:", err));

module.exports = {
  readAllUsersAsyncAwait
};
