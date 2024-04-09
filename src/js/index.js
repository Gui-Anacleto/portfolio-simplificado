const btnShowProjects = document.querySelector('.btn-mostrar-projetos');
const intiveProjects = document.querySelectorAll('.projeto:not(.ativo)');

btnShowProjects.addEventListener('click', () => {
  ShowMoreProjects();

  hideBtnShowMore();
});

function ShowMoreProjects() {
  intiveProjects.forEach(intiveProject => {
    intiveProject.classList.add('ativo');
  });
}

function hideBtnShowMore() {
  btnShowProjects.classList.add('remover');
}