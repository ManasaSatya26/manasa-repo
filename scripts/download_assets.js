const fs = require('fs');
const path = require('path');
const https = require('https');

const assets = {
  images: {
    'hackathon.jpg': 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1000&q=80',
    'coding.jpg': 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1000&q=80',
    'college.jpg': 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1000&q=80',
    'travel.jpg': 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1000&q=80',
    'cricket.jpg': 'https://images.unsplash.com/photo-1531415080290-bc9b899d875e?w=1000&q=80',
    'speaking.jpg': 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1000&q=80',
    'event.jpg': 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1000&q=80',
    'achievement.jpg': 'https://images.unsplash.com/photo-1496469888073-80de7e9b97cb?w=1000&q=80',
    'certificate.jpg': 'https://images.unsplash.com/photo-1589330694653-ded6df53f7ec?w=1000&q=80',
    'dance-show.jpg': 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=1000&q=80',
    'life.jpg': 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1000&q=80',
    'cricket-play.jpg': 'https://images.unsplash.com/photo-1607734834834-d2db65700827?w=1000&q=80'
  },
  videos: {
    'coding-session.mp4': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    'dance-video.mp4': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
  }
};

function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destPath);
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: Status code ${response.statusCode}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(destPath, () => reject(err));
    });
  });
}

async function run() {
  const baseDir = path.join(__dirname, '..', 'public', 'gallery');
  
  console.log('Starting downloading assets...');
  
  // Ensure directories exist
  if (!fs.existsSync(path.join(baseDir, 'images'))) {
    fs.mkdirSync(path.join(baseDir, 'images'), { recursive: true });
  }
  if (!fs.existsSync(path.join(baseDir, 'videos'))) {
    fs.mkdirSync(path.join(baseDir, 'videos'), { recursive: true });
  }

  for (const [filename, url] of Object.entries(assets.images)) {
    const dest = path.join(baseDir, 'images', filename);
    if (!fs.existsSync(dest)) {
      console.log(`Downloading ${filename}...`);
      try {
        await downloadFile(url, dest);
        console.log(`Downloaded ${filename} successfully.`);
      } catch (err) {
        console.error(`Error downloading ${filename}:`, err.message);
      }
    } else {
      console.log(`${filename} already exists.`);
    }
  }

  for (const [filename, url] of Object.entries(assets.videos)) {
    const dest = path.join(baseDir, 'videos', filename);
    if (!fs.existsSync(dest)) {
      console.log(`Downloading ${filename}...`);
      try {
        await downloadFile(url, dest);
        console.log(`Downloaded ${filename} successfully.`);
      } catch (err) {
        console.error(`Error downloading ${filename}:`, err.message);
      }
    } else {
      console.log(`${filename} already exists.`);
    }
  }
  
  console.log('Finished downloading all assets!');
}

run();
