import { defineStore } from 'pinia'
import Ls from '../../../services/ls'

export const useUserSurveyStore = defineStore({
  id: 'userSurveys',

  state: () => ({
    userSurvey: [],
    survey_id: '',
  }),

  actions: {
    fetchAllUserSurveys() {
      this.surveys = JSON.parse(Ls.get('surveys'))
    },

    fetchUserSurvey(id) {
      console.log(id)
      const survey = this.surveys.find((survey) => survey.survey_id === id)
      console.log(survey)
      this.currentSurvey = survey
    },

    submitUserSurvey(data) {
      this.userSurvey.push(data)
      Ls.set('surveys', JSON.stringify(this.userSurvey))
    },

    updateUserSurvey(data) {
      let pos = this.surveys.findIndex((survey) => survey.id === data.id)
      this.surveys[pos] = data
      Ls.set('surveys', JSON.stringify(this.surveys))
    },

    deleteUserSurvey(id) {
      let index = this.surveys.findIndex((survey) => survey.survey_id === id)
      this.surveys.splice(index, 1)
      Ls.set('surveys', JSON.stringify(this.surveys))
    },
  },
})
