import MoneyInput from '../MoneyInput.vue'
import { mount } from 'vue-test-utils'

describe('MoneyInput.vue', () => {

  let wrapper
  let label = 'LABEL'
  let placeholder = 'PLACEHOLDER'
  beforeEach(() => {
    wrapper = mount(MoneyInput,
      { propsData: {label, placeholder } })
  })

  it('shows label', () => {
    expect(wrapper.text()).toContain(label)
  })

  it('uses placeholder', () => {
    expect(wrapper.html()).toContain(placeholder)
  })

  it('emits input changes', () => {
    const input = wrapper.find('input')
    input.element.value = 200
    input.trigger('input')
    expect(wrapper.emitted().input[0]).toEqual(['200'])
  })
})
