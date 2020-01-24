const vueApp = new Vue({
    el: '#app',
    data: function () {
        return {
            appName: `User Management`,
            author: `Koleganesia`,
            users: [{
                "id": 1,
                "name": "Lindi MacQuarrie",
                "email": "lmacquarrie0@prweb.com",
                "gender": "Female"
            }, {
                "id": 2,
                "name": "Alastair Spurden",
                "email": "aspurden1@google.co.jp",
                "gender": "Male"
            }, {
                "id": 3,
                "name": "Gusti Sebring",
                "email": "gsebring2@huffingtonpost.com",
                "gender": "Female"
            }, {
                "id": 4,
                "name": "Adora Bargh",
                "email": "abargh3@mayoclinic.com",
                "gender": "Female"
            }, {
                "id": 5,
                "name": "Danya Paddy",
                "email": "dpaddy4@jimdo.com",
                "gender": "Female"
            }],
            userUpdate: {},
            genders: [
                'Male', 'Female'
            ]
        }
    },

    computed: {
        appTitle() {
            return this.appName + ' by ' + this.author
        }
    },

    methods: {
        edit(user) {
            this.userUpdate = user
        },
        destroy(indexUser) {
            let question = confirm('Yakin ingin hapus?')
            if (question) {
                this.users.splice(indexUser, 1)
            }
        }
    }
})