// Put your announceMachines function here! ✨
// See ./original.js for its older JavaScript code.

module.exports.announceMachines = announceMachines;

// new code
function announceMachines(announce, ...machines) {
	let labelsCount = 0;

	for (let machine of machines) {
		let label;
		if (machine.label) {
			label = machine.label;
			labelsCount = labelsCount + 1;
		} else {
			label = `Make: ${machine.make}; Model: ${machine.model}`;
		}
		announce(label);
	}

	return labelsCount;
}

// refer: https://chatgpt.com/c/a4f8a6d0-d520-4e22-94f6-1e876f9f8a86