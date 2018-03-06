import SalarySubmitTab from '../SalarySubmitTab.vue'
import { mount } from 'vue-test-utils'

describe('SalarySubmitTab.vue', () => {

  let wrapper
  let onSubmitSpy = jest.fn()
  let label = 'LABEL'
  beforeEach(() => {
    wrapper = mount(SalarySubmitTab,
      { propsData: {label, onSubmit: onSubmitSpy } })
  })

  it('shows label', () => {
    expect(wrapper.text().includes(label)).toBeTruthy()
  })

  describe('When submitting a quantity', ()=> {

    beforeEach(() => {
      const input = wrapper.find('input')
      input.element.value = 200
      input.trigger('input')
      const button = wrapper.find('button')
      button.trigger('click')
    })

    it('hides input after submit', async () => {
      expect(wrapper.text().includes(label)).toBeFalsy()
    })

    it('calls onSubmit', async () => {
      expect(onSubmitSpy).toHaveBeenCalledWith("200")
    })
  })
})
