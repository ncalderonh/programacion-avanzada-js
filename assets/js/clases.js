// Clase Animal
export class Animal {
    constructor(edad, comentarios) {
        this.edad = edad;
        this.comentarios = comentarios;
    }

    get Nombre() {
        return this.constructor.name;
    }

    get Edad() {
        return this.edad;
    }

    set Comentarios(nuevosComentarios) {
        this.comentarios = nuevosComentarios;
    }

    get Sonido() {
        return '';
    }
}

// Clase León
export class Leon extends Animal {
    constructor(edad, comentarios) {
        super(edad, comentarios);
        this.img = '../imgs/Leon.png';
    }

    Rugir() {
        return 'Rugido del león';
    }

    get Sonido() {
        return '../sounds/Rugido.mp3';
    }
}

// Clase Lobo
export class Lobo extends Animal {
    constructor(edad, comentarios) {
        super(edad, comentarios);
        this.img = '../imgs/lobo.jpg';
    }

    Aullar() {
        return 'Aullido del lobo';
    }

    get Sonido() {
        return '../sounds/Aullido.mp3';
    }
}

// Clase Oso
export class Oso extends Animal {
    constructor(edad, comentarios) {
        super(edad, comentarios);
        this.img = '../imgs/oso.jpg';
    }

    Gruñir() {
        return 'Gruñido del oso';
    }

    get Sonido() {
        return '../sounds/Gru単ido.mp3';
    }
}

// Clase Serpiente
export class Serpiente extends Animal {
    constructor(edad, comentarios) {
        super(edad, comentarios);
        this.img = '../imgs/Serpiente.jpg';
    }

    Sisear() {
        return 'Siseo de la serpiente';
    }

    get Sonido() {
        return '../sounds/Siseo.mp3';
    }
}

// Clase Águila
export class Aguila extends Animal {
    constructor(edad, comentarios) {
        super(edad, comentarios);
        this.img = '../imgs/Aguila.png';
    }

    Chillar() {
        return 'Chillido del águila';
    }

    get Sonido() {
        return '../sounds/Chillido.mp3';
    }
}
