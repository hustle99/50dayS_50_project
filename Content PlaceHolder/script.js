const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");

const animated_bgs_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(() => {
  getData();
}, 2500);

function getData() {
  header.innerHTML =
    '<img src="https://media.istockphoto.com/id/696063644/photo/old-ways-wont-open-new-doors.webp?b=1&s=170667a&w=0&k=20&c=iG92E2DWn3wSt0ahyHCwcXmmKF-UWQa4vSiyeAPWknE=" alt="img"/>';
  title.innerHTML = " loprem ispusm dolor sit amet";
  excerpt.innerHTML =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae deserunt odio expedita dolor veniam velit doloribus ut aperiam, id officia aliquid dicta a, in, corrupti nam officiis. Assumenda, eaque enim.";
  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/77.jpg" alt="nakf" />';
  name.innerHTML = "Prathmesh ";
  date.innerHTML = "Nov 19, 1999";

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bgs_texts.forEach((bg) => bg.classList.remove("animated-text"));
}
