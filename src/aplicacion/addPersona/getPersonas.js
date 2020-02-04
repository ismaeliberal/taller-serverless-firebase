import { firebasePersonasRepository } from '../../infrastructure/personas/firebasePersona.repository'

export const getAll = async () => {
  const personas = await firebasePersonasRepository.obtenerPersonas()
  return personas.docs.map(doc => {
    return { id: doc.id, nombre: doc.data().Nombre }
  })
}
