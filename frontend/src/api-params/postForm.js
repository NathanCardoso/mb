const api = import.meta.env.VITE_BASE_URL

  export function POST_USER(body) {
  return {
    urlApi: api + '/registration',
		options: {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		},
  }
  }