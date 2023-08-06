const fs = require("fs");
const superagent = require("superagent");

const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        reject("I could not find that file 🥲");
      }

      resolve(data);
    });
  });
};

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) {
        reject("Could not write file 🥲");
      }

      resolve("success");
    });
  });
};

const getDogPic = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`);
    console.log(data);

    const res = await superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    console.log(res.body.message);

    await writeFilePro("dog-img.txt", res.body.message);
    console.log("Random dog image saved to file!");
    return "2: Ready 🐶";
  } catch (err) {
    console.log(err);
    throw err;
  }
};

console.log("1: will get dog pics!");
getDogPic()
  .then((x) => {
    console.log(x);
    console.log("3: done getting dog pics!");
  })
  .catch(() => {
    console.log("ERROR 💥");
  });

// readFilePro(`${__dirname}/dog.txt`)
//   .then((data) => {
//     console.log(data);

//     return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
//   })
//   .then((res) => {
//     console.log(res.body.message);

//     return writeFilePro("dog-img.txt", res.body.message);
//   })
//   .then(() => {
//     console.log("Random dog image saved to file!");
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });
