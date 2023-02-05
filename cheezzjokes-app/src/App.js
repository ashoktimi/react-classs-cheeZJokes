import React, { Component } from  'react';
import JokeList from './JokeList';

class App extends Component{
  render(){
    return(
      <div>
        <JokeList />
      </div>
    )
  }
}

export default App;


// import React, { Component } from  'react';

// class App extends Component {
//   state = {
//     count: 0,
//   };

//   incrementCount = () => {
//     this.setState(state => ({
//       count: state.count + 1,
//     }));
//   };

//   render() {
//     return (
//       <div>
//         <p>{this.state.count}</p>
//         <button onClick={this.incrementCount}>Increment</button>
//       </div>
//     );
//   }
// }


// export default App;