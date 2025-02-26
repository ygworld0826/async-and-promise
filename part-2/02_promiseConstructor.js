const fs = require("fs");

const getDataFromFilePromise = filePath => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err); // 에러 발생 시 Promise가 reject 상태로 전환, .catch()로 처리
      } else {
        resolve(data); // 파일 내용 성공적으로 읽으면 resolve로 데이터 반환, .then()으로 처리
      }
    });
  });
};

// 테스트를 위한 호출 (주석 해제 후 사용 가능)
// getDataFromFilePromise('README.md').then(data => console.log(data)).catch(err => console.error("에러:", err));

module.exports = {
  getDataFromFilePromise
};