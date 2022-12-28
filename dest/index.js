"use strict";
(() => {
  // src/dom/element.js
  function append(child) {
    if (typeof child === "string")
      this.innerHTML = child;
    else
      this.appendChild(child);
  }
  function appendAll(children) {
    for (const child of children)
      this.actions.append(child);
  }
  function addClass(cls) {
    const arr = cls.split(" ");
    for (const item of arr)
      this.classList.add(item);
  }
  function removeClass(cls) {
    const arr = cls.split(" ");
    for (const item of arr)
      this.classList.remove(item);
  }
  function style(styles) {
    for (const [property, value] of Object.entries(styles))
      this.style[property] = value;
  }
  function addProperties(element, attribs, children) {
    element.data = {};
    element.dom = {};
    element.dom.append = append.bind(element);
    element.dom.appendAll = appendAll.bind(element);
    element.dom.addClass = addClass.bind(element);
    element.dom.removeClass = removeClass.bind(element);
    element.dom.style = style.bind(element);
    if (attribs.style) {
      element.dom.style(attribs.style);
      delete attribs.style;
    }
    if (attribs)
      for (const [attrib, value] of Object.entries(attribs))
        element.setAttribute(attrib, value);
    if (children) {
      if (Array.isArray(children))
        element.actions.appendAll(children);
      else
        element.actions.append(children);
    }
  }
  function create(tag, attribs, children) {
    const element = document.createElement(tag);
    addProperties(element, attribs, children);
    return element;
  }
  function createFromHTML(html, attribs, children) {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = html;
    const element = wrapper.firstElementChild;
    addProperties(element, attribs, children);
    return element;
  }
  var element_default = {
    create,
    createFromHTML
  };

  // src/components/button/button.js
  function Button(props) {
    const theme = props.theme ? props.theme : {
      bg: "bg-slate-700",
      bgHover: "hover:bg-slate-600",
      border: "border-slate",
      text: "text-slate"
    };
    let cls = "inline-flex justify-center rounded-lg text-sm font-semibold font-body py-2 px-4 transition";
    if (props.type === "outline") {
    }
    const content = [];
    if (props.svg)
      content.push(props.svg);
    content.push(element_default.create("span", {}, props.value));
    const domElement = element_default.create("button", { class: cls }, content);
    return domElement;
  }
  var button_default = Button;

  // src/index.js
  var src_default = element_default;
})();
