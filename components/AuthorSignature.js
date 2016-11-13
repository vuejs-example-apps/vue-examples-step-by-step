var AuthorSignature = {
    template: '#author-signature-template',
    props: ['name', 'avatar_url', 'status', 'gender'],
    computed: {
        avatar: function () {                            
            return this.avatar_url ||
                ((this.gender == 'female')
                    ? '../img/avatars/default-female-avatar.jpg'
                    : '../img/avatars/default-male-avatar.png')
        }
        }

};