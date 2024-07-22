const model = require('./system/model');

model.init(()=>
{
    model.getKategoria(kategoria => {console.log(kategoria);});
    model.getKategoriakById(2, kategoriak => {console.log(kategoriak);});
    
    model.close();
});
    
      