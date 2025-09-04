import { useState, useEffect } from 'react';
import ApiService from '../services/api';

// Custom hook for API calls with loading and error states
export const useApi = (apiCall, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await apiCall();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, dependencies);

  return { data, loading, error, refetch: () => fetchData() };
};

// Specific hooks for different data types
export const useBodyRecords = () => {
  return useApi(() => ApiService.getBodyRecords());
};

export const useExerciseRecords = () => {
  return useApi(() => ApiService.getExerciseRecords());
};

export const useMealRecords = () => {
  return useApi(() => ApiService.getMealRecords());
};

export const useDiaryEntries = () => {
  return useApi(() => ApiService.getDiaryEntries());
};

export const useHealthArticles = () => {
  return useApi(() => ApiService.getHealthArticles());
};

export const useRecommendedArticles = () => {
  return useApi(() => ApiService.getRecommendedArticles());
};
