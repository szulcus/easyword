const functions = require('firebase-functions');
const admin = require('firebase-admin');
const { Storage } = require('@google-cloud/storage');
const projectId = 'easyword';
let gcs = new Storage ({
  projectId
});
const os = require('os');
const path = require('path');
const spawn = require('child-process-promise').spawn;
admin.initializeApp();

exports.addAdminRole = functions.https.onCall((data, context) => {
	if (context.auth.token.admin !== true) {
		return {
			error: 'Only admins can add other admins, sucker'
		}
	}
	return admin.auth().getUserByEmail(data.email).then(user => {
		return admin.auth().setCustomUserClaims(user.uid, {
			admin: true
		});
	}).then(() => {
		return spawn('convert', [tmpFilePath, '-resize', '500x500', tmpFilePath])}).catch(err => {
		return err;
	})
})

// exports.onFileChange = functions.storage.object().onFinalize(event => {
// 	console.log(event);
// 	const bucket = event.bucket;
// 	const contentType = event.contentType;
// 	const filePath = event.name;
// 	console.log('file detected')
  
//   if(path.basename(filePath).startsWith('renamed-')){
// 	console.log('already renamed this file')
// 	return;
//   }
  
// 	const destBucket = gcs.bucket(bucket);
// 	const tmpFilePath = path.join(os.tmpdir(), path.basename(filePath));
//   const metadata = { contentType : contentType }
// 	return destBucket.file(filePath).download({
// 	  destination : tmpFilePath
// 	}).then(() => {
// 	 return destBucket.upload(tmpFilePath, {
// 	  destination:'renamed-'+ path.basename(filePath),
// 	  metadata: metadata
// 	}) 
  
   
// 	})
  
//   });