import dontspendallyourcoins from '@assets/images/dontspendallyourcoins.png';
import bushi from '@assets/images/bushi.png';
import repairgrandson from '@assets/images/repair-grandson.png';
import holelifes from '@assets/images/holelifes.png';
import onikiri from '@assets/images/onikiri.png';
import managarmr from '@assets/images/managarmr.png';
import ghostlydelivery from '@assets/images/ghostlydelivery.png';
import forestdefenders from '@assets/images/forestdefenders.png';
import morningstar from '@assets/images/morningstar.png';
import steamtown from '@assets/images/steamtown.png';
import mindatnight from '@assets/images/mindatnight.jpg';
import artoflifes from '@assets/images/artoflifes.gif';
import artoflifesBlur from '@assets/images/artoflifesBlur.jpg';
import magnolialab from '@assets/images/magnolialab.jpg';
import { parse } from 'date-fns';
import { ReactNode } from 'react';

export type ProjectType = 'website'|'game'|'game-jam';
export type ProjectStatus = 'released'|'in-progress'|'suspend'|'failed';
export type ProjectProp = {
    name: string,
    description: string,
    thumnail: StaticImageData,
    thumnailBlur?: StaticImageData,
    status: ProjectStatus;
    type: ProjectType,
    date?: Date,
    link?: string,
    playable?: ReactNode,
}

export const AllProjects: ProjectProp[] = [
    {
        name: "Don't Spend All Your Coins",
        description: "My very first game jam game for Brackeys' Community Game Jam in August of 2019",
        thumnail: dontspendallyourcoins,
        status: "released",
        type: "game-jam",
        date: parse("31/08/2019", "dd/MM/yyyy", new Date),
        link: "https://fhy.itch.io/dont-spend-all-your-coins",
    },
    {
        name: "Bushido",
        description: "A reinvented game jam game made for Mix and Game Jam 2019",
        thumnail: bushi,
        status: "released",
        type: "game-jam",
        date: parse("13/10/2019", "dd/MM/yyyy", new Date),
        link: "https://fhy.itch.io/bushido",
    },
    {
        name: "Repair-grandson",
        description: "A story based game made for the Global Game Jam 2020",
        thumnail: repairgrandson,
        status: "released",
        type: "game-jam",
        date: parse("02/02/2020", "dd/MM/yyyy", new Date),
        link: "https://fhy.itch.io/repair-grandson",
    },
    {
        name: "Hole Lifes",
        description: "A resources management game made for Brackeys Game Jam 2020.1",
        thumnail: holelifes,
        status: "released",
        type: "game-jam",
        date: parse("23/02/2020", "dd/MM/yyyy", new Date),
        link: "https://fhy.itch.io/hole-lifes",
    },
    {
        name: "Onikiri",
        description: "An action platformer game made for Brackeys Jam 2020.2",
        thumnail: onikiri,
        status: "released",
        type: "game-jam",
        date: parse("08/08/2020", "dd/MM/yyyy", new Date),
        link: "https://fhy.itch.io/onikiri",
    },
    {
        name: "Mánagarmr",
        description: "A game made for Global Game Jam 2021",
        thumnail: managarmr,
        status: "released",
        type: "game-jam",
        date: parse("31/01/2021", "dd/MM/yyyy", new Date),
        link: "https://fhy.itch.io/managarmr",
    },
    {
        name: "Ghostly Delivery",
        description: "A micro management game made for Brackeys Game Jam 2021.1",
        thumnail: ghostlydelivery,
        status: "released",
        type: "game-jam",
        date: parse("21/02/2021", "dd/MM/yyyy", new Date),
        link: "https://fhy.itch.io/ghostly-delivery",
    },
    {
        name: "Forest Defenders",
        description: "A tower defense game made for GMTK Game Jam 2021",
        thumnail: forestdefenders,
        status: "failed",
        type: "game-jam",
        date: parse("13/6/2021", "dd/MM/yyyy", new Date),
        link: "https://fhy.itch.io/forest-defenders",
    },
    {
        name: "Morning Star",
        description: "A puzzle game made for Brackeys Game Jam 2021.2",
        thumnail: morningstar,
        status: "released",
        type: "game-jam",
        date: parse("29/08/2021", "dd/MM/yyyy", new Date),
        link: "https://fhy.itch.io/morning-star",
    },
    {
        name: "Steamtown",
        description: "A card game made for Global Game Jam 2022",
        thumnail: steamtown,
        status: "released",
        type: "game-jam",
        date: parse("30/01/2022", "dd/MM/yyyy", new Date),
        link: "https://fhy.itch.io/steamtown",
    },
    {
        name: "Mind At Night",
        description: "A shooter game made for Brackeys Game Jam 2022.1",
        thumnail: mindatnight,
        status: "released",
        type: "game-jam",
        date: parse("27/02/2022", "dd/MM/yyyy", new Date),
        link: "https://fhy.itch.io/mind-at-night",
    },
    {
        name: "Art of Lifes",
        description: "A resources management game",
        thumnail: artoflifes,
        thumnailBlur: artoflifesBlur,
        status: "in-progress",
        type: "game",
        date: parse("25/10/2020", "dd/MM/yyyy", new Date),
        link: "https://www.instagram.com/artoflife.official/",
    },
    {
        name: "Magnolia Lab",
        description: "A responsive website with lots of effects",
        thumnail: magnolialab,
        status: "released",
        type: "website",
        date: parse("13/09/2021", "dd/MM/yyyy", new Date),
        link: "https://magnolia-lab.com/",
    },
];