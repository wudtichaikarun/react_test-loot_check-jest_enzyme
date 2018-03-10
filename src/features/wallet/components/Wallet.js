import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deposit, withdraw } from '../actions'

export class Wallet extends Component {
  constructor() {
    super()

    this.state = { balance: undefined }
  }

  updateBalance = event => {
    // parseInt param_1=sting you want to convert param_2=base number 
    this.setState({ balance: parseInt(event.target.value, 10) })
  }

  deposit = () => this.props.deposit(this.state.balance)

  withdraw = () => this.props.withdraw(this.state.balance)

  render() {
    return(
      <div>
        <h3 className='balance'>Wallet balance: {this.props.balance}</h3>
        <br />
        <input className='input-wallet' onChange={this.updateBalance} />
        <button className='btn-deposit' onClick={this.deposit}>Deposit</button>
        <button className='btn-withdraw' onClick={this.withdraw}>Withdraw</button>
      </div>
    )
  }
}

export default connect(
  // map state to props
  state => ({
    balance: state.balance
  }),
  // map dispatch to props
  { 
    deposit,
    withdraw 
  }
)(Wallet)