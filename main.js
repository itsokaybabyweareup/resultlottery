const date = () => {
    const d = new Date();
    const today = d.toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' });
    return today;
}

document.getElementById('dyn-date').textContent = date();