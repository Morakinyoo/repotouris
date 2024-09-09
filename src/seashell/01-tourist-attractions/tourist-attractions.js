const attractionsText = `
*********************************************
Rijksmuseum
Giethoorn
Nigeria National Museum 




*********************************************
`

const youtubeLinks = [
    {
        'title': `Rijksmuseum Welkom!`,
        'url':'https://www.youtube.com/watch?v=AOqdCNjq-x0'
    },
    {
        'title': `No Roads, No Cars, Just Boats`,
        'url':'https://www.youtube.com/watch?v=R3t1cg2ZOxc'
    },
    {
        'title': `Exploring Nigeria's Rich Heritage: A Tour of\n    the National Museum, Lagos Island. Nigeria`,
        'url':'https://www.youtube.com/watch?v=NfzFjVlH9pY'
    }
];

function printAtractions(){
    // remove asteriks, blank lines and extract the attractions
    console.log('\n            Tourist Attractions 🌎\n');
    console.log(' 🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫\n');

    let attractions = attractionsText.replace(/\*/g, '').trim().split('\n').filter(String);

    attractions.forEach((place,index)=>{
    
        console.log(`🔹  ${place}\n`);
 
        if (index < youtubeLinks.length){
            console.log(`🔸  ${youtubeLinks[index]['title']}\n`);
            console.log(`🔸  ${youtubeLinks[index]['url']}\n`);
            console.log('    🔘🔘🔘🔘🔘🔘🔘🔘🔘🔘🔘🔘🔘🔘🔘🔘🔘🔘🔘🔘🔘🔘\n');
        }
    });
    
}

printAtractions();
