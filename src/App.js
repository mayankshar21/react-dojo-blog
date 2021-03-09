import Navbar from './Navbar';
import Home from './Home';

function App() {
  // const title = 'Welcome to the new blog';
  // const likes = 50; // takes any type and converts it to string before outputting to browser
  // const person = { name: 'yoshi', age: 30 };
  // does not output booleans and objects

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        {/*Page content goes here
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        <p>{person}</p> extracts all the numbers of the list, joins them together and outputs them
        <p>{ 10 }</p>
        <p>{"hello, ninjas"}</p>
        <p>{[1,2,3,4,5] }</p>
        <p>{ Math.random() * 10}</p>*/}
      </div>
    </div>
  );
}

export default App;
