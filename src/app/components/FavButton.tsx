'use client'
import { GhibliType } from '@/Types/ghibliType';
import favoriteButton from '../../../public/fav.png'
import notFavoriteButton from '../../../public/notFav.png'
import Image from "next/image";
import { useContext, useEffect, useState } from 'react';
import { GhibliContextProviderProps } from '@/Types/ghibliType';
import { GhibliContext } from '@/Context/Context';

interface favButtonPropr {
    favMovie: GhibliType;
}

export default function FavButton({ favMovie }: favButtonPropr) {

    const { favoritesArray, setFavoritesArray } = useContext(GhibliContext) as GhibliContextProviderProps

    const [fav, setFav] = useState<boolean>(false);


    useEffect(() => {
        if (favoritesArray.some((eachMovie) => eachMovie.id === favMovie.id)) {
            setFav(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const AddFav = (id: GhibliType['id']) => {

        //en el array favoritesArray tengo que poner todos los favoritos

        if (fav) {
            setFavoritesArray((prev) => prev.filter((eachMovie) => eachMovie.id !== id))
            setFav(false);


        } else {
            setFav(true);
            setFavoritesArray((prev) => [...prev, favMovie])

        }

    };

    return (
        <button onClick={() => AddFav(favMovie.id)} >
            {fav ? <Image src={favoriteButton} alt="fav" /> : <Image src={notFavoriteButton} alt="not fav" />}
        </button>
    )
}