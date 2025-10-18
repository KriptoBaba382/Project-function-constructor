function DomElement(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}
DomElement.prototype.createElement = function() {
    let element;
    
    if (this.selector.startsWith('.')) {
        element = document.createElement('div');
        element.className = this.selector.slice(1);
    } else if (this.selector.startsWith('#')) {
        element = document.createElement('p');
        element.id = this.selector.slice(1);
    } else {
        console.error('Селектор должен начинаться с . или #');
        return null;
    },
    