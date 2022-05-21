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
            .then((data) => {
                //console.log('TEKSTAS');
                this.setState({
                    countries: data, 
                    dataisLoaded: true
                });
            })

            };

    

            ascending = () => {
                this.setState(this.state.countries.sort((a, b) => a.name.localeCompare(b.name)));
                
            };


            descending = () => {
                this.setState(this.state.countries.sort((a, b) => b.name.localeCompare(a.name)));
            };

            oceania = () => {
                this.setState(this.state.countries.filter(region => region.includes('Oceania')));
              
            };


            area = () => {
                this.setState(this.state.countries.filter(countries => countries.area < 65300));
                 //country.area < 65300
            };



    render() {
        const { dataisLoaded, countries } = this.state;
        if (!dataisLoaded) return <div>
            <h1> Please wait.... </h1> </div> ;

        return (

            
        <div className = "App">
          
            <h1> Fetch data from the endpoint </h1> 
            <div className = "buttons">
                <div>
                    <h3>Sort options:</h3>
                    <button onClick={()=>this.ascending()}  id="ascending" >Ascending</button> 
                    <button onClick={()=>this.descending()} id="descending" >Descending</button>
                </div>
                <div>
                    <h3>Filter options:</h3>
                    <button onClick={()=>this.oceania()}  id="oceania" >Oceania region countries</button>
                    <button onClick={()=>this.area()} id="area" >Area less than Lithuania's area</button>
                </div>
            </div>
            {
                
            countries.map((country) => ( 
                    
            <ul>    
                    { country.name },
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



