import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'Icaro Natã Fadel',
      numero: '(11) 94926-8848',
      email: 'icaro.nata147@gmail.com'
    },
    {
      id: 2,
      nome: 'Ana Karolina',
      numero: '(11) 97721-2959',
      email: ''
    },
    {
      id: 3,
      nome: 'Vitor G. Souza',
      numero: '(11) 94052-4458',
      email: 'vitor.souza@ibllogistica.com.br'
    }
  ]
}

const contatoSlice = createSlice({
  name: 'Contato',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const IndexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (IndexDoContato >= 0) {
        state.itens[IndexDoContato] = action.payload
      }
    }
  }
})

export const { remover, editar } = contatoSlice.actions

export default contatoSlice.reducer
