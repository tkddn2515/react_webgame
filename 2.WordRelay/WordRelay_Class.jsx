const React = require('react');
const { Component } = React;

class WordRelay extends React.Component {
  state = {
    word: '제로초',
    value: '',
    result: ''
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    if(this.state.word[this.state.word.length - 1] === this.state.value[0]) {
      this.setState((prev) =>{
        return {
          word: prev.value,
          value: '',
          result: '정답~'
        }
      })
    }else{
      this.setState({
        result: '땡',
        value: '',
      })
    }
    this.input.focus();
  };

  onChangeInput = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  input;
  onRefInput = (c) => {this.input = c;}

  render() {
    return (
      <>
        <div>{this.state.word}</div>
        <form onSubmit={this.onSubmitForm}>
          <input ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput}/>
          <button>입력</button>
        </form>
        <div>{this.state.result}</div>
      </>
    )
  }
}

module.exports = WordRelay;