<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
        <p>Ten toi la {{ name }}</p>
        <p>Toi nam nay {{ age }} tuoi</p>
        <hr>
    <div class="row">
            <div class="col-xs-12 col-sm-6 col-6" style="background-color: mediumpurple;">
                <app-user-detail v-bind:age="age" @ageChange="age = $event"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6 col-6" style="background-color: red;">
                <app-user-edit :user-age="age" @changeAgeEdit="age = $event"></app-user-edit>
            </div>
        </div>
  </div>
</template>

<script>
import UserDetail from './UserDetail.vue';
import UserEdit from './UserEdit.vue';

export default {
  name: 'HelloWorld',
  data: function () {
        return {
            name: 'Duy',
            age: 23
        };
    },
  components: {
      appUserDetail: UserDetail,
      appUserEdit: UserEdit
    },
  props: {
    msg: String
  },
  methods: {
      resetAge () {
          this.age = 23
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
