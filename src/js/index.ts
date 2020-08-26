new Vue({
    el: "#app",
    data: {
        word: "",
        words: [],
        message: ""
    },
    methods: {
        save(word: string) {
            this.words.push(word)
        },
        show() {
            if (this.words.length > 0)
                this.message = this.words.toString()
            else
                this.message = "No words"
        },
        clear() {
            this.words = []
            this.message = ""
        }
    }
}) 