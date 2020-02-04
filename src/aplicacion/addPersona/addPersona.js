import { firebasePersonasRepository } from '../../infrastructure/personas/firebasePersona.repository'

export const addPersona = nombre => firebasePersonasRepository.guardarNuevaPersona(nombre)
