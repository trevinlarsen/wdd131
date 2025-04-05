// Data for species, general tips, seasonal tips, and images
const tipsData = {
    brown: {
        general: {
            text: "Located in the lower Henrys Fork. These Brown Trout can grow to over 20+ inches long very easily. Below Ashton Dam you will find the biggest Brown Trout in the river.",
            image: "chartimages/BTgeneral.jpg"
        },
        spring: {
            text: "Pre-Runoff is great for egg patterns and worms towards March and through April. When Runoff Happens, make sure to fish black colored submerged flies as they are easiest to be seen.",
            image: "chartimages/blackstonefly.png"
        },
        summer: {
            text: "Early Summer Brown Trout will be on the Prowel after Runoff. They will be hunry and ready to eat all things. Make sure to catch the Salmonfly Hatch and Golden Stones as these are the best and favorite hatches on this river. Great time to catch big Brown Trout on a large dry fly.",
            image: "chartimages/salmonfly.jpg"
        },
        fall: {
            text: "Early fall use Grass Hopper and Ant patterns. These patterns with a fast sinking nymp or scud work well. Once the cold approaches they will start to spawn and be very agressive. Streamers are a great option at this time.",
            image: "chartimages/streamer.jpg"
        },
        winter: {
            text: "Fish deep, use slow retrieves on streamers. Best places to fish are in Tailwater Sections below dam's and in deep pools. Use small nymphs or streamers.",
            image: "chartimages/btwinter.jpg"
        }
    },
    rainbow: {
        general: {
            text: "Often found in clear streams and rivers. Upper Henry's Fork only holds Rainbow Trout as Mesa Falls doesn't allow Brown Trout to get upstream from here..",
            image: "chartimages/rainbow.jpeg"
        },
        spring: {
            text: "Same story with brown trout except these fish start to spawn in the spring. Egg Patterns before Run-off and Stoneflies directly after are a great idea.",
            image: "chartimages/2.png"
        },
        summer: {
            text: "Delicate dry flies in the upper region of the Henry's Fork are a great and challenging teqnique to catch large fish. Use long leaders and small tippet size. Drag free drift is the name of the game.",
            image: "chartimages/3.png"
        },
        fall: {
            text: "Hopper-Droppper is go to teqniquew in early, warm fall days. You can always throw a stremer out there and see if anything will want to eat. Rainbows will also be getting fat on Brown Trout eggs towards the end of Fall.",
            image: "chartimages/4.png"
        },
        winter: {
            text: "Use slow, deep presentations to target them with small nymph patterns. Zebra midge is a classic. Griffiths nat is also a great oipotion if you see them rising for anything. ",
            image: "chartimages/winter.png"
        }
    },
    cutthroat: {
        general: {
            text: "Found in clear cold water on the Teton River and South Fork of the Snake. Focus on Structure and pocket water in which they hold. Canyon Section of the Teton is a great place to go after these fish.",
            image: "pictures/tetoncutty.jpeg"
        },
        spring: {
            text: "Use Black Stone Flies such as a Pat's Rubber Legs. Also Egg Patterns work well as they are about to spawn.",
            image: "chartimages/6.png"
        },
        summer: {
            text: "Look for them in cooler, deeper parts of the water. Fast Moving pocket water is best as well as riffles. This brings better oxygen to the fish.",
            image: "chartimages/7.png"
        },
        fall: {
            text: "Fish the warmest part of the day and use Hoppers with a small dropper. Something that can get down quick.",
            image: "chartimages/8.png"
        },
        winter: {
            text: "Use small midges like the zebra midge and target deeper holes. Use Splitshot if needing to get down extra deep.",
            image: "chartimages/9.png"
        }
    }
};

// Function to update the tips and images based on species and season
function updateTips() {
    const species = document.getElementById('species').value;
    const season = document.getElementById('season').value;

    // Display general tips and image
    document.getElementById('generalTips').innerText = tipsData[species].general.text;
    document.getElementById('generalImage').src = tipsData[species].general.image;

    // Display seasonal tips and image
    document.getElementById('seasonalTips').innerText = tipsData[species][season].text;
    document.getElementById('seasonalImage').src = tipsData[species][season].image;
}

// Initialize the tips and images based on default selection
updateTips();
