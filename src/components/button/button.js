'use strict';
import $ from '../../dom/element';

function Button(props)
{
    const theme = props.theme ? props.theme : {
        bg: "bg-slate-700",
        bgHover: "hover:bg-slate-600",
        border: "border-slate",
        text: "text-slate"
    };

    let cls = "inline-flex justify-center rounded-lg text-sm font-semibold font-body py-2 px-4 transition";
    if (props.type === "outline")
    {
        
    }
    
    const content = [];
    if (props.svg) content.push(props.svg);
    content.push($.create("span", {}, props.value));

    const domElement = $.create("button", { class: cls }, content);

    return domElement;
}

export default Button;