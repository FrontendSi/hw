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
                this.setstate({ascending:false});
                if (this.state.ascending === false){
                    this.setstate({ascending:true})
                    } else {
                    this.setstate({ascending:false})
                    }  
            };


            descending = () => {
                this.setstate({descending:false});
                if (this.state.descending === false){
                    this.setstate({descending:true})
                    } else {
                    this.setstate({descending:false})
                    } 
            };

            oceania = () => {
                this.setstate({oceania:false});
                if (this.state.oceania === false){
                    this.setstate({oceania:true})
                    } else {
                    this.setstate({oceania:false})
                    } 
            };


            area = () => {
                this.setstate({area:false});
                if (this.state.area === false){
                    this.setstate({area:true})
                    } else {
                    this.setstate({area:false})
                    } 
                 //country.area < 65300  
            };



    render() {
        const { dataisLoaded, countries } = this.state;
        if (!dataisLoaded) return <div>
            <h1> Please wait.... </h1> </div> ;

        let finallist = this.state.countries;


        if (this.state.ascending) {
            finallist = finallist.sortsort((a, b) => a.name.localeCompare(b.name));
        };

        if (this.state.descending) {
            finallist = finallist.sortsort((a, b) => b.name.localeCompare(a.name));
            
        };

        if (this.state.oceania) {
            finallist = finallist.filter(region => region.includes('Oceania'));
        };

        if (this.state.area) {
            finallist = finallist.filter(countries => countries.area < 65300);
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



