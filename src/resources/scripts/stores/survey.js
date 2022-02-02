import { defineStore } from 'pinia'
import Ls from '../../../services/ls'

export const useSurveyStore = defineStore({
  id: 'surveys',

  state: () => ({
    surveys: [],
    userSurveys: [],
    currentSurvey: null,
  }),

  actions: {
    fetchUserSurveys() {
      this.userSurveys = JSON.parse(Ls.get('userSurveys'))
    },

    fetchAllSurveys() {
      this.surveys = JSON.parse(Ls.get('surveys'))
    },

    fetchSurvey(id) {
      const survey = this.surveys.find((survey) => survey.survey_id === id)
      this.currentSurvey = survey
    },

    addSurvey(data) {
      console.log(data)
      if (data) {
        this.surveys.push(data)
        Ls.set('surveys', JSON.stringify(this.surveys))
      }
    },

    updateSurvey(data) {
      if (data) {
        let pos = this.surveys.findIndex((survey) => survey.id === data.id)
        this.surveys[pos] = data
        Ls.set('surveys', JSON.stringify(this.surveys))
      }
    },

    deleteSurvey(id) {
      let index = this.surveys.findIndex((survey) => survey.survey_id === id)
      this.surveys.splice(index, 1)
      Ls.set('surveys', JSON.stringify(this.surveys))
    },

    submitUserSurvey(data) {
      if (data) {
        this.userSurveys.push(data)
        Ls.set('userSurveys', JSON.stringify(this.userSurveys))
      }
    },
  },
})
