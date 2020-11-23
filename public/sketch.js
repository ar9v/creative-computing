p5.disableFriendlyErrors = true; // disables FES
export let hueSketch = (p, n) => {
	p.barWidth = 20;
	p.lastBar = -1;
	p.canvasWidth = document.querySelector("#sketch-holder").offsetWidth;
	p.canvasHeight = document.querySelector("#sketch-holder").offsetHeight;

	p.setup = function() {
		p.createCanvas(p.canvasWidth, p.canvasHeight);
		p.colorMode(p.HSB, p.height, p.height, p.height);
		p.noStroke();
		p.background(0);
	}

	p.draw = function () {
		p.whichBar = p.mouseX / p.barWidth;
		if (p.whichBar !== p.lastBar) {
			p.barX = p.whichBar * p.barWidth;
			p.fill(p.mouseY, p.height, p.height);
			p.rect(p.barX, 0, p.barWidth, p.height);
			p.lastBar = p.whichBar;
		}
	}
};

export let noteSketch = (p, n) => {

	p.scaleArray = [60, 62, 64, 65, 67, 69, 71, 72];
	p.noteKeys = {
		'a': 60,
		'w': 61,
		's': 62,
		'e': 63,
		'd': 64,
		'f': 65,
		't': 66,
		'h': 67,
		'u': 68,
		'j': 69,
		'i': 70,
		'k': 71,
		'l': 72
	}
	p.note = 0;

	p.setup = function () {
		p.createCanvas(710, 200);
		p.osc = new p5.SinOsc();

		// Instantiate the envelope
		p.envelope = new p5.Env();

		// set attackTime, decayTime, sustainRatio, releaseTime
		p.envelope.setADSR(0.001, 0.5, 0.1, 0.5);

		// set attackLevel, releaseLevel
		p.envelope.setRange(1, 0);


		p.fft = new p5.FFT();
		p.noStroke();
	}

	p.draw = function() {
		p.background(20);

		// plot FFT.analyze() frequency analysis on the canvas
		p.spectrum = p.fft.analyze();
		for (p.i = 0; p.i < p.spectrum.length / 20; p.i++) {
			p.fill(p.spectrum[p.i], p.spectrum[p.i] / 10, 0);
			p.x = p.map(p.i, 0, p.spectrum.length / 20, 0, p.width);
			p.h = p.map(p.spectrum[p.i], 0, 255, 0, p.height);
			p.rect(p.x, p.height, p.spectrum.length / 20, -p.h);
		}
	}

	p.keyPressed = function() {
		let valueToPlay = p.noteKeys[p.key]
		p.osc.start();
		
		if(valueToPlay != undefined) {
			// It's a letter key, play a sound
			p.midiValue = valueToPlay
			p.freqValue = p.midiToFreq(p.midiValue);
			p.osc.freq(p.freqValue);

			p.envelope.play(p.osc, 0, 0.1);

			p.spectrum = p.fft.analyze();
			for (let i = 0; i < p.spectrum.length / 20; i++) {
				p.fill(p.spectrum[i], p.spectrum[i] / 10, 0);
				p.x = p.map(i, 0, p.spectrum.length / 20, 0, p.width);
				p.h = p.map(p.spectrum[i], 0, 255, 0, p.height);
				p.rect(p.x, p.height, p.spectrum.length / 20, -p.h);
			}
		}
	}

};
