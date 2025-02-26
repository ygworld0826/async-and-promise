const newsURL = 'http://localhost:4999/data/latest';
const weatherURL = 'http://localhost:4999/data/weather';

function getNewsAndWeatherAll() {
  return Promise.all([
    fetch(newsURL)
      .then(response => {
        if (!response.ok) {
          throw new Error('뉴스 데이터를 가져오는 데 실패했습니다.');
        }
        return response.json();
      }),

    fetch(weatherURL)
      .then(response => {
        if (!response.ok) {
          throw new Error('날씨 데이터를 가져오는 데 실패했습니다.');
        }
        return response.json();
      })
  ])
    .then(([newsData, weatherData]) => {
      return {
        news: newsData,
        weather: weatherData
      };
    })
    .catch(error => {
      console.error('에러 발생:', error);
      throw error;
    });
}

// ✅ Node.js 환경에서도 실행 가능하도록 export 설정
if (typeof window === 'undefined') {
  module.exports = { getNewsAndWeatherAll };
}
