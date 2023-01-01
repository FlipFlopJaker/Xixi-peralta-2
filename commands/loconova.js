
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
console.log(arrMentir[Math.floor(Math.random()*arrMentir.length)]);
module.exports = {
    data: new SlashCommandBuilder()
.setName('nova')
.setDescription('jaja pone versiculos sin tilde, ver si culos jaja'),
execute(interaction){
    const embed = new EmbedBuilder()
        .setTitle('Que dios te guie')
        .setDescription('Selecciona un tema para recibir un versículo aleatorio')
/*        .addFields(versos.map((vers) => ({
            name: `${vers.emoji} ${vers.name}`,
            value: '\u200b',
        })));
    interaction.channel.send({embeds: [embed]}).then((embedMsg) => {
            const mojis = versos.map((vers) => vers.emoji);
            mojis.forEach((emoji) => embedMsg.react(emoji));

        /*
            const filter = (reaction, user) => mojis.includes(reaction.emoji.name) && user.id === interaction.user.id;
const collector = embedMsg.createReactionCollector(filter, {
    max: mojis.length,
    time: 60000,
        });
            collector.on('collect', (reaction, user) => {
                const selectedCategory = versos.find((category) => category.emoji === reaction.emoji.name,
                );
                console.log(selectedCategory);

            if (!selectedCategory){
            return interaction.channel.send('No funca');
            }
            const  embed = new EmbedBuilder()
                    .setTitle(selectedCategory.title)
                    .setDescription(selectedCategory.description)
                    .addFields(selectedCategory.commands);
                interaction.channel.send({embeds: [embed]});
            });
            collector.on('end', (collected, reason) => {
                if (reason === 'limit')
                    return interaction.channel.send('state kieto');
                return interaction.channel.send('novamas');
            });*/
        }
    };




