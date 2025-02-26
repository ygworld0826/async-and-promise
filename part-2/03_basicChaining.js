const newsURL = 'http://localhost:4999/data/latest';
const weatherURL = 'http://localhost:4999/data/weather';

function getNewsAndWeather() {
  return fetch(newsURL)
    .then(newsResponse => {
      if (!newsResponse.ok) {
        throw new Error('뉴스 가져오기 실패');
      }
      return newsResponse.json();
    })
    .then(newsData => {
      return fetch(weatherURL)
        .then(weatherResponse => {
          if (!weatherResponse.ok) {
            throw new Error('날씨 가져오기 실패');
          }
          return weatherResponse.json();
        })
        .then(weatherData => {
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
