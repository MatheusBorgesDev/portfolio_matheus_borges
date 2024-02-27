import ProjectItem from "@/components/ui/ProjectItem";

const Projects = () => {
  return (
    <div
      id="header"
      className="flex flex-col h-auto gap-10 px-4 py-20 bg-gradient-to-b from-background to-foreground"
    >
      <div>
        <p className="text-md text-secondary font-bold opacity-80">
          {"<"}Working{"/>"}
        </p>
        <h2 className="text-[3.5rem] text-primary leading-[3rem] font-bold">
          Meus projetos
        </h2>
      </div>

      <div className="flex gap-8 flex-wrap justify-center">
        <ProjectItem
          imageUrl="https://images.unsplash.com/photo-1609534655988-3f5225c13553?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          projectName="My Coffee Place"
          projectDescription="Peça seu café de forma fácil."
        />

        <ProjectItem
          imageUrl="https://images.unsplash.com/photo-1609534655988-3f5225c13553?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          projectName="My Coffee Place"
          projectDescription="Peça seu café de forma fácil."
        />

        <ProjectItem
          imageUrl="https://images.unsplash.com/photo-1609534655988-3f5225c13553?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          projectName="My Coffee Place"
          projectDescription="Peça seu café de forma fácil."
        />

        <ProjectItem
          imageUrl="https://plus.unsplash.com/premium_photo-1674605365723-15e6749630f4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          projectName="Keep Moving!"
          projectDescription="Sua vida sempre em movimento."
        />

        <ProjectItem
          imageUrl="https://plus.unsplash.com/premium_photo-1674605365723-15e6749630f4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          projectName="Keep Moving!"
          projectDescription="Sua vida sempre em movimento."
        />

        <ProjectItem
          imageUrl="https://plus.unsplash.com/premium_photo-1674605365723-15e6749630f4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          projectName="Keep Moving!"
          projectDescription="Sua vida sempre em movimento."
        />

        <ProjectItem
          imageUrl="https://images.unsplash.com/photo-1620287920810-3f5b9746380c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          projectName="Take note"
          projectDescription="Anote o que quiser, quando quiser!"
        />

        <ProjectItem
          imageUrl="https://images.unsplash.com/photo-1620287920810-3f5b9746380c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          projectName="Take note"
          projectDescription="Anote o que quiser, quando quiser!"
        />

        <ProjectItem
          imageUrl="https://images.unsplash.com/photo-1620287920810-3f5b9746380c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          projectName="Take note"
          projectDescription="Anote o que quiser, quando quiser!"
        />
      </div>
    </div>
  );
};

export default Projects;
