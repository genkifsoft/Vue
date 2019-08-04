<template>
    <div class="component">
        <h3>Edit User</h3>
        <p>Tuoi cua toi: {{userAge}} </p>
        <button @click="changeAgeEdit">Thay doi</button>
    </div>
</template>

<script>
export default {
    props: ['userAge'],
    methods: {
        changeAgeEdit () {
            this.userAge += 1,
            this.$emit('changeAgeEdit', this.userAge);
        }
    }
}
</script>