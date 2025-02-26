const newsURL = 'http://localhost:4999/data/latest';
const weatherURL = 'http://localhost:4999/data/weather';

async function getNewsAndWeatherAsync() {
  try {
    // 두 개의 API 요청을 병렬로 실행
    const [newsResponse, weatherResponse] = await Promise.all([
      fetch(newsURL),
      fetch(weatherURL)
    ]);

    // 응답이 정상인지 확인
    if (!newsResponse.ok) {
      throw new Error('뉴스 데이터를 가져오는 데 실패했습니다.');
    }
    if (!weatherResponse.ok) {
      throw new Error('날씨 데이터를 가져오는 데 실패했습니다.');
    }

    // JSON 변환도 병렬 처리
    const [newsData, weatherData] = await Promise.all([
      newsResponse.json(),
      weatherResponse.json()
    ]);

    // 최종 객체 반환
    return {
      news: newsData,
      weather: weatherData
    };
  } catch (error) {
    console.error('에러 발생:', error);
    throw error;
  }
}

// ✅ Node.js 환경에서도 실행 가능하도록 내보내기
if (typeof window === 'undefined') {
  module.exports = { getNewsAndWeatherAsync };
}
