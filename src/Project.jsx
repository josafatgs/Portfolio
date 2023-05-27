
function Project({projectId, projectName, projectImageSrc, nextProject} ) {

  return (
      <section id={projectId} className={"bg-black min-h-screen pt-12 pb-10 grid relative"}>

          <h3 className={"text-8xl text-blue-950 pb-10"}>
            {projectName}
          </h3>
          <img src={projectImageSrc} alt={"Imagen de Proyecto"} className={"place-self-center"} />
          <a href={"#"}>Ver</a>

          {
              nextProject ?
              <a href={`#${nextProject}`} >Siguiente Proyecto <i>&darr;</i></a> :
              <a href={"Inicio"} > Volver al Inicio</a>
          }

      </section>
  );
}
export default Project;