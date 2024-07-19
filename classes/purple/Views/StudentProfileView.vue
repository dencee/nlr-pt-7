<template>
    <div id="purple-gradient"></div>
    <div id="header-content">
      <img id="headshot" src="https://placehold.co/600x400" alt="Student Profile Photo">
      <div id="student-name">
        <h1>Student Name</h1>
        <p>Purple Class | Location</p>
      </div>
      <aside id="header-aside">
        <h3>Social</h3>
        <ul>
          <li>www</li>
          <li>linkedin</li>
          <li>github</li>
          <li>x</li>
        </ul>
        <h3>Fan Page</h3>
        <ul>
          <li>www.fanpage.com</li>
        </ul>
        <h3>Side Projects</h3>
        <ul>
          <li>www.project.com</li>
          <li>www.project.com</li>
          <li>www.project.com</li>
        </ul>
    </aside>
  </div>
</template>

<script>
export default {
    data() {
        return{
            student: {
                fullName: '',
                class: '',
                location: '',
                portfolioSite: '',
                linkedin: '',
                github: '',
                twitter: '',
                fanPage: '',
                sideProjects[]: {
                    link //THIS IS WHERE WE ARE
                }
                },
            }
        }
    }
}
</script>