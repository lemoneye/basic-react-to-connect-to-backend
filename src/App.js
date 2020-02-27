import React from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [text, setText] = React.useState(''); // creates state variable, retuns tuple
  const [responseText, setResponseText] = React.useState([]);
  const [id, setID] = React.useState('');

  // to store
  const storeApi = () => {
    if (id === '') {
      axios.post(`/store?key=${text}`, text)
      axios.get(`/list`)
        .then((res) => {
          setResponseText(res.data.response);
        })
    } else {
      const params = { data: text }
      axios.post(`/update?_id=${id}`, params.data)
        .then()
      axios.get(`/list`)
        .then((res) => {
          setResponseText(res.data.response);
        })
    }
  }
  // to delete
  const removeApi = () => {
    const remove = { _id: id }
    axios.post(`/delete?_id=${id}`, remove)
      .then((res) => {
        const removeIt = '';
        const index = id.indexOf(removeIt);
        if (index !== -1) {
          id.slice(index, 1);
        }
      })
    axios.get(`/list`)
      .then((res) => {
        setResponseText(res.data.response);
      })
  }
  React.useEffect(() => { }, [])

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <input value={id} onChange={e => setID(e.target.value)} placeHolder="Enter ID here" />
        </div>
        <hr />
        <input value={text} onChange={e => setText(e.target.value)} placeHolder="Enter Text here" />
        <hr />

        <div>
          <button onClick={storeApi} >Save</button>
          <button onClick={removeApi}>Delete</button>

        </div>

        <div className="App-window">

          <p> ALL DATA GOES HERE </p>

          {responseText.map(noteObject =>
            <div className="App-text">

              {id !== noteObject._id && (
                <div> ID is: {noteObject._id}
                  <div>
                    Data is: {noteObject.data}
                  </div>
                </div>
              )}

              {id === noteObject._id && (
                <div> ID is: {noteObject._id}
                  <div>
                    Data is: {noteObject.data}
                  </div>
                </div>
              )}
              
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;