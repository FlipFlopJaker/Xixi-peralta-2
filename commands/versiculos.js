
const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder} = require('discord.js');

    /*A*/
    /*Adicción*/
let adiccion1 = "Todas las cosas me son lícitas, mas no todas convienen, todas las cosas me son lícitas, mas yo no me dejaré dominar de ninguna.\n Corintios 6:12";

let adiccion3 = "Estad, pues, firmes en la libertad con que Cristo nos hizo libres, y no estéis otra vez sujetos al yugo de esclavitud. \n Gálatas 5:1";

const arrAdiccion = [adiccion1, adiccion3 ]
    /*Adoración*/
    /*Alabanza*/
    /*Alegría*/
    /*Alimento*/
    /*Alma*/
    /*Amabilidad*/
    /*Amistad*/
    /*Amor*/
    /*Ángeles*/
    /*Aprendiza*/
    /*Arrepentimiento*/
    /*Ascensión*/
    /*Autocontrol*/
    /*Ayunar*/
    /*B*/
    /*Bautismo*/
    /*Belleza*/
    /*Bendición*/
    /*Bondad*/
    /*Búsqueda*/
    /*C*/
    /*Cantar*/
    /*Castigo*/
    /*Chismes*/
    /*Cielo*/
    /*Codicia*/
    /*Cólera*/
    /*Compasión*/
    /*Comunidad*/
    /*Confesión*/
    /*Confianza*/
    /*Consolador*/
    /*Contentamiento*/
    /*Conversión*/
    /*Coraje*/
    /*Corazón*/
    /*Cosecha*/
    /*Creación*/
    /*Crucifixión*/
    /*Cuerpo*/
    /*Curación*/
    /*D*/
    /*Dar*/
    /*Debilidad*/
    /*Dependencia*/
    /*Descanso*/
    /*Deseo*/
    /*Deuda*/
    /*Diablo*/
    /*Dinero*/
    /*Dios*/
    /*Dolor*/
    /*E*/
    /*Egoísmo*/
    /*Enfermedad*/
    /*Entendimiento*/
    /*Equipo*/
    /*Esclavitud*/
    /*Escucha*/
    /*Esperanza*/
    /*Espíritu*/
    /*Espíritu Santo*/
    /*Estímulo*/
    /*Evangelización*/
    /*F*/
    /*Familia*/
    /*Fe*/
    /*Fiabilidad*/
    /*Fiel*/
    /*Frutos*/
    /*Fuerza*/
    /*G*/
    /*Generosidad*/
    /*Gracia*/
    /*Gratitud*/
    /*H*/
    /*Hablar*/
    /*Honestidad*/
    /*Huérfanos*/
    /*Humildad*/
    /*I*/
    /*Ídolos*/
    /*Iglesia*/
    /*Infierno*/
    /*J*/
    /*Jesús*/
    /*Juicio*/
    /*Justicia*/
    /*L*/
    /*Ley*/
    /*Libertad*/
    /*Libre de culpa*/
    /*Llamado*/
    /*Luz*/
    /*M*/
    /*Mal*/
    /*Materialismo*/
    /*Matrimonio*/
    /*Mediador*/
    /*Mente*/
    /*Mentir*/
let mentir1 = "Porque: \nEl que quiere amar la vida \nY ver días buenos,\nRefrene su lengua de mal,\nY sus labios no hablen engaño;\nApártese del mal, y haga el bien;\nBusque la paz, y sígala.\nPedro 3:10-11";

let mentir2 = "Los labios mentirosos son abominación a Jehová;\n Pero los que hacen verdad son su contentamiento. \nProverbios 12:22";

const arrMentir = [mentir1, mentir2];
    /*Mesías*/
    /*Miedo*/
    /*Milagros*/
    /*Misericordia*/
    /*Muerte*/
    /*Mundo*/
    /*N*/
    /*Navidad*/
    /*Niños*/
    /*O*/
    /*Obediencia*/
    /*Oración*/
    /*Orgullo*/
    /*P*/
    /*Paciencia*/
    /*Pacto*/
    /*Padre*/
    /*Palabra de Dios*/
    /*Pan*/
    /*Pascua*/
    /*Paz*/
    /*Pecado*/
    /*Pensamientos*/
    /*Pentecostés*/
    /*Perdón*/
    /*Persecución*/
    /*Planificación*/
    /*Pobreza*/
    /*Preocupación*/
    /*Profecía*/
    /*Promesas*/
    /*Protección*/
    /*Proximidad*/
    /*Purificación*/
    /*R*/
    /*Recibir*/
    /*Recompensa*/
    /*Reconciliación*/
    /*Reconocer*/
    /*Redentor*/
    /*Reino*/
    /*Relaciones*/
    /*Renacimiento*/
    /*Resurrección*/
    /*Ropa*/
    /*S*/
    /*Sábado*/
    /*Sabiduría*/
    /*Sacrificio*/
    /*Salud*/
    /*Salvación*/
    /*Salvador*/
    /*Sangre*/
    /*Santidad*/
    /*Seguir*/
    /*Segunda venida*/
    /*Seguridad*/
    /*Servir*/
    /*Sufrimiento*/
    /*Superación*/
    /*T*/
    /*Temor*/
    /*Tentación*/
    /*Todopoderoso*/
    /*Trabajo*/
    /*Transformación*/
    /*V*/
    /*Valioso*/
    /*Vecino*/
    /*Verdad*/
    /*Vida*/
    /*Vida eterna*/
    /*Vino*/
    /*Viudas*/


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
.setName('versiculos')
.setDescription('jaja pone versiculos sin tilde, ver si culos jaja'),
execute(interaction){
    const embed = new EmbedBuilder()
        .setColor('#171b20')
        .setTitle('Que dios te guie')
        .setDescription('Selecciona un tema para recibir un versículo aleatorio')
        .addFields(versos.map((vers) => ({
            name: `${vers.emoji} ${vers.name}`,
            value: '\u200b',
        })));
  interaction.channel.send({embeds: [embed]}).then((embedMsg) => {
            const mojis = versos.map((vers) => vers.emoji);
            mojis.forEach((emoji) => embedMsg.react(emoji));


            const filter = (reaction, user) => mojis.includes(reaction.emoji.name) && user.id === interaction.author.id;
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
            const  embod = new EmbedBuilder()
                    .setTitle(selectedCategory.title)
                    .setDescription(selectedCategory.description)
                    .addFields(selectedCategory.commands);
                interaction.deffereply({embeds: [embod]});
            });
            collector.on('end', (collected, reason) => {
                if (reason === 'limit')
                    return interaction.channel.send('state kieto');
                return interaction.channel.send('novamas');
            });
        });
    },
};



