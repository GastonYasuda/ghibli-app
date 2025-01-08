'use client'
import { GhibliType } from '@/Types/ghibliType';
import favoriteButton from '../../../public/fav.png'
import notFavoriteButton from '../../../public/notFav.png'
import Image from "next/image";
import { useContext, useEffect, useState } from 'react';
import { GhibliContextProviderProps } from '@/Types/ghibliType';
import { GhibliContext } from '@/Context/Context';
import { toast } from "react-toastify";


interface favButtonPropr {
    favMovie: GhibliType | undefined;
}

export default function FavButton({ favMovie }: favButtonPropr) {

    const { favoritesArray, setFavoritesArray } = useContext(GhibliContext) as GhibliContextProviderProps

    const [fav, setFav] = useState<boolean>(false);


    useEffect(() => {
        if (favoritesArray.some((eachMovie) => eachMovie.id === favMovie?.id)) {
            setFav(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const addNotify = () => {
        toast.success(`${favMovie?.title} Added to Favs!`, {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };
    const removeNotify = () => {
        toast.warn(`${favMovie?.title} Removed from Favs!`, {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };


    const AddFav = (id: GhibliType['id']) => {

        //en el array favoritesArray tengo que poner todos los favoritos

        if (fav) {
            setFavoritesArray((prev) => prev.filter((eachMovie) => eachMovie.id !== id))
            setFav(false);
            removeNotify()


        } else {
            setFav(true);
            if (favMovie) {
                setFavoritesArray((prev) => [...prev, favMovie])
                addNotify()

            }

        }

    };

    return (
        <button onClick={() => AddFav(favMovie?.id)} className="absolute z-10 right-2 top-2">
            {fav ? <Image src={favoriteButton} alt="fav" className='w-10 ease-linear duration-300' /> : <Image src={notFavoriteButton} alt="not fav" className='w-10 opacity-50 hover:opacity-100 ease-linear duration-300' />}
        </button>
    )
}