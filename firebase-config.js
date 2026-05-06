// 🔥 Configuração do Firebase
// IMPORTANTE: Substitua os valores abaixo pelas suas credenciais do Firebase
// Siga as instruções em FIREBASE_SETUP.md para obter suas credenciais

const firebaseConfig = {
  apiKey: "AIzaSyChL5ICd7vSH6Fc3irzxYhy_AmNgkFSBeE",
  authDomain: "gestao-de-testes-vivo.firebaseapp.com",
  projectId: "gestao-de-testes-vivo",
  storageBucket: "gestao-de-testes-vivo.firebasestorage.app",
  messagingSenderId: "682040337333",
  appId: "1:682040337333:web:81b9f099ff5d638cd2affc"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Inicializar Firestore
const db = firebase.firestore();

// Referência para a coleção de bugs
const bugsCollection = db.collection('bugs');

console.log('🔥 Firebase inicializado com sucesso!');

// Made with Bob
