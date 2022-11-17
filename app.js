import { getItems } from './lib/supabase.js';
import { renderItemCard } from './lib/render-utils.js';

const candyContainer = document.getElementById('candy-list-container');
const groceriesContainer = document.getElementById('groceries-list-container');
const genderContainer = document.getElementById('gender-list-container');

async function handleList(domain, container) {
    // get the items
    const response = await getItems(domain);
    // exit on err
    if (response.error) return;
    // iterate rendering and adding to dom
    for (const item of response.data) {
        const div = renderItemCard(domain, item);
        container.append(div);
    }
}

window.addEventListener('load', () => {
    handleList('candies', candyContainer);
    handleList('groceries', groceriesContainer);
    handleList('genders', genderContainer);
});
