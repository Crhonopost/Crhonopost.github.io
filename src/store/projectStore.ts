import { i18n } from "@/i18n/translations";
import { Project } from "@/types";
import { defineStore } from "pinia";

const { t } = i18n

function getProjectFromTranslate(projectName: string): Partial<Project>{
  return {
    title: t(`projects.${projectName}.title`),
    shortDescription: t(`projects.${projectName}.shortDescription`),
    context:t(`projects.${projectName}.context`),
    description:t(`projects.${projectName}.description`),
    difficulties:t(`projects.${projectName}.difficulties`),
    experience:t(`projects.${projectName}.experience`)
  }
}

export default defineStore("projectStore",{
  state:() => ({
    projectOpened: false,
    selectedProject: {} as Project,
    projects: [
      {
        ...getProjectFromTranslate('kapix'),
        tags: ["VueJS", "NestJS", "TypeScript", "GraphQL"],
        caroussel: ['assets/Kapix/Kapix-postgis-test.png', 'assets/Kapix/Kapix-postgis-data.png', 'assets/Kapix/Kapix-npm-collab.png']
      },
      {
        ...getProjectFromTranslate('richVote'),
        tags: ["HTML", "CSS", "PHP", "MySQL"],
        caroussel: ['assets/RichVote/RichVote_liste.png']
      },
      {
        ...getProjectFromTranslate('fluid'),
        tags: ["C#", "Javascript", "webGl", "Godot"],
        caroussel:["assets/Fluid/illustration.png", "assets/Fluid/fluid.mp4"]
      },
      {
        ...getProjectFromTranslate('behaviour'),
        tags: ["C#", "Godot"],
      }
    ] as Project[]

  }),
  actions: {
    openProject(project: Project) {
      this.projectOpened = true;
      this.selectedProject = project;
    },
    closeProject(){
      this.projectOpened = false;
      this.selectedProject = {} as Project;
    }
  }
});
