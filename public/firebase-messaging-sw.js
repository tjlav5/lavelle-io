// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts("https://www.gstatic.com/firebasejs/7.12.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/7.12.0/firebase-messaging.js"
);

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyB3Ttk-K5sVkJ0FL_lXJ4EflWKt6GEzSXw",
  authDomain: "lavelle-io-1310.firebaseapp.com",
  databaseURL: "https://lavelle-io-1310.firebaseio.com",
  projectId: "lavelle-io-1310",
  storageBucket: "lavelle-io-1310.appspot.com",
  messagingSenderId: "431426547682",
  appId: "1:431426547682:web:eceef6d0c486f4164c53bb"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// [START background_handler]
messaging.setBackgroundMessageHandler(function(payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle = "Background Message Title";
  const notificationOptions = {
    body: "Background Message body.",
    icon: "/firebase-logo.png"
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
// [END background_handler]
