import { shallow } from 'vue-test-utils'
import Vue from 'vue'
import VeeValidate from 'vee-validate'
import App from './App'

Vue.use(VeeValidate)

describe('App', () => {
  // fails because async promise
  it('sets some text', () => { 
    const wrapper = shallow(App)

    return new Promise((res, rej) => {
    res(wrapper.find('button').trigger('click'))
    })
    .then(() => {
      expect(wrapper.vm.msg).toBe('testing')
    })
  })

  // can force it to pass by setTimout for 1ms
  it('sets some text', () => { 
    const wrapper = shallow(App)

    wrapper.find('button').trigger('click')

    setTimeout(() => {
      expect(wrapper.vm.msg).toBe('testing')
    }, 1)
  })

  // can force it to pass by setTimout and done
  it('sets some text', (done) => { 
    const wrapper = shallow(App)

    wrapper.find('button').trigger('click')

    setTimeout(() => {
      expect(wrapper.vm.msg).toBe('testing')
      done()
    })
  })
})
