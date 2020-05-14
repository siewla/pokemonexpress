module.exports = class Pokemon {
    constructor (name, img) {
        this.name = name;
        this.img = img;
    }
    
    getFormattedName () {
        return this.name[0].toUpperCase() + this.name.slice(1);
    }
};