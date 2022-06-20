let localStream;
let remoteStream;
let peerConnection;

const servers = {
	iceServers: [
		{
			urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'],
		},
	],
};

const init = async () => {
	localStream = await window.navigator.mediaDevices.getUserMedia({
		video: true,
		audio: false,
	});
	document.getElementById('user-1').srcObject = localStream;

	createOffer();
};

let createOffer = async () => {
	remoteStream = new MediaStream();
	document.getElementById('user-2').srcObject = remoteStream;

	peerConnection = new RTCPeerConnection();
	let offer = await peerConnection.createOffer();
	await peerConnection.setLocalDescription(offer);

	console.log(offer);
};

init();
