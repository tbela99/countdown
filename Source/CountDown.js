/*
---
script: CountDown.js
license: MIT-style license.
description: CountDown - a mootools countdown implementation.
copyright: Copyright (c) 2008 Thierry Bela
authors: [Thierry Bela]

requires: 
  core:1.2.3: 
  - Events
  - Options
provides: [CountDown]
...
*/

	var CountDown = new Class({
		
		/* 
		
		options: {
	
			onChange: $empty,
			onComplete: $empty,
			date: null,
			frequency: 1000 //define the update frequency (in ms), default to 1000
		},

		*/
		Implements: [Options, Events],
		initialize: function (options) {
	
			this.setOptions(options);
			if(!this.options.date instanceof Date) this.options.date = new Date(this.options.date);
			
			this.timer = new PeriodicalExecuter(this.update.bind(this), (this.options.frequency || 1000) / 1000);
		},
		stop: function () {
		
			this.timer.stop();			
			return this
		},
		start: function () {
		
			this.timer.registerCallback();			
			return this
		},
		update: function () {
		
			var millis = Math.max(0, this.options.date.getTime() - new Date().getTime()),
				time = Math.floor(millis / 1000),
				stop = time == 0,
				countdown = {
			
					days: Math.floor(time / (60 * 60 * 24)), 
					time: time,
					millis: millis
				};
			
			time %= (60 * 60 * 24);
			
	        countdown.hours = Math.floor(time / (60 * 60));
			time %= (60 * 60);
	        countdown.minutes = Math.floor(time / 60);
	        countdown.second = time % 60;
			
			this.fireEvent('onChange', countdown);
			
			if(stop) {
			
				this.timer.stop();
				this.fireEvent('onComplete');
			}
		}
	});
	