/* FQMS Firebase 연결 설정
   Firebase 콘솔 → 프로젝트 설정(톱니바퀴) → 일반 → 내 앱 → 웹 앱(</>)의 「SDK 설정 및 구성」에서
   firebaseConfig 값을 그대로 복사해 아래에 붙여 넣으세요.
   이 값은 공개되어도 되는 식별 정보입니다. 데이터 보호는 firestore.rules가 담당합니다. */
window.FQMS_FIREBASE_CONFIG = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
