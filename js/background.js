const HASHFLAG = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAASdAAAEnQF8NGuhAAAKrGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuMWI2NWE3OWI0LCAyMDIyLzA2LzEzLTIyOjAxOjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjAxMGExMDQ5LTgwMWUtMDg0Yy05MjhiLTM5MTA5NGVlMGYzZiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpmOWNjY2NmYS04YmViLTQzNDAtODI4Yi0yOGE5ZTcxZmVhMDYiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0iQUI3NjRBNEM2MzExNURBNjI3RTVCNEI4QTM2MzFBMjkiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB0aWZmOkltYWdlV2lkdGg9IjEyMDAiIHRpZmY6SW1hZ2VMZW5ndGg9IjEyMDAiIHRpZmY6UGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbj0iMiIgdGlmZjpTYW1wbGVzUGVyUGl4ZWw9IjMiIHRpZmY6WUNiQ3JQb3NpdGlvbmluZz0iMSIgdGlmZjpYUmVzb2x1dGlvbj0iNzIvMSIgdGlmZjpZUmVzb2x1dGlvbj0iNzIvMSIgdGlmZjpSZXNvbHV0aW9uVW5pdD0iMiIgZXhpZjpFeGlmVmVyc2lvbj0iMDIyMSIgZXhpZjpGbGFzaHBpeFZlcnNpb249IjAxMDAiIGV4aWY6Q29sb3JTcGFjZT0iMSIgZXhpZjpQaXhlbFhEaW1lbnNpb249IjEyMDAiIGV4aWY6UGl4ZWxZRGltZW5zaW9uPSIxMjAwIiBleGlmOlNjZW5lQ2FwdHVyZVR5cGU9IjAiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTA5LTI3VDExOjQ0OjUxKzAxOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0wOS0yOFQyMToyNDoyOSswMTowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0wOS0yOFQyMToyNDoyOSswMTowMCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmJjOGQzMTgxLWVlZTQtNDc5Zi05NjUyLTZmZDVkNTdkODdhNiIgc3RFdnQ6d2hlbj0iMjAyMi0wOS0yOFQyMToyNDoyOSswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIzLjUgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNvbnZlcnRlZCIgc3RFdnQ6cGFyYW1ldGVycz0iZnJvbSBpbWFnZS9qcGVnIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iZGVyaXZlZCIgc3RFdnQ6cGFyYW1ldGVycz0iY29udmVydGVkIGZyb20gaW1hZ2UvanBlZyB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmY5Y2NjY2ZhLThiZWItNDM0MC04MjhiLTI4YTllNzFmZWEwNiIgc3RFdnQ6d2hlbj0iMjAyMi0wOS0yOFQyMToyNDoyOSswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIzLjUgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmJjOGQzMTgxLWVlZTQtNDc5Zi05NjUyLTZmZDVkNTdkODdhNiIgc3RSZWY6ZG9jdW1lbnRJRD0iQUI3NjRBNEM2MzExNURBNjI3RTVCNEI4QTM2MzFBMjkiIHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD0iQUI3NjRBNEM2MzExNURBNjI3RTVCNEI4QTM2MzFBMjkiLz4gPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHJkZjpCYWc+IDxyZGY6bGk+QUI3NjRBNEM2MzExNURBNjI3RTVCNEI4QTM2MzFBMjk8L3JkZjpsaT4gPC9yZGY6QmFnPiA8L3Bob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHRpZmY6Qml0c1BlclNhbXBsZT4gPHJkZjpTZXE+IDxyZGY6bGk+ODwvcmRmOmxpPiA8cmRmOmxpPjg8L3JkZjpsaT4gPHJkZjpsaT44PC9yZGY6bGk+IDwvcmRmOlNlcT4gPC90aWZmOkJpdHNQZXJTYW1wbGU+IDxleGlmOkNvbXBvbmVudHNDb25maWd1cmF0aW9uPiA8cmRmOlNlcT4gPHJkZjpsaT4xPC9yZGY6bGk+IDxyZGY6bGk+MjwvcmRmOmxpPiA8cmRmOmxpPjM8L3JkZjpsaT4gPHJkZjpsaT4wPC9yZGY6bGk+IDwvcmRmOlNlcT4g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'

const HOSTS = {
	TweetDeck: 'tweetdeck.twitter.com',
	Twitter: 'twitter.com'
}

const HASHTAG_GOLIST = ['#مهسا_امینی', '#MahsaAmini', '#اعتصابات_سراسری', '#OpIran', '#IranRevolution', '#IranRevolution2022', '#ژینا_ئه‌مینی']

const twitter = (target) => {
	// Tweet
	if (target.getAttribute('data-testid') === 'cellInnerDiv') {
		const hashTags = target.querySelectorAll('a[href^="/hash"]')
		Array.prototype.forEach.call(hashTags, (hashtag) => {
			addHashFlag(hashtag, hashtag.innerText)
		})
		return
	}

	// Typehead suggestion
	if (target.getAttribute('data-testid') === 'typeaheadResult') {
		addHashFlag(target.querySelector('span'), target.innerText)
		return
	}
}

const tweetDeck = (target) => {
	// Tweetdeck Stream
	if (target.classList.contains('stream-item')) {
		const hashTags = target.querySelectorAll('a[rel="hashtag"]')
		Array.prototype.forEach.call(hashTags, (hashtag) => {
			addHashFlag(hashtag, hashtag.innerText)
		})
		return
	}
}

const StartKeyCode = 49;
const keyCodeNotInRange = (keyCode) => !(keyCode >= StartKeyCode && keyCode < StartKeyCode + HASHTAG_GOLIST.length)

const hashtagShortcuts = (event) => {
	const {composed, shiftKey, ctrlKey, keyCode} = event;
	
	if(keyCodeNotInRange(keyCode)) return
	if(!(composed && shiftKey && ctrlKey)) return
	event.preventDefault();
	return insertHashtag(keyCode)
}

const insertHashtag = (keyCode) => {
	const index = keyCode - StartKeyCode;
	const hashtagToInsert = HASHTAG_GOLIST[index]
	const textArea = document.querySelector('.compose-text')
	if(textArea !== document.activeElement) return;
	textArea.value += `${hashtagToInsert} `
	return;
}

const addHashFlag = (element, hashtagText) => {
	hashtagText = hashtagText.toLowerCase().trim()
	if (HASHTAG_GOLIST.some((item) => item.toLowerCase() === hashtagText)) {
		const hashFlag = createHashflag()
		element.appendChild(hashFlag)
	}
}


const createHashflag = () => {
	const img = document.createElement('img')
	img.style.width = '1.2em'
	img.style.height = '1.2em'
	img.style.verticalAlign = '-20%'
	img.style.margin = '0 0.075em'
	img.src = HASHFLAG;

	return img;
}

// Process inserted nodes
window.addEventListener('DOMNodeInserted', ({ target }) => {
	if (typeof target.getAttribute !== 'function') return
	if(window.location.host === HOSTS.TweetDeck) {
		document.addEventListener('keydown', hashtagShortcuts)
		return tweetDeck(target)
	}
	if(window.location.host === HOSTS.Twitter) return twitter(target)
	return;
})
