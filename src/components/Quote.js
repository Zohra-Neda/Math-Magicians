import React, { useState, useEffect } from 'react';

function Quote() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const request = await fetch(
      'https://api.api-ninjas.com/v1/quotes?category=success',
      {
        method: 'Get',
        contentType: 'application/json',
        headers: { 'X-Api-Key': 'lV/RI9e92s0XT+q4SnscVA==D5ctBBfK7gpYBE7b' },
      },
    );
    const response = await request.json();
    // Error
    if (response.error) {
      setIsLoading(false);
      setError(response);
    } else {
      // normal
      setIsLoading(false);
      setError(false);
      setData(response[0]);
    }
  };

  useEffect(() => {
    fetchData();
  }, [setData, setIsLoading]);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Something went wrong!</div>;

  if (data) {
    return (
      <center>
        <div className="quotes-container">
          <p className="quote">{data.quote}</p>
        </div>
      </center>
    );
  }
}

export default Quote;
