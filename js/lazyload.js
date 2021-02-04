const images = document.querySelectorAll('.feed img');
/* const options = {
  rootMargin: '100px',
};
const onObserv = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log(entry.target);
      const src = entry.target.dataset.src;
      const image = entry.target;
      image.src = src;
      image.classList.add('appear');
      observer.unobserve(image);
    }
  });
};
const io = new IntersectionObserver(onObserv, options);
images.forEach(image => io.observe(image)); */

// variante 2
const lazyLoad = target => {
  const options = {
    rootMargin: '100px',
  };
  const onObserv = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log(entry.target);
        const src = entry.target.dataset.src;
        const image = entry.target;
        image.src = src;
        image.classList.add('appear');
        observer.disconnect();
      }
    });
  };
  const io = new IntersectionObserver(onObserv, options);
  io.observe(target);
};
images.forEach(image => lazyLoad(image));
