export function isScrollable(element: HTMLElement) {
    const hasHorizontalScroll = element.scrollWidth > element.clientWidth
    const hasVerticalScroll = element.scrollHeight > element.clientHeight
    return hasHorizontalScroll || hasVerticalScroll
}

export function capitalizeFirst(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1)
}
