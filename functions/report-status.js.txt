exports.handler = async (event) => {
  const reportId = (event.queryStringParameters && event.queryStringParameters.id) || 'unknown';
  return {
    statusCode: 200,
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ ok: true, reportId, status: 'ready', pdfUrl: null }),
  };
};
