var app = new Vue({
    el: '#app',
    data: {
        a: 0,
        b: 0
    },
    computed: {
        suma(){
            return this.a + this.b;
        }
    }
})