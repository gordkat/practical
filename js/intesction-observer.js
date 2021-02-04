const treRef = document.querySelector('.tre');
const io = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => console.log(entry));
});
io.observe(treRef);
