// Write your JS code here
import {Component} from 'react'

import './index.css'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptocurrenciesList from '../CryptocurrenciesList'

class CryptocurrencyTracker extends Component {
  state = {list: [], noData: true}

  componentDidMount() {
    this.getDataFromApiCall()
  }
  getDataFromApiCall = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const formattedData = data.map(each => ({
      id: each.id,
      currencyLogo: each.currency_logo,
      currencyName: each.currency_name,
      euroValue: each.euro_value,
      usdValue: each.usd_value,
    }))
    this.setState({list: formattedData, noData: false})
  }
  render() {
    const {list, noData} = this.state
    return (
      <div className="app_container">
        {noData ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#bfbfbf" height={50} width={50} />
          </div>
        ) : (
          <CryptocurrenciesList listData={list} />
        )}
      </div>
    )
  }
}
export default CryptocurrencyTracker
