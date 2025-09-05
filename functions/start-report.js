exports.handler = async (event) => {
  // Example: POST { vin, state, email }
  const body = event.httpMethod === 'POST' && event.body ? JSON.parse(event.body) : {};
  const { vin, state, email } = body;

  // TODO: plug real providers here
  const reportId = 'demo_' + Math.random().toString(36).slice(2, 8);

  return {
    statusCode: 200,
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      ok: true,
      reportId,
      received: { vin, state, email },
      note: 'Stub endpoint is alive on Netlify.',
    }),
  };
};
