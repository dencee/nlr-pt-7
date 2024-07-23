<template>
    <div id="purple-gradient"></div>
    <div id="header-content">
      <img id="headshot" v-bind:src="student.headshotUrl" alt="Student Profile Photo">
      <div id="student-name">
        <h1>{{ student.fullName }}</h1>
        <p>{{ student.class }} Class | {{ student.location }}</p>
      </div>
      <aside id="header-aside">
        <h3>Social</h3>
        <ul>
            <li v-for="social in student.socials" v-bind:key="student.socials.icon">
                <a v-bind:href="social.url"><font-awesome-icon v-bind:icon="social.icon" /></a>
            </li>

          <!-- <li>www</li>
          <li>linkedin</li>
          <li>github</li>
          <li>x</li> -->
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
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'
export default {
    data() {
        return{
            student: {
                fullName: 'Student Name',
                class: 'Purple',
                location: 'New York, NY',
                socials: [
                    {icon: 'portfolioSite', url: '#'},
                    {icon: '<font-awesome-icon icon="linkedin" />', url: '#'},
                    {icon: 'github', url: '#'},
                    {icon: 'twitter', url: '#'}
                ],
                fanPage: '#',
                sideProjects: [
                    {projectName: 'Side project 1', link: '#'}, 
                    {projectName: 'Side project 2', link: '#'}
                ],
                aboutMe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A illo ad alias eligendi incidunt eum voluptatem amet facere nobis libero! Alias at corrupti, deserunt hic provident quis ipsa molestias ipsam?',
                headshotUrl: 'https://placehold.co/600x400'
            },
        }
    }
    
}
</script>


<style>
</style>