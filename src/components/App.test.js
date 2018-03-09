import React from 'react'
// setup
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { shallow } from 'enzyme'
// component
import App from './App'

describe('App', () => {
  const app = shallow(<App />)

  it('renders properly', () => {
    expect(app).toMatchSnapshot()
  })

  it('contains a  connected Wallet componrnt', () => {
    // console.log(app.debug())
    expect(app.find('Connect(Wallet)').exists()).toBe(true)
  })

  it('contains a connected Loot component', () => {
    expect(app.find('Connect(Loot)').exists()).toBe(true)
  })
})