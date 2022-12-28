'use strict';

function append(child)
{
    if (typeof child === typeof "") this.innerHTML = child;
    else this.appendChild(child);
}

function appendAll(children)
{
    for (const child of children) this.actions.append(child);
}

function addClass(cls)
{
    const arr = cls.split(" ");
    for (const item of arr) this.classList.add(item);
}

function removeClass(cls)
{
    const arr = cls.split(" ");
    for (const item of arr) this.classList.remove(item);
}

function style(styles)
{
    for (const [property, value] of Object.entries(styles)) this.style[property] = value;
}

function addProperties(element, attribs, children)
{
    element.data = {};
    element.dom = {};
    element.dom.append = append.bind(element);
    element.dom.appendAll = appendAll.bind(element);
    element.dom.addClass = addClass.bind(element);
    element.dom.removeClass = removeClass.bind(element);
    element.dom.style = style.bind(element);

    if (attribs.style)
    {
        element.dom.style(attribs.style);
        delete attribs.style;
    }

    if (attribs) for (const [attrib, value] of Object.entries(attribs)) element.setAttribute(attrib, value);

    if (children)
    {
        if (Array.isArray(children)) element.actions.appendAll(children);
        else element.actions.append(children);
    }
}

function create(tag, attribs, children)
{
    const element = document.createElement(tag);
    addProperties(element, attribs, children);
    return element;
}

function createFromHTML(html, attribs, children)
{
    const wrapper = document.createElement('div');
    wrapper.innerHTML = html;
    const element = wrapper.firstElementChild;
    addProperties(element, attribs, children);
    return element;
}

export default {
    create,
    createFromHTML
};