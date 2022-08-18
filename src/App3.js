import React from "react";
import './App3.css';
import './swapi';


function App3 () {
    // const [ans, setAns] = React.useState();

    const urls = [
        'https://swapi.py4e.com/api/people/1',
        'https://swapi.py4e.com/api/people/4',
        'https://swapi.py4e.com/api/people/2',
        'https://swapi.py4e.com/api/people/11'
    ];

    const getData = async () => {
        const arrayOfPromises = urls.map(url => fetch(url));
        let finalData = [];
        let i = 0;
        for await (const request of arrayOfPromises) {
            const data = request.json();
            finalData[i] = data;
            // setAns(data);
            i++;
            console.log(data, i);
        }
        // console.log(finalData);
        return finalData;
    }
    const finalData = getData();

    console.log(finalData);

    // React.useEffect(() => {
    //     getData();
    // }, []);

    // return <>{JSON.stringify(ans)}</>;

    const person = swapiModule.getPerson(1)
    
    return (
        <div>
            <h1>{person}</h1>
        </div>
    );
}

export default App3;

// class App3 extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             people: {},
//             mouseOn: ''
//         }
//     }

//     componentDidMount() {
//         const urls = [
//             'https://swapi.py4e.com/api/people/1',
//             'https://swapi.py4e.com/api/people/4',
//             'https://swapi.py4e.com/api/people/2',
//             'https://swapi.py4e.com/api/people/11'
//         ];

//         let test = [];

//         fetch('https://swapi.py4e.com/api/people/1')
//             .then(res => res.json())
//             .then(person => test = person);

//         console.log('test', test);
//         // this.setState({people: test});
//         // console.log('state', this.state);
//     }
        
//     //     const getData = async function () {
//     //         try {
//     //             const arrayOfPromises = urls.map(url => fetch(url));
//     //             for await (let request of arrayOfPromises) {
//     //                 const data = await request.json();
//     //                 this.setState({people: data});
//     //             }
//     //         } catch (err) {
//     //             console.log('dunno', err);
//     //         }
//     //     }
//     //     getData();
//     // }

//     render() {
//         const { people, mouseOn } = this.state;
//         console.log('im here');

//         return (
//             <div>
//                 <h1>POKEMONS</h1>
//             </div>
//         );
//     }
// }

