export const handdleAdd = () => {
    document
      .querySelector('.add-background-transition')
      .classList.add('background-transition-expand');
    setTimeout(() => {
      navigate('/new');
    }, 600);
  };
