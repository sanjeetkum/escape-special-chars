function sanitize_for_regex(s) {
		s = s.replace(/["]/g, '\\$&');
		s = s
			.replace(/\\n/g, '\\n')
			.replace(/\\'/g, "\\'")
			.replace(/\\"/g, '\\"')
			.replace(/\\+/g, '')
			.replace(/\\|/g, '')
			.replace(/\\&/g, '\\&')
			.replace(/\\r/g, '\\r')
			.replace(/\\t/g, '\\t')
			.replace(/\\b/g, '\\b')
			.replace(/\\f/g, '\\f');

		// remove non-printable and other non-valid JSON chars
		s = s.replace(/[\u0000-\u0019]+/g, '');
		return JSON.parse(JSON.stringify(s));
	}
