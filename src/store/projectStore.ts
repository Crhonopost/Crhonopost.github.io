import { i18n } from "@/i18n/translations";
import { Project } from "@/types";
import { defineStore } from "pinia";

const { t } = i18n

export default defineStore("projectStore",{
  state:() => ({
    projectOpened: false,
    selectedProject: {} as Project,
    projects: [
      {
        title: t('projects.richVote.title'),
        shortDescription: t('projects.richVote.shortDescription'),
        tags: ["HTML", "CSS", "PHP", "MySQL"],
        context:t('projects.richVote.context'),
        description:t('projects.richVote.description'),
        difficulties:t('projects.richVote.difficulties'),
        experience:t('projects.richVote.experience'),
        caroussel: ['assets/RichVote/RichVote_liste.png']
      },
      {
        title: t('projects.fluid.title'),
        shortDescription: t('projects.fluid.shortDescription'),
        tags: ["C#", "Javascript", "webGl", "Godot"],          
        context:t('projects.richVote.context'),
        description:t('projects.fluid.description'),
        difficulties:t('projects.fluid.difficulties'),
        experience:t('projects.fluid.experience')
      },
      {
        title: t('projects.behaviour.title'),
        shortDescription: t('projects.behaviour.shortDescription'),
        tags: ["C#", "Godot"],
        context:t('projects.behaviour.context'),
        description:t('projects.behaviour.description'),
        difficulties:t('projects.behaviour.difficulties'),
        experience:t('projects.behaviour.experience')
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
