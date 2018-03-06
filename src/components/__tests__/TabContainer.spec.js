import { cloneProductionStore } from '../../vuex/utils'
import TabContainer from '../TabContainer.vue'
import { mount } from 'vue-test-utils'

describe('TabContainer.vue', () => {

  let wrapper
  let modalShowSpy = jest.fn()
  beforeEach(() => {
    wrapper = mount(TabContainer, {store: cloneProductionStore()})
    wrapper.vm.$modal = { show: modalShowSpy}
  })

  afterEach(() => {
    modalShowSpy.mockReset()
  })

  it('does not show modal when employee did not submit quantity', () => {
    wrapper.vm.onEmployerSubmit(100)
    expect(modalShowSpy).not.toHaveBeenCalled()
  })

  it('does not show modal when employer did not submit quantity', () => {
    wrapper.vm.onEmployeeSubmit(300)
    expect(modalShowSpy).not.toHaveBeenCalled()
  })

  it('shows modal when SUCCESS', () => {
    wrapper.vm.onEmployerSubmit(200)
    wrapper.vm.onEmployeeSubmit(200)
    expect(modalShowSpy).toHaveBeenCalledWith('dialog', expect.objectContaining({title: 'SUCCESS!'}))
  })

  it('shows modal when FAILURE', () => {
    wrapper.vm.onEmployerSubmit(200)
    wrapper.vm.onEmployeeSubmit(300)
    expect(modalShowSpy).toHaveBeenCalledWith('dialog', expect.objectContaining({title: 'FAILURE!'}))
  })
})
