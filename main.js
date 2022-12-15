function videoPlay () {
    const urlsecreta = 'https://PlatziClase';
    console.log('Se esta reproduciendo desde la url' + urlsecreta);
}

function videoStop () {
    const urlsecreta = 'https://PlatziClase';
    console.log('Pausamos la url' + urlsecreta);

}

class PlatziClass {
    constructor({
        name,
        VideoID,
    }) {
        this.name = name;
        this.VideoID = videoID;
    }

reproducir() {
    videoPlay(this.videoID);
}

pausar() {
    videoStop(this.VideoID);
}

}


class Course {
    constructor( {
        name ,
        courses = [],
        isFree = false,
        lang = 'spanish',
    }) {
        this._name = name;
        this.courses = courses;
        this.isFree = isFree;
        this.lang = lang;
    }

    get name() {
        return this._name;
    }

    set name(nuevonombrecito) {
        if(nuevonombrecito === 'Curso Malito de programacion basica') {
            console.error('Web... no');
        } else {
            this._name = nuevonombrecito;
        }
    }

} 

const cursoProgramacionBasica = new Course({
    name: 'Curso Gratis de Programacion Gratis',
    isFree: true,
});

const CursodefinitivoHTML = new Course({
    name: 'Curso definitivo de HTML y CSS',
    lang: 'english',
});

const CursopracticoHTML = new Course({
    name: 'Curso practica de HTML y CSS',
});


class LearningPath {
    constructor( {
        name,
        courses = [],
    }) {
        this.name = name;
        this.courses = courses;
    }
} 

const escuelaWeb = new LearningPath ({
    name: 'Escuela de Desarrollo Web',
    courses: [
        cursoProgramacionBasica,
        CursodefinitivoHTML,
        CursopracticoHTML,
    ]
});

const escuelaData = new LearningPath({
    name: 'Escuela Data science',
    courses: [
        cursoProgramacionBasica,
        CursodefinitivoHTML,
        CursopracticoHTML,
        'Data',
        'Science',
    ],
})

const escuelaVgs = new LearningPath({
    name: 'Escuela de Videojuegos',
    courses: [
        cursoProgramacionBasica,
        CursodefinitivoHTML,
        CursopracticoHTML,
        'Video',
        'Juegos',
    ],
})


class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook
        };
        this.approvedCourses = [] = approvedCourses;
        this.learningPaths = [] = learningPaths;
    }
}

class FreeStudent extends Student{
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) {
        if (newCourse.lang !== 'english') {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn('Lo sentimos, ' + this.name + "No puedes tomar cursos en ingles");
        }
    }
}

class BasicStudent extends Student{
    constructor(props) {
        super(props);
    }
    approveCourse(newCourse) {
            this.approvedCourses.push(newCourse);
    }
}

class ExpertStudent extends Student{
    constructor(props) {
        super(props);
    }
}

const juan2 = new Student({
    name: 'JuanDC',
    username: 'juandc'
})