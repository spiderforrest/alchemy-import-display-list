// generate small item cards for the list
export function renderItemCard(domain, item) {
    // make elements
    const div = document.createElement('div');
    const h3 = document.createElement('h3');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');

    // add a class to the surrounding div
    div.classList.add(`${domain}-item`);
    div.classList.add('item');

    // set attributes
    h3.textContent = item.name;
    p1.textContent = item.p1;
    p2.textContent = item.p2;
    // assemble the thing
    div.append(h3, p1, p2);
    return div;
}
