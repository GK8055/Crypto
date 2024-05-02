// Write your JS code here
import './index.css'

import {Component} from 'react'

class CryptocurrencyItem extends Component {
  render() {
    const {eachItem} = this.props
    const {currencyName, currencyLogo, euroValue, usdValue} = eachItem

    return (
      <li className="header_container">
        <img src={currencyLogo} alt={currencyName} className="coin_size" />
        <div className="coin_container">
          <p className="text">{usdValue}</p>
          <p className="text">{euroValue}</p>
        </div>
      </li>
    )
  }
}
export default CryptocurrencyItem
