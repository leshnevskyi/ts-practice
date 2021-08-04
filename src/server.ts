import http from 'http';
import fs from 'fs/promises';

const BASE_URL = 'http://localhost:8000';

const requestListener: http.RequestListener = async (req, res) => {
  const key = new URL(req.url as string, BASE_URL).searchParams.get('key');

  if (key === 'hey') {
    const filePath = `${__dirname}/assets/images/iceland.jpg`;

    try {
      const stats = await fs.stat(filePath);
      const image = await fs.readFile(filePath);

      res.writeHead(200, {
        'Content-Type': 'image/jpeg',
        'Content-Length': stats.size,
      });
      res.end(image);
    } catch(err) {
      console.error(err);
    }
  } else {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hey, try to tweak the search params!');
  }
}

const PORT = 8000;
const server = http.createServer(requestListener);
server.listen(PORT);