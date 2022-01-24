const renderScores = (scoresArray, htmlParentToRenderTo) => {
  htmlParentToRenderTo.innerHTML = '';
  scoresArray.forEach((element, index) => {
    if (index % 2 === 0) {
      htmlParentToRenderTo.innerHTML += `<li> ${element.name}: ${element.score} </li>`;
    } else {
      htmlParentToRenderTo.innerHTML += `<li class="colured-background"> ${element.name}: ${element.score} </li>`;
    }
  });
};

export default renderScores;
