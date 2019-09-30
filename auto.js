const async1=require("async");
async1.auto({
    one: function (callback, arg1) {
        setTimeout( ()=> {
            console.log("hello everyone ");

            callback(null, '1');
        }, 3000);
    },
    two: [
        'one', function (callback, arg1) {
            console.log(arg1);
            console.log("hello everyone its depend upon the first function ");
    
            //callback(null, '2');
        }
    ],
    three: [
        function (callback) {
            console.log('thrid Step');
            callback(null, '3');
        }
    ]
},
    function (err, result) {
    console.log(result);
});

console.log('Program End');
// async.auto({
//     get_data: function(callback) {
//         console.log('in get_data');
//         // async code to get some data
//         callback(null, {'a':'something'});
//     },
//     make_folder: function(callback) {
//         console.log('in make_folder');
//         // async code to create a directory to store a file in
//         // this is run at the same time as getting the data
//         callback(null, 'folder');
//     },
//     write_file: ['get_data', 'make_folder', function(results, callback) {
//         console.log('in write_file', JSON.stringify(results));
//         // once there is some data and the directory exists,
//         // write the data to a file in the directory
//         callback(null, 'filename');
//     }],
//     email_link: ['write_file', function(results, callback) {
//         console.log('in email_link', JSON.stringify(results));
//         // once the file is written let's email a link to it...
//         // results.write_file contains the filename returned by write_file.
//         callback(null, {'file':results.write_file, 'email':'user@example.com'});
//     }]
// }, function(err, results) {
//     console.log('err = ', err);
//     console.log('results = ', results);
// });


