import React from 'react';
import NumberMemory from '../components/NumberMemory';
import NumberInput from '../components/NumberInput';
import NumberDisplay from '../components/NumberDisplay';

export default function Home() {
  return (
    <div>
      <NumberMemory />
      <NumberInput />
      <NumberDisplay />
    </div>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://api.random.org/json-rpc/2/invoke`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "jsonrpc": "2.0",
      "method": "generateIntegers",
      "params": {
        "apiKey": "YOUR_API_KEY",
        "n": 1,
        "min": 0,
        "max": 9,
        "replacement": true
      },
      "id": 1
    })
  })
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}