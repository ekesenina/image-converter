import imageCompression from 'browser-image-compression';

export async function convertImagesToWebP(files, quality) {
  const options = {
    fileType: 'image/webp',
    initialQuality: Number(quality),
  };

  const promises = files.map(async (file) => {
    const compressedFile = await imageCompression(file, options);
    return new File([compressedFile], replaceExtension(file.name, 'webp'), {
      type: 'image/webp',
    });
  });

  const results = await Promise.all(promises);
  return results;
}

function replaceExtension(filename, newExtension) {
  const basename = filename.substring(0, filename.lastIndexOf('.'));
  return `${basename}.${newExtension}`;
}
