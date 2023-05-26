import './App.css';
import './tailwind.css';

import Project from "./Project";

function App() {

  return (
    <>
        <section className={"bg-black min-h-screen pt-12"}>
            <h1 className={"text-white pb-8"}>
                Soy Josafat, un geek apasionado de la programación. Me encanta sumergirme en líneas de código y crear soluciones sorprendentes. Mi mente curiosa siempre busca nuevos desafíos para superar y llevar mi habilidad al siguiente nivel.
            </h1>
            <h2>
                <a href={"#project-one"}>Ver Proyectos <i>&darr;</i></a>
            </h2>
        </section>

        <Project projectId={"project-one"} projectName={"Proyecto Numero Uno"} projectImageSrc={"#"} />

    </>
  );
}

export default App
