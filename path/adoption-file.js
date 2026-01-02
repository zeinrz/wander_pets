const animalDetails = [
    {
        petId: 100,
        petIdentity: "cat",
        petName: "Mia",
        petAge: "8 weeks old",
        petSex: "Female",
        petBreed: "Mixed Breed",
        petStory: "Tiny kitten found seeking shelter, showed calm confidence. Now safe, loves soft blankets and high perches. Needs a forever home."
    },
    {   
        petId: 101,
        petIdentity: "cat",
        petName: "Sunny",
        petAge: "Approx. 2 years old",
        petSex: "Female",
        petBreed: "Mixed Breed",
        petStory: "Relaxed cat found on a sidewalk, friendly and curious. Ready to leave outdoor life behind for a warm home."
    },
    {
        petId: 102,
        petIdentity: "dog",
        petName: "Teddy",
        petAge: "Approx. 4 months old",
        petSex: "Male",
        petBreed: "Mixed Breed",
        petStory: "Cheerful puppy who loves attention, cuddles, and playtime. Friendly and learning indoor life.",
    },
    {
        petId: 103,
        petIdentity: "cat",
        petName: "Mingming",
        petAge: "Approx. 1-2 months old",
        petSex: "Female",
        petBreed: "Mixed Breed",
        petStory: "Tiny stray kitten found on a rough road, gentle and observant, separated from mom early. Needs care and love.",
    },
    {
        petId: 104,
        petName: "Mochi",
        petIdentity: "cat",
        petAge: "Approx. 6-8 months old",
        petSex: "Female",
        petBreed: "Ragdoll",
        petStory: "Mochi is a fluffy, calm kitten often found resting indoors, showing a relaxed and trusting personality. Thrives on attention and comfort.",
    },
    {
        petId: 105,
        petName: "Bailey",
        petIdentity: "dog",
        petAge: "Approx. 2-3 months old",
        petSex: "Male",
        petBreed: "Golden Retriever",
        petStory: "Young Golden Retriever puppy, curious and calm, learning about the world in a caring environment.",
    },
    {
        petId: 106,
        petName: "Shadow",
        petIdentity: "dog",
        petAge: "Approx. 2-3 months old",
        petSex: "Male",
        petBreed: "German Shepherd",
        petStory: "German Shepherd puppy, curious and intelligent, learning trust and discipline. Will be loyal and protective.",
    },
    {
        petId: 107,
        petName: "Peanut",
        petIdentity: "dog",
        petAge: "Approx. 2 months old",
        petSex: "Male",
        petBreed: "Pug",
        petStory: "Tiny pug puppy, curious and confident, loves exploring indoors. Needs gentle training and care.",
    },
    {
        petId: 108,
        petIdentity: "dog",
        petName: "Kia",
        petAge: "8 weeks old",
        petSex: "Female",
        petBreed: "Golden Retriever",
        petStory: "Fluffy Golden Retriever mix, friendly and sociable, vaccinated and ready for adoption.",
    },
    {
        petId: 109,
        petIdentity: "cat",
        petName: "Sunny",
        petAge: "Approx. 3-4 months old",
        petSex: "Male",
        petBreed: "Mixed Breed",
        petStory: "Young kitten found on concrete, calm and alert, shows independence and street smarts. Ready for a loving home.",
    },
    {
        petId: 110,
        petIdentity: "cat",
        petName: "Jasmine",
        petAge: "Approx. 2 years old",
        petSex: "Female",
        petBreed: "Puspin",
        petStory: "Jasmine is the quiet one. She likes to keep to herself in her own sleepy corner, away from the bustle and hustle. Jasmine won’t necessarily go out of her way to greet people, but if you take the time to approach him gently, you’ll find a mellow, sweet girl who will soak up all your attention and affection.",
    },
    {
        petId: 111,
        petIdentity: "dog",
        petName: "Dexter",
        petAge: "Approx. 4 years old",
        petSex: "Male",
        petBreed: "Mixed Breed",
        petStory: "Energetic and full of life, Dexter thrives on movement and play. The shelter, with its limited space, is far from ideal for a dog like him—especially as he grows older and dreams of wide-open spaces to run around and explore. With a heart as big as his sturdy frame, Dexter is ready to give all his love to someone willing to take a chance on him.",
    },
    {
        petId: 112,
        petIdentity: "dog",
        petName: "Bella",
        petAge: "Approx. 7 years old",
        petSex: "Female",
        petBreed: "Aspin",
        petStory: "She’s the most energetic of the bunch and happily greets the people she knows. She takes a bit of time to warm up to new faces, and the best way to win her trust is by giving he boiled chicken liver treats—her absolute favorite!",
    },
    {
        petId: 113,
        petIdentity: "cat",
        petName: "King George",
        petAge: "Approx. 2 years old",
        petSex: "Male",
        petBreed: "Puspin",
        petStory: "King George is a rather loud cat who enjoys some time with his owner or caretaker and won’t hesitate to spend that time at your side, like the feline equivalent of the friend who just sits with you in silence. He has a gentle for his rough and loud nature, an enjoyable presence that keeps you company, so if you appreciate fun and playful quality time, King George is your perfect pair.",
    },
    {
        petId: 114,
        petIdentity: "cat",
        petName: "Willow",
        petAge: "Approx. 2 years old",
        petSex: "Female",
        petBreed: "Puspin",
        petStory: "Willow is often one of the first cats who will greet visitors in her area and she’s known to meow at anyone standing nearby, almost as if to say “Please sit down so I can sit on you!” After years at the shelter, this charming kitty is more than ready to find her forever home.",
    },
    {
        petId: 115,
        petIdentity: "dog",
        petName: "Choco",
        petAge: "Approx. 3 years old",
        petSex: "Male",
        petBreed: "Mixed Breed",
        petStory: "His size and stoic looks may seem intimidating at first, Choco is actually a big softie. He lives for gentle pets and lots of play, and he’s always ready to show his affectionate side to those who take a chance on him. If you’re looking for a loyal companion with a heart of gold, Spade is definitely your winning pick.",
    },
    {
        petId: 116,
        petIdentity: "dog",
        petName: "Kathy",
        petAge: "Approx. 4 years old",
        petSex: "Female",
        petBreed: "Aspin",
        petStory: "We know sweet Kathy will thrive with close companionship, and we believe she’ll find that in a forever family who can give her the love she deserves. She needs someone who will be patient enough to let her open up at her own pace, and with time, Kathy will surely show you all the love she has to give in return too.",
    },
    {
        petId: 117,
        petIdentity: "dog",
        petName: "Lucky",
        petAge: "Approx. 10 years old",
        petSex: "Female",
        petBreed: "Aspin",
        petStory: "Lucky is a lively senior dog that loves to go on walks. She can be wary of strangers at first, but all she needs is someone who can treat her with patience and kindness so she can open up. Once she gets to know you, you’ll meet the energetic girl she is, spinning in excitement for a chance to stroll along by your side.",
    },
    {
        petId: 118,
        petIdentity: "cat",
        petName: "Athena",
        petAge: "Approx. 3 years old",
        petSex: "Female",
        petBreed: "Puspin",
        petStory: "She’s a feline goddess with her beautiful eyes and often likes to watch the world from a pedestal. Many of her peers seek her infinite wisdom, and she encourages them to take plenty of naps and only eat when they’re hungry as she does.",
    },
    {
        petId: 119,
        petIdentity: "cat",
        petName: "Callie",
        petAge: "Approx. 3 years old",
        petSex: "Female",
        petBreed: "Puspin",
        petStory: "Callie loves to chill and hang out at her favorite spot. When you first meet her, she may seem like a very shy and quiet girl, but stick around a bit and you’ll find she just loves to take her time to get to know new people. Once she warms up to you, this introverted soul will allow you to pet her as much as you can. Callie is a great match for someone who is looking for a calm, collected, and utterly sweet companion.",
    }
]
function selectedPet(targetId){
    const petKey = animalDetails.find(pet => pet.petId == targetId);
    document.getElementById("animalName").innerText = `${petKey?.petName}`;
    document.getElementById("animalAge").innerText = `${petKey?.petAge}`;
    document.getElementById("animalSex").innerText = `${petKey?.petSex}`;
    document.getElementById("animalBreed").innerText = `${petKey?.petBreed}`;
    document.getElementById("animalStory").innerText = `${petKey?.petStory}`;
    document.getElementById("pet-img").src = `path/css-file/media/image-video/pet-adoption/${petKey?.petId}.jpg`
}

function getQueryParam(name){
    const urlParams = new URLSearchParams(window.location.search);
    var receivedId = urlParams.get(name);
    selectedPet(receivedId);
    console.log(receivedId);
}
getQueryParam("data");


// window.alert("Thank you! Your form has been submitted successfully. Please wait for confirmation message to your Gmail once validated.");