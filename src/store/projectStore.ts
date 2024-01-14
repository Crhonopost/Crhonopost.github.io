import { i18n } from "@/i18n/translations";
import { Project } from "@/types";
import { defineStore } from "pinia";
import { ComputedRef, computed } from "vue";

const { t } = i18n

function getProjectFromTranslate(projectName: string): Project{
  return {
    title: t(`projects.${projectName}.title`),
    shortDescription: t(`projects.${projectName}.shortDescription`),
    context:t(`projects.${projectName}.context`),
    description:t(`projects.${projectName}.description`),
    difficulties:t(`projects.${projectName}.difficulties`),
    experience:t(`projects.${projectName}.experience`),
    caroussel: [],
    tags: []
  }
}

export default defineStore("projectStore",{
  state:() => ({
    projectOpened: false,
    selectedProject:{} as ComputedRef<Project>,
    projects: [
      computed<Project>(() => {
        return{
        ...getProjectFromTranslate('kapix'),
        tags: ["VueJS", "NestJS", "TypeScript", "GraphQL"],
        caroussel: ['assets/Kapix/Kapix-postgis-test.png', 'assets/Kapix/Kapix-postgis-data.png', 'assets/Kapix/Kapix-npm-collab.png']
      }
    }),
    computed<Project>(() => {
      return{
        ...getProjectFromTranslate('richVote'),
        tags: ["HTML", "CSS", "PHP", "MySQL"],
        caroussel: ['assets/RichVote/RichVote_liste.png']
      }}),
      computed<Project>(() => {
        return{
        ...getProjectFromTranslate('fluid'),
        tags: ["C#", "Javascript", "webGl", "Godot"],
        caroussel:["assets/Fluid/illustration.png", "assets/Fluid/fluid.mp4"]
      }}),
      computed<Project>(() => {
        return{
        ...getProjectFromTranslate('behaviour'),
        tags: ["C#", "Godot"],
      }})
    ]

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
