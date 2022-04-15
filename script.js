document.addEventListener("DOMContentLoaded", showPageContent(), false);

function showPageContent() {
  const url = "http://localhost:5000/jobs";

  const container = document.querySelector("main");

  function showJobs(jobs) {
    jobs.forEach((job) => {
      // create div to contain person's info
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      // create elements with job's title, location, description
      const title = document.createElement("h2");
      title.textContent = job.title;

      const location = document.createElement("p");
      location.textContent = "location: ";
      const locationVal = document.createElement("span");
      locationVal.textContent = job.location;

      const description = document.createElement("p");
      description.textContent = "Description: ";
      const descriptionVal = document.createElement("span");
      descriptionVal.textContent = job.description;

      // append card to container
      container.appendChild(card);

      // append job title, location, description to card
      card.appendChild(title);
      card.appendChild(location);
      location.appendChild(locationVal);
      card.appendChild(description);
      description.appendChild(descriptionVal);
    });
  }

  function handleFetchError(err) {
    const error = document.createElement("p");
    error.textContent = `${err}`;
    container.appendChild(error);
  }

  fetch(url, {
    mode: "cors",
  })
    .then((response) => response.json())
    .then((data) => showJobs(data))
    .catch(err => handleFetchError(err));
}
