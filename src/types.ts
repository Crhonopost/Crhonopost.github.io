export interface Project {
    title: string,
    shortDescription: string,
    context: string,
    description: string,
    difficulties: string,
    experience: string,
    tags: string[],
    caroussel: string[],
    links: Link[]
}


export interface Link {
    url: string,
    name?: string,
    iconPath?: string
}