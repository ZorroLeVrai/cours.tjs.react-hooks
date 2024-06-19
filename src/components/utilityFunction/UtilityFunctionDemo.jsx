import { useRef, useState } from 'react'
import sendApiRequest from './sendApiRequest';

const UtilityFunctionDemo = () => {
  const [response, setResponse] = useState(null);
  const inputUrl = useRef(null);

  const requestSucceeded = data => setResponse(JSON.stringify(data));

  const requestFailed = error => setResponse(`Error: ${error}`);

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = inputUrl.current.value;
    sendApiRequest(url, requestSucceeded, requestFailed);
  }

  return (
    <>
      <form id="httpRequestForm" onSubmit={handleSubmit}>
        <div>
            <label htmlFor="url">URL:</label>
            <input type="text" id="url" name="url" ref={inputUrl} required />
        </div>
        <div>
            <label htmlFor="method">Méthode HTTP:</label>
            <select id="method" name="method">
                <option value="GET">GET</option>
                <option value="POST">POST</option>
                <option value="PUT">PUT</option>
                <option value="DELETE">DELETE</option>
                <option value="PATCH">PATCH</option>
            </select>
        </div>
        <div>
            <label htmlFor="body">Body:</label>
            <textarea id="body" name="body"></textarea>
        </div>
        <button type="submit">Send Request</button>
      </form>
      <div>
        {response}
      </div>
    </>
  )
}

export default UtilityFunctionDemo;