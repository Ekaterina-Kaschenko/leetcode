function useFetch(url) {
  const [responseJson, setResponseJson] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    const controller = new AbortController(); 
    // The AbortController interface represents a controller
    // object that allows you to abort one or more Web requests as and when desired

    fetch(url, { signal }).then(responce => responce.json())
      .then(setResponseJson)
      .catch(setError)
      .finally(() => setLoading(false));

      return () => controller.abort();
  }, [url]);

  return {responseJson, isLoading, error}
}