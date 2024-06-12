import { createFanPages } from '../../js/scripts.js'

const classInfo = [];

classInfo.push({ name: "Brandon Cheuk",     fanPageUrl: "https://en.wikipedia.org/wiki/Purple" });
classInfo.push({ name: "Charlie McNeece",   fanPageUrl: "https://itsboblemon.github.io/nlr-7-fan-page/" });
classInfo.push({ name: "Guangyuan Sun",     fanPageUrl: "https://gysungrad.github.io/fan-page/" });
classInfo.push({ name: "Justin Wong",       fanPageUrl: "https://jwong209.github.io/shredders-revenge-fanpage/" });
classInfo.push({ name: "Kyros Dailey",      fanPageUrl: "https://kyrosd.github.io/fan-page-mkgee/" });
classInfo.push({ name: "Lena Johnson",      fanPageUrl: "https://lenajhnsn.github.io/fan-page/" });
classInfo.push({ name: "Maia Sanders",      fanPageUrl: "https://maiasanders.github.io/who-is-who-fan-page/" });
classInfo.push({ name: "Regis Knox",        fanPageUrl: "https://bigreeg1089.github.io/fan-page/" });
classInfo.push({ name: "Tyler Mullin",      fanPageUrl: "https://tylermullin.github.io/fan-page/" });

window.addEventListener('DOMContentLoaded', event => {

    createFanPages(classInfo);

});