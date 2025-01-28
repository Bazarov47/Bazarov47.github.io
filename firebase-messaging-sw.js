//importScripts("https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js");
//importScripts("https://www.gstatic.com/firebasejs/10.0.0/firebase-messaging.js");
importScripts("https://www.gstatic.com/firebasejs/10.0.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.0.0/firebase-messaging-compat.js");

firebase.initializeApp({
    apiKey: "AIzaSyCCLLuRp4QNAXWW6U7JWJ1fb7IDVamg70w",
      authDomain: "vrapon-49003.firebaseapp.com",
      projectId: "vrapon-49003",
      storageBucket: "vrapon-49003.appspot.com",
      messagingSenderId: "64011481291",
      appId: "1:64011481291:web:eebac19e9b04a9ea396b4e",
      measurementId: "G-PFS922WVYM"
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
  const notificationTitle = message.notification.title;
      const notificationOptions = {
        body: message.notification.body,
      };
      self.registration.showNotification(notificationTitle, notificationOptions);
});