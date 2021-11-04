<template>
    <div class="contact">
     <b-container>
          <b-row>
          <b-col class="greentext">
             <h1>This is the Contact Page</h1>
              <p>
             This page is used to show that I can use the router.js package and
              can trasnsition and link pages without the use of a href and also to prove that the contact page isnt a full copy paste from the about page
            </p>
            <b-img center src="https://images.unsplash.com/photo-1586996157600-590ad5dc61b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80" fluid alt="Responsive image">
             </b-img>
            </b-col>
        </b-row>
        </b-container>
    </div>
</template>

<script>
export default{
    name:'contact'
}
</script>

<style scoped>
    .greentext {
  color: #74c69d;
}
</style>