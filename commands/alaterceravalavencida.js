
const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder} = require('discord.js');

    /*A*/
    /*Adicción*/
let adiccion1 = "Todas las cosas me son lícitas, mas no todas convienen, todas las cosas me son lícitas, mas yo no me dejaré dominar de ninguna.\n Corintios 6:12";

let adiccion3 = "Estad, pues, firmes en la libertad con que Cristo nos hizo libres, y no estéis otra vez sujetos al yugo de esclavitud. \n Gálatas 5:1";

const arrAdiccion = [adiccion1, adiccion3 ]

    /*Mentir*/
let mentir1 = "Porque: \nEl que quiere amar la vida \nY ver días buenos,\nRefrene su lengua de mal,\nY sus labios no hablen engaño;\nApártese del mal, y haga el bien;\nBusque la paz, y sígala.\nPedro 3:10-11";

let mentir2 = "Los labios mentirosos son abominación a Jehová;\n Pero los que hacen verdad son su contentamiento. \nProverbios 12:22";

const arrMentir = [mentir1, mentir2];

const versos = [
    {
        emoji: '🙏',
        name:'Adiccion',
        title: 'Con Dios',
        description:'na',
        commands: [
            {
                name:'\u200b',
                value: `${arrAdiccion[Math.floor(Math.random() * arrAdiccion.length)]
                }`,
            },
        ],
    },

    {
        emoji: '🤫',
        name:'Mentira',
        title: 'Con Dios',
        description:'na',
        commands: [
            {
                name:'\u200b',
                value: `${arrMentir[Math.floor(Math.random() * arrMentir.length)]}`,
            },
        ],
    },
];

module.exports = {
  data: new SlashCommandBuilder()
    .setName("latercera")
    .setDescription(" Replies if the mc server is on or off"),
  execute(interaction) {
    if (interaction.client.active) {
      const embed = new EmbedBuilder()
        .setTitle("Tamoactivopapi, vamos a minar la mina")
        .setDescription('tapudimak');
  return  interaction.reply({embeds: [embed]});
      /*
      return interaction.reply({ embeds: [embed]});*/
    } else {
      const embed = new EmbedBuilder()

         .setTitle("ldalsdlaslda")
        .setDescription('tapudimak');

  return  interaction.reply({embeds: [embed]});
    };
/*
      .setTitle("Estamos cerrando, a la próxima vienes antes, wannabe");
      return interaction.reply({embeds: [embed]} );*/

  }
};
