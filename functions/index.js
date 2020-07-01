const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase)
const express = require('express');
const cors = require('cors');
const router = express();
router.use(cors({ origin: true }))
router.get("/usuarios/:usuario", async (req, res) => {
  const usuario = await admin
    .firestore()
    .collection("usuarios")
    .doc(req.params.usuario)
    .get().then((doc) => {
    if (doc.exists) {
        return doc.data()
        console.log("Document data:", doc.data());
        return doc.data()
    } else {
        console.log("No such document!");
        return {}
    }
  });
  res.send(usuario);
});
router.post("/usuario", async (req, res) => {
  const usuario = await admin
    .firestore()
    .collection("usuarios")
    .doc(req.body.email) 
    .set(req.body.favs)
    .then( () => {
      return 'todo bien'
    });
  res.send(usuario);
});
exports.usuarios = functions.https.onRequest(router);

