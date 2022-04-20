import { heroes } from "../data/heroes";

export const getHeroById = (idHero) => {
    return heroes.filter(hero => hero.id === idHero);
};

export const getHeroesByPublisher = (publisher) => {
    isAValidPublisher(publisher);
    return heroes.filter(hero => hero.publisher === publisher);
};

const isAValidPublisher = publisher => {
    const validPublisher = ['DC Comics', 'Marvel Comics'];
    if( !validPublisher.includes(publisher) ){
        throw new Error(`${publisher} is not a valid publisher`);
    }
}