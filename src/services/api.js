// API service for health app
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

class ApiService {
  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Body records
  async getBodyRecords() {
    return this.request('/body-records');
  }

  async createBodyRecord(data) {
    return this.request('/body-records', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Exercise records
  async getExerciseRecords() {
    return this.request('/exercise-records');
  }

  async createExerciseRecord(data) {
    return this.request('/exercise-records', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Meal records
  async getMealRecords() {
    return this.request('/meal-records');
  }

  async createMealRecord(data) {
    return this.request('/meal-records', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Diary entries
  async getDiaryEntries() {
    return this.request('/diary-entries');
  }

  async createDiaryEntry(data) {
    return this.request('/diary-entries', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Health articles
  async getHealthArticles() {
    return this.request('/health-articles');
  }

  async getRecommendedArticles() {
    return this.request('/health-articles/recommended');
  }
}

export default new ApiService();
