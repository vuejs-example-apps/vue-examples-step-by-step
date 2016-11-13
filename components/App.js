var App = Vue.component('async-example', function (resolve, reject) {
  setTimeout(function () {
    resolve({
        template: '#root-template',
        computed: {
            filtered_cat_pins: function () {
                var term = this.filter_value;
                if (!term) return this.cat_pins;
                return this.cat_pins.filter(function (pin) {
                    return pin.tags.indexOf(term) > -1;
                })
            }
        },
        methods: {
            update_filter: function (filter_value) {
                if (this.filter_value == filter_value) {
                    this.filter_value = '';
                } else {
                    this.filter_value = filter_value;
                }
            }
        },
        data: APP_DATA
    })
  }, 1000)
});