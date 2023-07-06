const fs = require("fs/promises");
const { v4: uuidv4 } = require("uuid");

const createAnime = async (data) => {
  try {
    const anime = JSON.parse(await fs.readFile("./data/anime.json", "utf-8"));

    anime[uuidv4()] = { ...data };
    await fs.writeFile("./data/anime.json", JSON.stringify(anime));

    return {
      ok: true,
      status: 201,
      message: "Anime creado exitosamente!",
      data,
    };
  } catch (error) {
    return {
      ok: false,
      status: 500,
      message: "El animé no pudo ser creado",
    };
  }
};

module.exports = { createAnime };
