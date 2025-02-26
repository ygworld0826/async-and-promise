const fs = require("fs");

const getDataFromFilePromise = (filePath, callback) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      callback(err, null); // 에러 발생 시, 콜백의 첫 번째 인자에 에러, 두 번째 인자에 null 전달
    } else {
      callback(null, data); // 성공 시, 첫 번째 인자에 null, 두 번째 인자에 데이터 전달
    }
  });
};

// 테스트를 위한 호출 예시 (주석 해제 후 사용 가능)
// getDataFromFilePromise('README.md', (err, data) => {
//   if (err) {
//     console.error("에러:", err);
//   } else {
//     console.log(data);
//   }
// });

module.exports = {
  getDataFromFilePromise
};