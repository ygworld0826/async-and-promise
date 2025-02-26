const newsURL = 'http://localhost:4999/data/latest';
const weatherURL = 'http://localhost:4999/data/weather';

function getNewsAndWeather() {
  return fetch(newsURL)
    .then(newsResponse => {
      if (!newsResponse.ok) {
        throw new Error('뉴스 데이터를 가져오는 데 실패했습니다.');
      }
      return newsResponse.json();
    })
    .then(newsData => {
      // 첫 번째 `fetch()`가 성공하면 두 번째 `fetch()` 실행
      return fetch(weatherURL)
        .then(weatherResponse => {
          if (!weatherResponse.ok) {
            throw new Error('날씨 데이터를 가져오는 데 실패했습니다.');
          }
          return weatherResponse.json();
        })
        .then(weatherData => {
          // 두 개의 데이터를 합쳐서 반환
          return {
            news: newsData,
            weather: weatherData
          };
        });
    })
    .catch(error => {
      console.error('에러 발생:', error);
      throw error;
    });
}

// ✅ Node.js 환경에서 테스트 가능하도록 내보내기
if (typeof window === 'undefined') {
  module.exports = { getNewsAndWeather };
}
