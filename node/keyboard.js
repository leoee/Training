process.stdin.on('readable', function () {
    let chunk = process.stdin.read();
    if (chunk)
        console.log(chunk.toString().replace('/\n/', ''));
});