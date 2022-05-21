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
                this.setstate({ascending:false});
                if this.state.ascending === false{
                    this.setstate({ascending:true})
                    } else {
                    this.setstate({ascending:false})
                    } 
                    
            };


            descending = () => {
                this.setState(this.state.countries.sort((a, b) => b.name.localeCompare(a.name)));
                this.setstate({descending:true});
            };

            oceania = () => {
                this.setState(this.state.countries.filter(region => region.includes('Oceania')));
                this.setstate({oceania:true});
              
            };


            area = () => {
                this.setState(this.state.countries.filter(countries => countries.area < 65300));
                 //country.area < 65300
                 this.setstate({area:true});
                 
            };



    render() {
        const { dataisLoaded, countries } = this.state;
        if (!dataisLoaded) return <div>
            <h1> Please wait.... </h1> </div> ;
        let finallist = this.state.countries;
        if this.state.ascending {
            finallist = finallist.sortsort((a, b) => a.name.localeCompare(b.name))
        };

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



