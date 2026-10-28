const date = () => {
    const d = new Date();
    const today = d.toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' });
    return today;
}

const dateElements = document.getElementsByClassName('dyn-date');
for (let i = 0; i < dateElements.length; i++) {
    dateElements[i].textContent = date();
}