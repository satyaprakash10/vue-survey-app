import { defineStore } from 'pinia'
import Ls from '../../../services/ls'
import { useSurveyStore } from './survey'

export const useUserSurveyStore = defineStore({
  id: 'userSurveys',

  state: () => ({
    totalUserSurveys: 0,
    currentSurvey: JSON.parse(Ls.get('currentSurvey')),
    userSpecificSurveys: [],
  }),

  actions: {
    fetchUserSurvey(id) {
      const surveyStore = useSurveyStore()
      // this.totalUserSurveys = response.length
      // console.log('total totalUserSurveys =>', this.totalUserSurveys)
      const survey = surveyStore.surveys.find(
        (survey) => survey.survey_id === id
      )
      Ls.set('currentSurvey', JSON.stringify(survey))
    },

    fetchUserSpecificSurvey() {
      this.userSpecificSurveys = JSON.parse(Ls.get('userSpecificSurveys'))
    },

    submitUserSpecificSurvey(data) {
      if (data) {
        this.userSpecificSurveys.push(data)
        Ls.set('userSpecificSurveys', JSON.stringify(this.userSpecificSurveys))
      }
    },
  },
})
