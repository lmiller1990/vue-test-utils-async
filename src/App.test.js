import { shallow, mount } from 'vue-test-utils'
import Vue from 'vue'
import App from './App'


describe('App', () => {
  it('runs', () => {
    const wrapper = shallow(App)

    wrapper.find('somecomponent').trigger('custom')

    expect(wrapper.vm.counter).toBe(1)
  })
})
