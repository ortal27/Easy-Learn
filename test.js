const fn = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log('iam called')
            // res()
        }, 3000)
     })
}

(async () => {
    await fn()
    console.log('done')
})()