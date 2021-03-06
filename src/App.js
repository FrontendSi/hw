import React from "react";
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
  
        this.state = {
            countries: [],
            dataisLoaded: false,
            ascending: false,
            descending: false,
            oceania:false,
            area:false
        };

        
        
        // this.setState({ascending:undefined});
        // this.setState({descending:undefined});
        // this.setState({oceania:undefined});
        // this.setState({area:undefined});
    
    } 
   
    componentDidMount() {
        fetch("https://restcountries.com/v2/all?fields=name,region,area")
            .then((res) => res.json())
            .then((data) => {
                //console.log('TEKSTAS');
                this.setState({
                    countries: data, 
                    dataisLoaded: true
                    // ascending: true,
                    // descending: true,
                    // oceania:true,
                    // area:true
                });
            })

            };

            ascending = () => {
                console.log('ASCENDING');
                
                if (this.state.ascending === true){
                    this.setState({ascending:false})
                    } else {
                    this.setState({ascending:true})
                    }  
                    ;
            };


            descending = () => {
                console.log('DESCENDING');
                
                if (this.state.descending === true){
                    this.setState({descending:false})
                    } else {
                    this.setState({descending:true})
                    } 
                    
            };

            oceania = () => {
                console.log('OCEANIA');
                
                if (this.state.oceania === true){
                    this.setState({oceania:false})
                    } else {
                    this.setState({oceania:true})
                    } 
                    
            };


            area = () => {
                console.log('AREA');
                
                if (this.state.area === true){
                    this.setState({area:false})
                    } else {
                    this.setState({area:true})
                    } 
                    
                 //country.area < 65300  
            };



    render() {
        const { dataisLoaded, countries } = this.state;
        if (!dataisLoaded) return <div>
            <h1> Please wait.... </h1> </div> ;

        let finalList = this.state.countries;

    

        if (this.state.ascending) {
            finalList = finalList.sortsort((a, b) => a.name.localeCompare(b.name));
        };

        if (this.state.descending) {
            finalList = finalList.sortsort((a, b) => b.name.localeCompare(a.name));
            
        };

        if (this.state.oceania) {
            finalList = finalList.filter(region => region.includes('Oceania'));
        };

        if (this.state.area) {
            finalList = finalList.filter(countries => countries.area.value < 65300);
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

            {/* <div>
                finalList
            </div> */}
            
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



