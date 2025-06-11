// src/hooks/useUsers.js
import { useQuery } from 'react-query';
import { bugsSupport } from '../Api/bugsSupport';
import { surveyFeedback } from '../Api/apiSurvey';

export const useSurvey = (params = {}) => {
  return useQuery({
    queryKey: ['surveyFeedback', params], // this enables caching per set of params
    queryFn: () => surveyFeedback(params),
  });
};
