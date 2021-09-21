console.log("This is a CV-Screener");

// data is an Array of Objects which contains information about the candidates
const data = [
  {
    name: "Anukarsh Raj",
    age: 18,
    city: "Noida",
    language: "C++ | JavaScript",
    framework: "Django",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Aayushi Srivastav",
    age: 18,
    city: "Noida",
    language: "JavaScript",
    framework: "React",
    image: "https://randomuser.me/api/portraits/women/23.jpg",
  },
  {
    name: "Satwik Dwivedi",
    age: 18,
    city: "Noida",
    language: "Hindi | English",
    framework: "IAS",
    image: "https://randomuser.me/api/portraits/men/89.jpg",
  },
  {
    name: "Lucky Raja",
    age: 18,
    city: "Noida",
    language: "C++ | Python",
    framework: "Django | Flask",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
  },
  {
    name: "Divyam Garg",
    age: 18,
    city: "Noida",
    language: "C++ | JavaScript",
    framework: "Angular",
    image: "https://randomuser.me/api/portraits/men/27.jpg",
  },
];

// cv iterator
function cvIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}
const candidates = cvIterator(data);

nextCV();

// button listener for Next button
const next = document.getElementById("next");
next.addEventListener("click", nextCV);

function nextCV() {
  const currentCandidate = candidates.next().value;

  let image = document.getElementById("image");
  let profile = document.getElementById("profile");

  if (currentCandidate != undefined) {
    image.innerHTML = `<img src='${currentCandidate.image}'>`;
    profile.innerHTML = `<ul class="list-group">
      <li class="list-group-item">${currentCandidate.name}</li>
      <li class="list-group-item">${currentCandidate.age} Years old</li>
      <li class="list-group-item">Lives in ${currentCandidate.city}</li>
      <li class="list-group-item">${currentCandidate.language}</li>
      <li class="list-group-item">${currentCandidate.framework}</li>  
    </ul>`;
  }
  else{
      alert("No more Applications to show")
      window.location.reload();
  }
}
