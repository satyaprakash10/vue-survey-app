import { defineStore } from 'pinia'
import Ls from '../../../services/ls'
import { useSurveyStore } from './survey'

export const useUserSurveyStore = defineStore({
  id: 'userSurveys',

  state: () => ({
    currentSurvey: JSON.parse(Ls.get('currentSurvey')),
  }),

  actions: {
    fetchUserSurvey(id) {
      const surveyStore = useSurveyStore()
      const survey = surveyStore.surveys.find(
        (survey) => survey.survey_id === id
      )
      Ls.set('currentSurvey', JSON.stringify(survey))
    },
  },
})
