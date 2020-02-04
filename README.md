1. Bajarse repositorio del proyecto:

```
git clone git@github.com:ismaeliberal/taller-serverless-firebase.git
```

2. Desde un terminal intalar globalmente el CLI de firebase

```
npm install -g firebase-tools
```

3. Instalamos las dependencias del proyecto y de las funciones

```
npm install
```

---

# SEGUNDA PARTE

4. Crearse cuenta y proyecto en [firebase](https://firebase.google.com/)
5. Crear BD Firestore (Desarrollo -> Firebase | Seleccionar modo desarrollo antes de generar la bd)
6. Logearse con la cuenta de firebase y añadir el proyecto

```
firebase login
firebase init
```

7. Seleccionamos la bd firestore y hosting
8. Crear un fichero con nombre `firebase-config.json` dentro de `src/infrastructure/` con las credenciales de nuestro proyecto y el siguiente formato

```js
{
  "apiKey": "CAMBIAR",
  "authDomain": "CAMBIAR",
  "databaseURL": "CAMBIAR",
  "projectId": "CAMBIAR",
  "storageBucket": "CAMBIAR",
  "messagingSenderId": "CAMBIAR"
}
```

9. Deploy de la applicación para comprobar que funciona

```
firebase deploy
```
