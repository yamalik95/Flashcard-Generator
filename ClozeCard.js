function ClozeCard(text, cloze) {
	function checkValidity(fullText, clozeText) {
		clozeArray = clozeText.split(' ')
		textArray = fullText.split(' ')
		if (clozeArray.length === 1) {
			if (textArray.indexOf(clozeArray[0]) === -1) {
				return false
			} else {
				return true
			}
		} else {
			var startIndex = textArray.indexOf(clozeArray[0])
			if (startIndex !== -1) {
				var count = 0
				for (var i = 1; i < clozeArray.length; i++) {
					if (textArray.indexOf(clozeArray[i]) === startIndex + i) {
						count++
						console.log(count)
					}
				}
				if (count === clozeArray.length - 1) {
					return true
				} else {
					return false
				}
			}
		}
	}
	if (checkValidity(text, cloze)) {
		this.text = text
		this.cloze = cloze
		this.partial = text.replace(cloze, '_____________')
	} else {
		console.log('error')
	}
}
module.exports = ClozeCard