const API_BASE = 'https://opposite-aubree-te-instructor-9a3d6640.koyeb.app';

/**
 * Only attach listeners to elements after DOM
 * loads when all DOM nodes are available
 */
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('login-submit-btn').addEventListener('click', (event) => {
        event.preventDefault();
        onPostLogin();
    });
});

function onPostLogin(){

    const responseEl = document.getElementById('login-response-data');
    const usernameEl = document.getElementById('username');
    const passwordEl = document.getElementById('password');
  
    const postData = {
        username: usernameEl.value,
        password: passwordEl.value
    };
  
    fetch(`${API_BASE}/login`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(postData)
    })
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        responseEl.innerText = JSON.stringify(data);
        usernameEl.value = '';
        passwordEl.value = '';
    })
    .catch(error => {
        console.log('error ', error)
        passwordEl.value = '';
    });
}

/**
 * Expects an array of objects containing student info objects
 * with the following properties:
 *  - name
 *  - fanPageUrl
 * @param {Array<Object>} classInfo 
 */
export function createFanPages(classInfo){
    const cardsEl = document.querySelector('.fan-page-cards');
    const template = document.getElementById('card-template');

    for(const studentInfo of classInfo) {
        
        const clone = document.importNode(template.content, true);
        
        clone.querySelector('.card-header').innerText = studentInfo.name;
        clone.querySelector('iframe').src = studentInfo.fanPageUrl;
        clone.querySelector('.fan-site-button').addEventListener('click', openUrlInNewTab);
        cardsEl.appendChild(clone);
    }
}

function openUrlInNewTab(event){
    const iframeSite = event.target.previousElementSibling;
    const url = iframeSite.getAttribute('src');
    const w = window.open(url, "_blank");
}
