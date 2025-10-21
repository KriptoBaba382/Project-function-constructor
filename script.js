function DomElement(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}

DomElement.prototype.createElement = function () {
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
    }

    element.style.cssText = `
        height: ${this.height}px;
        width: ${this.width}px;
        background: ${this.bg};
        font-size: ${this.fontSize}px;
        margin: 10px 0;
        padding: 20px;
        border-radius: 5px;
        box-sizing: border-box;
    `;

    element.textContent = `Это элемент с селектором: ${this.selector}`;
    document.body.appendChild(element);

    return element;
};

const myElement = new DomElement('.my-block', 120, 200, 'lightcoral', 16);
myElement.createElement();