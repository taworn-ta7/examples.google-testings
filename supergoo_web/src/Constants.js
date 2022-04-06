export const Constants = {

	/// Local base URI.
	localUri: 'http://localhost:3000',

	/// Server base URI.
	baseUri: 'http://127.0.0.1:8008/api',

	/// Static server base URI.
	baseStaticUri: 'http://127.0.0.1:8008',

	// Google Client
	googleClientId: '619647089951-4mbcl7df3hvv37l4gvc36gli2t8d4k3p.apps.googleusercontent.com',
	googleAuthUri: 'https://accounts.google.com/o/oauth2/v2/auth',
	googleSignIn: () => {
		const scope = [
			`https://www.googleapis.com/auth/userinfo.profile`,
			`https://www.googleapis.com/auth/userinfo.email`,
			//'https://www.googleapis.com/auth/blogger',
			//'https://www.googleapis.com/auth/calendar',
			//'https://www.googleapis.com/auth/drive',
			//'https://www.googleapis.com/auth/drive.file',
		];
		return Constants.googleAuthUri
			+ `?redirect_uri=${Constants.localUri}/signin/google`
			+ `&client_id=${Constants.googleClientId}`
			+ `&access_type=offline&response_type=code&prompt=consent`
			+ `&scope=${scope.join(' ')}`;
	},

};

export default Constants;
