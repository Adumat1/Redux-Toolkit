import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost } from './redux/slices/conuterSlices';
// import { increment, decrement, increaseAmount } from './redux/slices/conuterSlices';
import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPost());
  }, []);

  //select store state
  const post = useSelector(state => state.post);
  const { postsList, loading } = post;

  // const counter = useSelector(state => state?.counter);
  // console.log(counter)
  return (
    <div className="App">
      {/* <h1>Redux Tookit Counter</h1>
      <h2>Counter: {counter?.value}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increaseAmount(100))}>Increase Amount</button> */}
      <h1>Post List</h1>
      <hr />
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        postsList?.map(post => (
          <>
            <h2>{post?.title}</h2>
            <p>{post?.body}</p>
            <hr />
          </>
        ))
      )}
    </div>
  );
}

export default App;
