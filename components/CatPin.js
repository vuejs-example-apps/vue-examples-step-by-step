Vue.component('cat-pin', {
    template: '#cat-pin-template',
    props: ['image_url', 'author', 'tags', 'description', 'filter_value'],
    methods: {
        handle_tag_click: function (tag) {
            this.$emit('tag-clicked', tag);
        }
    },
    components: {
        'author-signature': AuthorSignature
    }
});  