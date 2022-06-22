import { readFileSync } from 'fs';

let secretFile;
export let secrets = {
  box: {
    clientID: '',
    clientSecret: '',
    devToken: '',
  }
};

if (process.env.NODE_ENV !== 'production') {
	secretFile = '.secrets';
} else {
	secretFile = '/etc/secrets/all';
}

try {
	secrets = JSON.parse(readFileSync(secretFile, { encoding: 'utf-8' }));
} catch (e) {
	console.log(
		'secret file does not exist or is invalid (normal during build)',
		secretFile,
		e.message
	);
}
