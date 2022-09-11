Vue.component('testcomponent1',{
    template : '<div>{{ message }}</div>',
    data: function () {
        return {
            message: 'This is testcomponent 1'

        }
    }
});

Vue.component('testcomponent2',{
    template : '<div>{{ message }}</div>',
    data: function () {
        return {
            message: 'This is testcomponent 2'

        }
    }
});

var app = new Vue({
    el: '#app',
    data: {
        text: 'hello vue',
    },
});