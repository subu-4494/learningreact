
function customrender(reactelement,container) {
    const domelement = document.createElement(reactelement.type);
    domelement.innerHTML = reactelement.children;
    for (const prop in reactElement.props) {
        if(prop==='children') continue;
        domelement.setAttribute(prop,reactElement.props[prop]);
    }
    container.appendChild(domelement);
}

const reactElement = {
    type: 'a',
    props: {
            href: 'https/google.com',
            target: '_blank'
    },
    children : 'click me to visit google'

}


const mainroot=document.querySelector('#root')

customrender(reactElement,mainroot);