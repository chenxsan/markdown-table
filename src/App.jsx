import { Component } from 'preact';
import './App.css';

export default class App extends Component {
  state = {
    row: 2,
    column: 2
  }
  updateRow = e => {
    this.setState({
      row: e.target.value * 1
    })
  }
  updateColumn = e => {
    this.setState({
      column: e.target.value * 1
    })
  }
  render() {
    let table = []
    let HeaderRow = new Array(this.state.column).fill('Header Cell').join(' | ')
    let SeparatorRow = new Array(this.state.column)
      .fill('-------------')
      .join(' | ')
    let ContentRow = new Array(this.state.column)
      .fill('Content Cell')
      .join(' | ')

    table.push(
      ['| ']
        .concat(HeaderRow)
        .concat([' |'])
        .join('')
    )
    if (this.state.row > 1) {
      table.push(
        ['| ']
          .concat(SeparatorRow)
          .concat([' |'])
          .join('')
      )
    }
    if (this.state.row > 1) {
      for (let i = 0; i < this.state.row - 1; i++) {
        table.push(
          ['| ']
            .concat(ContentRow)
            .concat([' |'])
            .join('')
        )
      }
    }
    return (
      <div>
				<h2>Markdown 表格生成工具</h2>
        <div class='preact-wrapper'>
          <label class='preact-label'>
            <span>行</span><input
              type="number"
							class='preact-input'
              min={1}
              value={this.state.row}
              onInput={this.updateRow}
            />
          </label>
          <label class='preact-label'>
            <span>列</span><input
              type="number"
							class='preact-input'
              min={1}
              value={this.state.column}
              onInput={this.updateColumn}
            />
          </label>
        </div>
        <textarea
          class='preact-textarea'
          value={table.join('\n')}
        />
      </div>
    )
  }
}
