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

type ProjectProp = {
    name: string,
    description: string,
    thumnail: string,
    thumnailBlur?: string,
    status: 'released'|'in-progress'|'suspend'|'failed';
}

export const AllProjects: ProjectProp[] = [
    {
        name: "Don't Spend All Your Coins",
        description: "This project is made for Brackeys' Community Game Jam in August of 2019.",
        thumnail: dontspendallyourcoins,
        status: "released",
    },
    {
        name: "Bushido",
        description: "Experience the romance of Bushi. A project made for Mix and Game Jam 2019.",
        thumnail: bushi,
        status: "released",
    },
    {
        name: "Repair-grandson",
        description: "A project made for the Global Game Jam 2020.",
        thumnail: repairgrandson,
        status: "released",
    },
    {
        name: "Hole Lifes",
        description: "Some little creatures are exploring the great hole under the ground.",
        thumnail: holelifes,
        status: "released",
    },
    {
        name: "Onikiri",
        description: "An action platformer game with rewind ability.",
        thumnail: onikiri,
        status: "released",
    },
    {
        name: "Mánagarmr",
        description: "The journey of a White Wolf is carrying her babies back to the cave.",
        thumnail: managarmr,
        status: "released",
    },
    {
        name: "Ghostly Delivery",
        description: "Ghosts are delivery boys.",
        thumnail: ghostlydelivery,
        status: "released",
    },
    {
        name: "Forest Defenders",
        description: "A tower defense game that blend elemental essences to form things.",
        thumnail: forestdefenders,
        status: "failed",
    },
    {
        name: "Morning Star",
        description: "Son of the dawn, chaoize all the lands!",
        thumnail: morningstar,
        status: "released",
    },
    {
        name: "Steamtown",
        description: "A card game, where you play cards for the enemy at the same time.",
        thumnail: steamtown,
        status: "released",
    },
    {
        name: "Mind At Night",
        description: "It's not real... Or is it?",
        thumnail: mindatnight,
        status: "released",
    },
    {
        name: "Art of Lifes",
        description: "Some slime like creatures living on the Great Land.",
        thumnail: artoflifes,
        thumnailBlur: artoflifesBlur,
        status: "in-progress",
    },
    {
        name: "Magnolia Lab",
        description: "A responsive website with lots of effects.",
        thumnail: magnolialab,
        status: "released",
    },
];