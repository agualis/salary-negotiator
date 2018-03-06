import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const initialState = {
  maxOfferedSalary: null,
  minExpectedSalary: null
}

export const SUBMIT_MAX_OFFERED_SALARY = 'submitMaxOfferedSalary'
export const SUBMIT_MIN_EXPECTED_SALARY = 'submitMinExpectedSalary'

export function submitMaxOfferedSalary (state, quantity) {
  state.maxOfferedSalary = quantity
}

export function submitMinExpectedSalary (state, quantity) {
  state.minExpectedSalary = quantity
}

export const mutations = {
  [SUBMIT_MAX_OFFERED_SALARY]: submitMaxOfferedSalary,
  [SUBMIT_MIN_EXPECTED_SALARY]: submitMinExpectedSalary
}

export const store = new Vuex.Store({
  state: initialState,
  mutations
})
