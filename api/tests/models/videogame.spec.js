const { Videogame, conn } = require('../../src/db.js');
const { expect } = require('chai');
//......TEST MODEL BACK GAME.........//
describe('Videogame model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('No se puede conectar a la base de datos:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Videogame.sync({ force: true }));
    describe('name', () => {
      it('Debería arrojar un error si el nombre es nulo', (done) => {
        Videogame.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('Debería arrojar un error si el description es nulo', (done) => {
        Videogame.create({ name: 'Tomb Raider' })
          .then(() => done(new Error('Se requiere una description valida')))
          .catch(() => done());
      });
      it('Debería arrojar un error si las platforms son nulas',(done)=>{
        Videogame.create({
          name: 'Tomb Raider',
          description: "A cinematic revival of the series in its action third person form, Tomb Rider follows Lara in her least experience period of life – her youth. Heavily influenced by Naughty Dog’s “Uncharted”, the game is a mix of everything, from stealth and survival to combat and QTE action scenes."
        })
        .then(()=>done (new Error('Se requiere validar la platforms')))
        .catch(()=> done())
      });
      it('Debería funcionar cuando es un name válido, una description válida y  platforms', ()=>{
        Videogame.create({
          name:'Tomb Raider',
          description: 'A cinematic revival of the series in its action third person form, Tomb Rider follows Lara in her least experience period of life – her youth. Heavily influenced by Naughty Dog’s “Uncharted”, the game is a mix of everything, from stealth and survival to combat and QTE action scenes.',
          platforms: ["Xbox OnePlayStation 4PCXbox 360PlayStation 3macOS"]
        })
      })
    });
  });
});