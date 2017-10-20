console.log('stdout is writeable?',process.stdout.writable);

process.stdout.write("Hello ");
process.stdout.write("world");