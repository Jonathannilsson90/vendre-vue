
const app = Vue.createApp({
    data(){
        return {
            titel: "Contact us",
            users: []
        }
    },
    methods: {
        async getData() {
            try {
              const response = await axios.get("https://reqres.in/api/users");
              this.users = response.data.data.map(user => ({
                id: user.id,
                email: user.email,
                firstName: user.first_name,
                lastName: user.last_name,
                avatar: user.avatar
              }));
            } catch (error) {
              console.log(error);
            }
        }
    },
    created(){
        this.getData();
    }
})