const React = require('react');
const { useState, useRef } = React;
// class Gugudan extends React.Component {
//   state = {
//     first: Math.ceil(Math.random() * 9),
//     second: Math.ceil(Math.random() * 9),
//     value: '',
//     result: ''
//   }

//   onSubmit = (e) => {
//     e.preventDefault();
//     if(Number(this.state.value) === this.state.first * this.state.second) {
//       this.setState((prev) => {
//         return {
//           result: `정답, ${this.state.value}`,
//           first: Math.ceil(Math.random() * 9),
//           second: Math.ceil(Math.random() * 9),
//           value: '',
//         }
//       })
//     }else {
//       this.setState({
//         result: '땡',
//         value: ''
//       })
//     }
//     input.focus();
//   }

//   onChange = (v) => {
//     this.setState({
//       value: v.target.value
//     });
//   };

//   input;
//   onInputRef = (c) => {input = c;}

//   render() {
//     return(
//       <React.Fragment>
//         <div>{this.state.first} 곱하기 {this.state.second}는?</div>
//         <form onSubmit={this.onSubmit}>
//           <input ref={this.onInputRef} onChange={this.onChange} value={this.state.value} type='number' />
//           <button>입력</button>
//         </form>
//         <div>{this.state.result}</div>
//       </React.Fragment>
//     )
//   }
// }

const Gugudan = () => {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
const [value, setValue] = useState('');
const [result, setResult] = useState('');
const inputRef = useRef(null);


 const onSubmitForm = (e) => {
  e.preventDefault();
  if (parseInt(value) === first * second) {
    setResult('정답');
    setFirst(Math.ceil(Math.random() * 9));
    setSecond(Math.ceil(Math.random() * 9));
    setValue('');
    inputRef.current.focus();
  } else {
    setResult('땡');
    setValue('');
    inputRef.current.focus();
  }
};

  return (
    <>
      <div>{first} 곱하기 {second}는?</div>
      <form onSubmit={onSubmitForm}>
        <input 
        ref={inputRef} 
        type="number"  
        onChange={(e) => setValue(e.target.value)} 
        value={value} 
        />
        <button type='submit'>입력</button>
      </form>
      <div>{result}</div>
    </>
  )
}

module.exports = Gugudan;