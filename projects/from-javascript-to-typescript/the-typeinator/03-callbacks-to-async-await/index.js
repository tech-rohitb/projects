// Put your checkEmotion and speak functions here! ✨
// See ./original.js for their older JavaScript code.

async function checkEmotion(knownEmotions, emotion, callback) {
	await setTimeout(() => {
		callback(knownEmotions.has(emotion));
	}, 1000);

	return result;
}

async function speak(knownEmotions, newEmotion, phrase, callback) {}

// todo ; study promises again in depth you are not up to the mark

module.exports.checkEmotion = checkEmotion;
module.exports.speak = speak;
