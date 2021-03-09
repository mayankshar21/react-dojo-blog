import { useState, useEffect } from 'react';
import { setCacheNameDetails } from 'workbox-core';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
    
// let name = 'mario';
// const [name, setName] = useState('mario'); // can be used with
// a boolean, object, number, any datatype
// we can set up an initial value and then
// change the value using the setName
// this will cause to re-render
// const [age, setAge] = useState(25);

// this function gets access to events object e automatically
// const handleClick = () => {
//    setName('luigi');
//    setAge(30);
//}

// here it does not so we pass it to the anonymous function
// const handleClickAgain = (name, e) => {
//    console.log('hello ' + name, e.target);
//}
// We are referencing the functions so that they do not invoke when the button
// tag is outputted to the browser
// for functions with parameter, we need to use an anonymous function
// so that they do not get invoked when button tags are outputted
// functions in single line do not need extra {}

// we will hooks to update values - special type of function
// usestate changes the value by rerendering the name so the value
// of name is changed - outputs two parameters
// What is call back function?
// What is arrow syntax?
// What is promise and async await?
    // we passed a dynamic value blogs as props
    // takes fraction of time for data to be retrieved so we need to wait for the blogs to be fetched
    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            { isPending && <div>Loading...</div> }
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
            {/*<button onClick={() => setName('luigi')}>change name</button>
            <p>{name}</p>*/}
        </div>
    );
}
 
export default Home;