const fs = require('fs')

// const filePath1 = './some/local/file1'
// const filePath2 = './some/local/file2'
// const filePath3 = './some/local/file3'
// const filePath4 = './some/local/file4'
// const filePath5 = './some/local/file5'

// helper function to concatenate results into a single string
// const concatFiles = (...data) => {
//     return (data.toString())
//     // .map((res) => res.toString())
//     // .join('\n')
// }

// fs.readFile("ambesh.txt", (err, data1) => {
//     if (err) throw err
//     fs.readFile("ambes1.txt", (err, data2) => {
//         if (err) throw err
//         fs.readFile("ambesh2.txt", (err, data3) => {
//             if (err) throw err
//             fs.readFile("ambesh3.txt", (err, data4) => {
//                 if (err) throw err
//                 fs.readFile("ambesh4.txt", (err, data5) => {
//                     if (err) throw err
//                     console.log(concatFiles(data1, data2, data3, data4, data5));
//                 })
//             })
//         })
//     })
// })
const concatFiles = (...data) => {
    return (data.toString())

}

fs.readFile("ambesh.txt", (err, data1) => {
    if (err) throw err
    fs.readFile("ambes1.txt", (err, data2) => {
        if (err) throw err
        fs.readFile("ambesh2.txt", (err, data3) => {
            if (err) throw err
            fs.readFile("ambesh3.txt", (err, data4) => {
                if (err) throw err
                fs.readFile("ambesh4.txt", (err, data5) => {
                    if (err) throw err
                    console.log(concatFiles(data1, data2, data3, data4, data5));
                })
            })
        })
    })
})