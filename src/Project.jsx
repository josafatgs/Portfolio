
function Project({projectId, projectName, projectImageSrc} ) {
  return (
      <section id={projectId} className={"bg-black min-h-screen pt-12 pb-10"}>
        <h3 className={"text-8xl"}>
          {projectName}
        </h3>
        <img src={projectImageSrc} alt={"Imagen de Proyecto"}/>
      </section>
  );
}
export default Project;