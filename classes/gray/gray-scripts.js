import { createFanPages } from '../../js/scripts.js'

const classInfo = [];

classInfo.push({ name: "Abdullah Almanasseer",  fanPageUrl: "https://abdullah5688.github.io/fan-page/" });
classInfo.push({ name: "Bobby Hintz",           fanPageUrl: "https://zeppelin8806.github.io/stormlight-fan-page/" });
classInfo.push({ name: "Elijah Gersims",        fanPageUrl: "https://elijahgersims.github.io/my-fan-page/" });
classInfo.push({ name: "Cailee Abney",          fanPageUrl: "https://cabney001.github.io/fanpage/" });
classInfo.push({ name: "Elizabeth Anderson",    fanPageUrl: "https://eanderson321.github.io/my-fan-page/" });
classInfo.push({ name: "Finn Simmons",          fanPageUrl: "https://finnsimmons.github.io/fanpage/" });
classInfo.push({ name: "Megan Schrock",         fanPageUrl: "https://winren92.github.io/fan-page/" });
classInfo.push({ name: "Raina Vincelli",        fanPageUrl: "https://rainavincelli.github.io/Fan-page/" });
classInfo.push({ name: "Rose O'Malley",         fanPageUrl: "https://rosieomusic.github.io/fanpage/" });

window.addEventListener('DOMContentLoaded', event => {

    createFanPages(classInfo);

});