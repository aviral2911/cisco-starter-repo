import React, { useEffect, useState } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';

function Latency() {
  const [latency, setLatency] = useState(null);

  useEffect(() => {
    const client = new W3CWebSocket('ws://localhost:55455');

    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };

    client.onmessage = (message) => {
      if (message.data) {
        const packetTimestamp = parseInt(message.data, 10);
        const currentTimestamp = new Date().getTime();
        const packetLatency = currentTimestamp - packetTimestamp;
        setLatency(packetLatency);
      }
    };

    client.onclose = () => {
      console.log('WebSocket Client Closed');
    };

    return () => {
      client.close();
    };
  }, []);

  return (
    <div>
      <h2>Packet Latency</h2>
      {latency !== null ? <p>{`Latency: ${latency} ms`}</p> : <p>Calculating latency...</p>}
    </div>
  );
}

