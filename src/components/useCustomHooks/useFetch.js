import { useCallback, useState } from "react";

function useFetch(url, method, body) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
  
  
    // Function to trigger the request
    const fetchData = useCallback(async () => {
      setLoading(true);
      setError(null); // Reset error state before a new request
  
      try {
        const response = await fetch(
            url,
            {
                method,
                headers: { 'Content-Type': 'application/json',},
                body: method === 'POST' ? JSON.stringify(body) : null, // Only include body if it's a POST request
            });
  
  
        // Check if the response status is not OK (e.g., 404, 500)
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
  
        const responseData = await response.json();
        setData(responseData); // Set the received data
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    }, [url, method, body]);
  
    return { fetchData, data, error, loading };
}
  
export default useFetch;
  