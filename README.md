CountDown
============

A mootools counter / countdown


How to use
---------------------


### HTML:

	<div id="counter">countdown not started</div>
	 
### Javascript:

	var div = $('counter'),
		countdown = new CountDown({
	
			//initialized 30s from now
			date: new Date(new Date().getTime() + 30000),
			//update every 100ms
			frequency: 100, 
			//update the div#counter
			onChange: function(counter) {
			
				var text = '';
				
				if(counter.days > 0) text = counter.days + ' d ';
				
				text += (counter.hours > 10 ? '' : '0') + counter.hours + ':';
				text += (counter.minutes > 10 ? '' : '0') + counter.minutes + ':';
				text += (counter.second > 10 ? '' : '0') + counter.second + ':';
				text += ' - ' + (counter.millis > 10 ? '' : '0') + counter.millis + ':';
				
				div.set('text', text)
			},
			//complete
			onComplete: function () {
			
				div.set('text', 'Countdown completed.')
			}
		});


### Options:

* countdown  - (*boolean*) if true the object will act as a countdown, if false it will act as a counter. default to true.
* date  - (*mixed*) the date when the timer will be stopped. it can be a date object, a string representation of a date or time in ms.
* frequency  - (*int*, optional) frequency between two updates.

### Events:

#### change

used to perform updates.

##### Signature:

	onChange(counter)

##### Arguments:

* counter - (*object*) object with informations about the remaining time.

##### counter:

- days: remaining days
- hours: remaining hours
- minutes: remaining minutes
- seconds: remaining seconds
- time: remaining time in s
- millis: remaining time in ms

#### complete

Fired when the countdown is completed.

##### Signature:

	onComplete()
	
Method: stop 
------------

stops the counter / countdown.

### Returns:

* (*object*) - This CountDown instance.

Method: start
----------------

starts the counter / countdown.

### Returns:

* (*object*) - This CountDown instance.