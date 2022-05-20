// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
  
        this.state = {
            countries: [],
            dataisLoaded: false
        };
    } 
   
    componentDidMount() {
        fetch("https://restcountries.com/v2/all?fields=name,region,area")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    countries: json,
                    dataisLoaded: true
                });
            })

            };

    

            ascending = () => {
                this.setState(this.state.countries.country.sort((a, b) => a.name - b.name));

                
                console.log('tekstas');
            };


            descending = () => {
                this.setState(this.state.countries.country.sort((a, b) => b.name - a.name));
            };



    render() {
        const { dataisLoaded, countries } = this.state;
        if (!dataisLoaded) return <div>
            <h1> Please wait.... </h1> </div> ;

        return (

            
        <div className = "App">
          
            <h1> Fetch data from the endpoint </h1> 
            <div className = "buttons">
                <h3>Sort options:</h3>
                <button onClick={()=>this.ascending()}  id="ascending" >Ascending</button>
                <button onClick={()=>this.descending()} id="descending" >Descending</button>
            </div>
            {
                
            countries.map((country) => ( 
                    
    
            
            <ul Key={country.name}>
                    { country.region }, 
                    { country.area }
                </ul>
        
                ))
            }
           
        </div>
        );
    }
}
   
export default App;



