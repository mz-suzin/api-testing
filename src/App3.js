import React from "react";
import './App3.css'

class App3 extends React.Component {
    constructor() {
        super();
        this.state = {
            people: [],
            mouseOn: ''
        }
    }

    componentDidMount() {
        const urls = [
            'https://swapi.py4e.com/api/people/1',
            'https://swapi.py4e.com/api/people/4',
            'https://swapi.py4e.com/api/people/2',
            'https://swapi.py4e.com/api/people/11'
        ];

        // fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
        //     .then(res => res.json())
        //     .then(pok => this.setState({pokemon: pok}));

        // console.log(this.state);
        
        const getData = async function () {
            try {
                const arrayOfPromises = urls.map(url => fetch(url));
                for await (let request of arrayOfPromises) {
                    const data = await request.json();
                    this.setState({people: data});
                }
            } catch (err) {
                console.log('dunno', err);
            }
        }
        getData();
    }

    render() {
        const { people, mouseOn } = this.state;
        console.log('im here');

        return (
            <div>
                <h1>POKEMONS</h1>
            </div>
        );
    }
}

export default App3;