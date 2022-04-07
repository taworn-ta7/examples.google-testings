export const Constants = {

	/// Local base URI.
	localUri: 'http://localhost:3000',

	/// Server base URI.
	baseUri: 'http://127.0.0.1:8008/api',

	/// Static server base URI.
	baseStaticUri: 'http://127.0.0.1:8008',

	// Google Client
	googleApiKey: 'AIzaSyDnq4N1x2wSRHOFvtSMgpbjvMa3MFHQnsQ',
	googleClientId: '619647089951-4mbcl7df3hvv37l4gvc36gli2t8d4k3p.apps.googleusercontent.com',
	googleAuthUri: 'https://accounts.google.com/o/oauth2/v2/auth',
	googleSignIn: () => {
		const scope = [
			'openid',
			'profile',
			'email',
			'https://www.googleapis.com/auth/userinfo.profile',
			'https://www.googleapis.com/auth/userinfo.email',
			'https://www.googleapis.com/auth/drive',
			'https://www.googleapis.com/auth/drive.file',
			'https://www.googleapis.com/auth/drive.readonly',
			'https://www.googleapis.com/auth/drive.metadata.readonly',
			'https://www.googleapis.com/auth/drive.appdata',
			'https://www.googleapis.com/auth/drive.metadata',
			'https://www.googleapis.com/auth/drive.photos.readonly',
			//'https://www.googleapis.com/auth/keep',
			//'https://www.googleapis.com/auth/keep.readonly',
			'https://mail.google.com',
			'https://www.googleapis.com/auth/gmail.addons.current.action.compose',
			'https://www.googleapis.com/auth/gmail.addons.current.message.action',
			'https://www.googleapis.com/auth/gmail.addons.current.message.metadata',
			'https://www.googleapis.com/auth/gmail.addons.current.message.readonly',
			'https://www.googleapis.com/auth/gmail.compose',
			'https://www.googleapis.com/auth/gmail.insert',
			'https://www.googleapis.com/auth/gmail.labels',
			'https://www.googleapis.com/auth/gmail.metadata',
			'https://www.googleapis.com/auth/gmail.modify',
			'https://www.googleapis.com/auth/gmail.readonly',
			'https://www.googleapis.com/auth/gmail.send',
			'https://www.googleapis.com/auth/gmail.settings.basic',
			'https://www.googleapis.com/auth/gmail.settings.sharing',
		];
		return Constants.googleAuthUri
			+ `?redirect_uri=${Constants.localUri}/signin/google`
			+ `&client_id=${Constants.googleClientId}`
			+ `&access_type=offline&response_type=code&prompt=consent`
			//+ `&access_type=online&response_type=code&prompt=consent`
			+ `&scope=${scope.join(' ')}`;
	},

};

export default Constants;
