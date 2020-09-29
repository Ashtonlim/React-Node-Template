import React from 'react'
import { Link } from 'react-router-dom'
import data from './data'

const SearchPredictRow = (props) => {
  return (
    <Link
      to={{
        pathname: `/stocks/${encodeURIComponent(props.symbol)}`,
        state: { symbol: props.symbol },
      }}
    >
      <li onClick={props.handleClick}>
        <div className="sb-row ruRow">
          <div className="sb-symbol">{props.symbol}</div>
          <div className="sb-stock-name">{props.name}</div>
        </div>
      </li>
    </Link>
  )
}

class SBAC extends React.Component {
  state = {
    symbol: '',
    displayedStock: '',
    searchPredict: '',
    exchanges: ['NYS', 'NAS', 'ASE', 'BATS', 'PSE'],
  }

  handleSymbol = (e) => {
    let symbol = e.target.value
    if (symbol.length < 6 && !+symbol) {
      this.setState({ symbol, searchPredict: symbol.toUpperCase() })
    }
  }

  handleSubmit = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      this.setState({
        displayedStock: this.state.symbol.toUpperCase(),
        searchPredict: '',
      })
    }
  }

  selectStock = (e) => {
    console.log(e.currentTarget.innerText.split('\n')[0])

    this.setState({
      displayedStock: e.currentTarget.innerText.split('\n')[0],
      searchPredict: '',
    })
  }

  render() {
    return (
      <div className="search-box-grp">
        <div className="input-btn-grp ruRow">
          <input
            className="input-item"
            placeholder="Tsla..."
            name="symbol"
            value={this.state.symbol}
            onChange={this.handleSymbol}
            // onKeyDown={this.handleSubmit}
            autoComplete="off"
          ></input>

          <button className="btn" onClick={this.handleSubmit}>
            Submit
          </button>
        </div>

        <ul id="listOfStocks">
          {this.state.searchPredict &&
            data
              .filter((stock) =>
                stock.symbol.includes(this.state.searchPredict)
              )
              .slice(0, 10)
              .map((stock) => (
                <SearchPredictRow handleClick={this.selectStock} {...stock} />
              ))}
        </ul>
      </div>
    )
  }
}

export default SBAC
