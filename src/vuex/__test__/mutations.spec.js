import { submitMaxOfferedSalary, submitMinExpectedSalary } from '../store'

describe('Vuex mutations', () => {

  let state
  beforeEach(() => {
    state = {
      maxOfferedSalary: null,
      minExpectedSalary: null
    }
  })

  it('submitMaxOfferedSalary', () => {
    submitMaxOfferedSalary(state, 5000)

    expect(state).toEqual({maxOfferedSalary: 5000, minExpectedSalary: null})
  })

  it('submitMinExpectedSalary', () => {
    submitMinExpectedSalary(state, 7000)

    expect(state).toEqual({maxOfferedSalary: null, minExpectedSalary: 7000})
  })
})
