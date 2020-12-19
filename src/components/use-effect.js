import React,{useState,useEffect} from 'react';


const UseEffectExample = () =>{
    const [count, setCount] = useState(0);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        document.title = ` you click ${count} times`;
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
      </button>
        </div>
    );

// }
// class UseEffectExample extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0
//         };
//     }

//     componentDidMount() {
//         document.title = `You clicked ${this.state.count} times`;
//     }
//     componentDidUpdate() {
//         document.title = `Minhaj ahmad khan ${this.state.count}`;
//     }

//     render() {
//         return (
//             <div>
//                 <p>You clicked {this.state.count} times</p>
//                 <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//                     Click me
//         </button>
//             </div>
//         );
//     }
}
export default UseEffectExample