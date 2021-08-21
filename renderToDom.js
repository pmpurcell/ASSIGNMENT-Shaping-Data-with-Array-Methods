const renderToDom = (divId, content) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = content;

    console.log(selectedDiv);
    console.log(content);
  };

export default renderToDom;