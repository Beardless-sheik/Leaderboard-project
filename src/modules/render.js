const renderScores = (scoresArray, htmlParentToRenderTo) => {
  htmlParentToRenderTo.innerHTML = '';
  if (scoresArray.length === 0) {
    htmlParentToRenderTo.innerHTML += '<li> No names or scores are present <li>';
  } else {
    scoresArray.forEach((element, index) => {
      if (index % 2 === 0) {
        htmlParentToRenderTo.innerHTML += `<li> ${element.name}: ${element.score} </li>`;
      } else {
        htmlParentToRenderTo.innerHTML += `<li class="colured-background"> ${element.name}: ${element.score} </li>`;
      }
    });
  }
};

export default renderScores;
