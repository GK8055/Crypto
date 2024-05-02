import './index.css'

import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  render() {
    const {listData} = this.props
    return (
      <div className="list_body_container">
        <div className="image_text_container">
          <h1 className="heading">Cryptocurrency Tracker</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
            alt="cryptocurrency"
            className="image_size"
          />
        </div>
        <div className="bottom_container">
          <div className="header_container">
            <h1 className="header_style">Coin Type</h1>
            <div className="coin_container">
              <h1 className="header_style">USD</h1>
              <h1 className="header_style">EURO</h1>
            </div>
          </div>
          <ul className="list_container">
            {listData.map(each => (
              <CryptocurrencyItem eachItem={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
