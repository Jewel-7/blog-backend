const uniqid = require("uniqid");
class Task {
  constructor(author, title, content, imageUrl) {
    this.id = uniqid();
    this.author = author;
    this.title = title;
    this.content = content;

    this.imageUrl = imageUrl;
  }
}

module.exports = Task;

// "id": "2rvqpdbpka3n3fhd",
//     "author": "Aryanna  Gulgowski",
//     "title": "Facilis suscipit nam sunt qui blanditiis.",
//     "content": "Sit in consequuntur reprehenderit. Necessitatibus ut ipsa magnam tenetur rem repudiandae maiores tempore. Ut nobis aliquam omnis quia sit.\n \rLaboriosam dolor maxime nesciunt qui quos. Quo dolore modi. Ea et ipsum officiis. Eum repellat autem est doloremque reprehenderit assumenda facilis a et. Adipisci ullam ducimus necessitatibus illum.\n \rEligendi non at sint qui dolor id id distinctio minus. Libero non hic vitae dolorem iusto nostrum beatae recusandae dolores. Voluptas quibusdam ut tempora quia aspernatur itaque molestiae dolor iste. Hic aliquid sed dolorem est maiores sit suscipit ducimus magnam. Tempora sed aliquam enim. Occaecati nihil enim non rerum. Necessitatibus sint voluptates quo doloribus ut. Aperiam eos enim itaque rerum sunt sit. Quo deleniti et quidem asperiores quia illo tempora placeat soluta.\n \rCulpa quia error consectetur. Voluptatibus aspernatur doloribus quia. Vel et nam.\n \rFugiat quidem tempora suscipit quisquam sunt sed. Iure delectus voluptates atque a perspiciatis velit et enim. Ut adipisci iusto quia hic debitis expedita in dolores. ",
//     "links": [
//       {
//         "title": "Reprehenderit aut quis voluptate qui.",
//         "id": "2rvqpdbpka3n3fhk"
//       },
//       {
//         "title": "Ut dicta dolor.",
//         "id": "2rvqpdbpka3n3fhi"
//       }
//     ],
//     "imageUrl": "https://cdn.fs.teachablecdn.com/IBEoZhOqQGukTEpVOwbg"
//   },
