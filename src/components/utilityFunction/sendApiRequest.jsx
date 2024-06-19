const sendApiRequest = (url, requestSucceeded, requestFailed, method = "GET", body = null) => {
  const sendRequest = async() => {
    try {
      const response = await fetch(url, { method, body });
      const result = await response.json();
      requestSucceeded(result);
    }
    catch (error) {
      requestFailed(error.message);
    }
  };

  sendRequest();
}

export default sendApiRequest;