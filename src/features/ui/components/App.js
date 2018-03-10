import React from 'react'
import Wallet from '../../wallet/components/Wallet'
import Loot from '../../loot/components/Loot'

const App = () => (
  <div>
    <h2>Loot Check</h2>
    <hr />
    <Wallet />
    <hr />
    <Loot />
    <div>Power by <a target='_black' href='https://www.coindesk.com/price' >Coindesk</a> </div>
  </div>
)

export default App