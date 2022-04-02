import me from '@assets/images/authors/profile.jpg'
import boreas from '@assets/images/authors/boreashe.jpg'
import ikmountains from '@assets/images/authors/1kmountains.jpg'
import lumchunho from '@assets/images/authors/lumchunho.jpg'
import magnolia from '@assets/images/authors/magnolia.png'
import { StaticImageData } from 'next/image'

type AuthorType = 'myself'|'developer'|'artist'|'client';
type Author = {
    name: string,
    icon?: StaticImageData,
    type: AuthorType,
}

export const Authers: {[key: string]: Author} = {
    me: {
        name: "Jack Szeto",
        icon: me,
        type: "myself",
    },
    boreas: {
        name: "Boreas He",
        icon: boreas,
        type: "developer",
    },
    ikmountains: {
        name: "1kmountains",
        icon: ikmountains,
        type: "artist",
    },
    lumchunho: {
        name: "lumchunho",
        icon: lumchunho,
        type: "developer",
    },
    magnolia: {
        name: "Magnolia Lab",
        icon: magnolia,
        type: "client",
    },
    ning: {
        name: "Lo Yat Ning",
        type: "artist"
    },
    AndyTang: {
        name: "Tang Chung Hei",
        type: "developer"
    },
    AnnChan: {
        name: "Chan Lok Sze",
        type: "artist"
    },
    CMTing: {
        name: "Choi Ming Ting",
        type: "developer"
    },
    graceho: {
        name: "Ho Sze Yiu",
        type: "artist"
    },
}
