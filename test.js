class JS {
    constructor(msg){
        this.message = msg
    }
    hello() {
        console.log(this.message)
    }
}

const js = new JS('123')
js.hello() //like java => this === instance
js.hello.bind({message: '321'})()