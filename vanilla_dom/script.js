document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  // --- your code here!
  const submitAnswer = (e) => {
    e.preventDefault();

    const text = document.querySelector(".favorite-input");
    const favorite = text.value;

    const newLi = document.createElement("li")
    newLi.textContent = favorite;
    const list = document.getElementById("sf-places")
    list.appendChild(newLi);
    text.remove()
  };
  
  const listSubmitButton = document.querySelector(".favorite-submit");
  listSubmitButton.addEventListener("click", submitAnswer);

  // adding new photos

  const toggleForm = (e) => {
    showForm = document.querySelector(".photo-form-container")
    if (showForm.className === "photo-form-container hidden") {
      showForm.className = "photo-form-container";
    } else {
      showForm.className = "photo-form-container hidden";
    }
  }
  const photoToggle = document.querySelector(".photo-show-button");
  photoToggle.addEventListener("click", toggleForm)

  const handlePhotoSubmit = (e) => {
    const photoInput = document.querySelector(".photo-url-input")
    const photoUrl = photoInput.value;
    // photoInput.value = ""

    const newImg = document.createElement("img");
    newImg.src = photoUrl
    const newPhotoLi = document.createElement("li")
    newPhotoLi.append(ChildnewImg);

    const photosList = document.querySelector(".dog-photos")
    photosList.appendChild(newLi);
  }

  const photoSubmit = document.querySelector(".photo-url-submit");
  photoSubmit.addEventListener("click", handlePhotoSubmit);
  // --- your code here!



});
