<template>
  <div id="app" class="container is-flex">
    <Header :projectName="projectName" />
    <main class="main-wrapper">
      <TodoWrapper />
    </main>
    <Footer />
  </div>
</template>

<script>

import Header from './Components/Layout/Header'
import Footer from './Components/Layout/Footer'
import TodoWrapper from './Components/Todo/TodoWrapper'

export default {
  name: 'app',
  components: {
    Header,
    Footer,
    TodoWrapper
  },
  data () {
    return {
      projectName: 'Todo List',
    }
  },
}
</script>

<style>

h1, h2, h3, h4, h5 {
  font-family: "Roboto Slab", serif;
  font-weight: 700;
}
.eng {
  font-family: "Roboto Slab", serif;
  font-weight: 700;
}

.del {
  text-decoration: line-through;
}

.delete {
  color: red;
}

#app {
  font-family: "Roboto", sans-serif;
  color: #333;
  padding: 50px 10px 0 10px;
}

.container.is-flex {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}

.header-wrapper {
  margin-bottom: 40px;
}

.main-wrapper {
  flex-grow: 1;
  position: relative;
}

.footer-wrapper {
  border-top: 1px solid rgba(0,0,0,.1);
  padding: 20px 0;
  text-align: center;
}

section > *:last-child, div:not(.layout-row) > *:last-child, ul:not(.layout-row) > *:last-child, ol:not(.layout-row) > *:last-child, li > *:last-child, dl > *:last-child, dt > *:last-child, dd > *:last-child, th > *:last-child, td > *:last-child, address > *:last-child, blockquote > *:last-child {
  margin-bottom: 0;
}


.custom-control-label {
  cursor: pointer;
}



.btn-light.is-active {
  color: #fff;
  background-color: #007bff;
}

.animate-enter {
  opacity: 0;
  transform: translateY(-20px)
}
.animate-enter-active, .animate-leave-active {
  transition: all .3s ease
}
.animate-leave-to {
  opacity: 0;
  transform: translateY(20px)
}

</style>


