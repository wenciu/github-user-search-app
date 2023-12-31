const useFetch = (url) => {
  const fetchData = async () => {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  };
  return fetchData;
};

export default useFetch;
