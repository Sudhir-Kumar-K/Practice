{
    let arr = [1,2,3,4,5]

    console.log('1st arrow funtion')
    arr.forEach((item) => {
        console.log(item)
    })

    console.log('2nd arrow funtion')
    arr.forEach((item,index) => {
        console.log(item + '---' + index)
    })

    console.log('3rd arrow funtion')
    arr.forEach((item,index,arr) => {
        console.log(item + '---' + index + '---' + arr)
    })

    
}