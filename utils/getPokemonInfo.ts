import { pokeApi } from '../api'
import { PokemonResponse } from '../interface'

export const getPokemonInfo = async( nameOrId: String ) => {

    const { data } = await pokeApi.get<PokemonResponse>(`/pokemon/${ nameOrId }`)

    return {
        id: data.id,
        name: data.name,
        sprites: data.sprites
    }
}