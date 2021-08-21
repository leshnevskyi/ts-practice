process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  const input = process.stdin.read() as string;
  const command = input.trim();
  
  process.stdout.write(input);  
  command === 'exit' && process.exit();
});