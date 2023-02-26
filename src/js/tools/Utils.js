class Utils{
    static lerp(a, b, x){
        return a + (b-a) * x;
    }
    
    static fullInView(element){
        const rect = element.getBoundingClientRect();

        return rect.top<0 && rect.bottom>(window.innerHeight);
    }

    static inView(element){
        const rect = element.getBoundingClientRect();

        // element dans la vue:
        // le haut ou le bas sont entre 0 et la taille de l'ecran
        // pleinement en vue
        return (rect.top > 0 && rect.top < window.innerHeight)
        || (rect.bottom > 0 && rect.bottom < window.innerHeight)
        || fullInView(element);
    }
}