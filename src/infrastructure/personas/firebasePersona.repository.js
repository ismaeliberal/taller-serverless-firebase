import { firestoreDB } from '../firebase'

const firebaseParqueCollection = 'partida'

const guardarNuevaPersona = Nombre =>
  firestoreDB
    .collection(firebaseParqueCollection)
    .doc()
    .set({ Nombre })

const obtenerPersonas = () => firestoreDB.collection(firebaseParqueCollection).get()

export const firebasePersonasRepository = {
  guardarNuevaPersona,
  obtenerPersonas,
}
