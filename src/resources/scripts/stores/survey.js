import { defineStore } from 'pinia'

export const useSurveyStore = defineStore({
  id: 'surveys',

  state: () => ({
    surveys: [],
    totalSurveys: 0,
    currentSurvey: null,
    selectedSurveys: [],
    // surveyData: {
    //   survey_id: '',
    //   survey_name: '',
    //   questions: [
    //     {
    //       question_id: '',
    //       question: '',

    //       options: [
    //         {
    //           option_id: '',
    //           option_text: '',
    //         },
    //       ],
    //     },
    //   ],
    // },
  }),

  getters: {
    getSurveys: (state) => state.surveys,
  },

  actions: {
    resetSurveyData() {
      this.surveyData = {
        id: '',
        survey_name: '',
        questions: [
          {
            question_id: '',
            question: '',

            options: [
              {
                option_id: '',
                option_text: '',
              },
            ],
          },
        ],
      }
    },

    fetchAllSurveys() {
      return new Promise((resolve, reject) => {
        'allSurveys'
      })
    },

    // fetchSurveys() {
    //   //   console.log('fetch surveys =>', )
    //   return new Promise((resolve, reject) => {
    //     this.surveys = response.data
    //     this.totalSurveys = response.data.meta.total
    //     resolve(response).catch((err) => {
    //       reject(err)
    //     })
    //   })
    // },

    fetchSurvey(id) {
      console.log(' survey id =>', id)
      return new Promise((resolve, reject) => {
        this.surveyData = response.data
        resolve(response).catch((err) => {
          reject(err)
        })
      })
    },

    addSurvey(data) {
      return new Promise((resolve, reject) => {
        this.surveys.push(data)

        // resolve(response).catch((err) => {
        //   reject(err)
        // })
      })
    },

    updateSurvey(data) {
      return new Promise((resolve, reject) => {
        if (data) {
          let pos = this.surveys.findIndex(
            (survey) => survey.id === response.data.data.id
          )
          this.surveys[pos] = response.data.data
        }
        resolve(response).catch((err) => {
          reject(err)
        })
      })
    },

    deleteSurvey(id) {
      return new Promise((resolve, reject) => {
        let index = this.surveys.findIndex((survey) => survey.id === id)
        this.surveys.splice(index, 1)

        resolve(response).catch((err) => {
          reject(err)
        })
      })
    },

    deleteMultipleSurveys() {
      return new Promise((resolve, reject) => {
        this.selectedSurveys.forEach((survey) => {
          let index = this.surveys.findIndex(
            (_survey) => _survey.id === survey.id
          )
          this.surveys.splice(index, 1)
          resolve(response).catch((err) => {
            reject(err)
          })
        })
      })
    },
  },

  mutations: {
    addSurvey(state, data) {
      if (data) {
        state.surveys.push(data)
        if (state.surveys) {
          window.localStorage.setItem('surveys', JSON.stringify(state.surveys))
        }
      }
    },

    allSurvey(state) {
      const allSurvey = window.localStorage.getItem('surveys')
      state.surveys = JSON.parse(allSurvey)
    },
  },
})
