////////////////////
//Version 2.0.3
////////////////////

////////////////////
//Global config
////////////////////
var config = {
	//The original map width, usually found in original SVG file, don't change this unless you are creating a new map
	mapWidth : 501.000,
	//The original map height, usually found in original SVG file, don't change this
	mapHeight : 596.193,
	//If true, will trigger a window resize listener
	responsive : true,
	//Color when a state is disabled
	offColor : '#ccc',
	//stroke color for states
	strokeColor : '#24221f',
	//stroke color for disabled states
	offStrokeColor : '#444',
	//text color of state abbreviations
	abbreviationColor : '#f2f2f2',
	//font size of state abbreviations
	abbreviationFontSize : 14,
	//show/hide abbreviations on disabled states
	displayAbbreviations : true,
	//show/hide abbreviations on disabled states
	displayAbbreviationOnDisabledStates : false,
	//true and state trigger text chnage, false to go to url on state click
	useText : true,
	//if useText true, set if text is to the right of the map or below
	useTextAtBottom : false,
	//href target when state is clicked if using urls
	hrefTarget: '_blank',
	//width of text area if to the right of the map, if bottom textarea will be width of map
	textAreaWidth : 500,
	//height of textarea if at bottom, if to the right height will be height of the map
	textAreaHeight : 300,
	//size of pins on the map
	pinSize : 10,
	//default text on map load if using text
	defaultText: "<h1>Monaco</h1><br /><p>Monaco is a tiny independent city-state on France’s Mediterranean coastline known for its upscale casinos, yacht-lined harbor and prestigious Grand Prix motor race, which runs through Monaco’s streets once a year. Monte-Carlo, its major district, is home to an elegant belle-époque casino complex and ornate Salle Garnier opera house. It also has many luxe hotels, boutiques, nightclubs and restaurants.</p>",
	//if true, displays current mouse position on screen to help position pins
	//Note that when this is true, the map is not resized so the mouse position is to original scale
	displayMousePosition: false
}

////////////////////
//State config
////////////////////
var paths = [
	{
		//set to false to disable state i.e. no mouse events
		enable: true,
		//Name displayed in state tooltip
		name: 'Larvotto',
		//2 letters abbreviation displayed on the state
		abbreviation: 'LA',
		//abrreviation x position
		textX: 417,
		//abrreviation y position
		textY: 114,
		//state fill color
		color: '#59798e',
		//state hover color
		hoverColor: '#E32F02',
		//state selected color
		selectedColor: '#feb41c',
		//url when state is clicked if useText false
		url: 'http://themeforest.net/user/lglab/?ref=LGLab',
		//text displayed in textarea when useText true
		text: '<h1>Larvotto</h1><br /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>',
		path: 'M503.5,44l3.5,6l-10.67,5.5l4.67,66.83L488.17,129l-16.5-7l-11-20.83c0,0-3.21,0.02-6.84,1.83     c-4,2-7.83,6.5-7.83,6.5l5,7.33l3.33-3.5l2.67,3.34l-6,4l-1.33,6.16L442.5,130l-1.5-3l6.67-3v-4l-5.34-3.33c0,0-12.5,2-16.66,6.33     c-4.34,4.51-5,12-5,12l3.33,3.17l2.33-2l1.67,2l-9.33,9.5l-2.17-2.34l3.67-4.16c0,0,0.6-2.11-3.17-5.5     c-1.67-1.5-11.17,3.33-15.17,6.66c-4,3.34-4.33,6.67-4.33,6.67l0.33,13.67l4.5-0.17l3.17-3.5l0.67,1.17l-4.84,5.33     c0,0-5.66,0.5-7.66,3.17c-2,2.66-1.34,17.33-1.34,17.33s-13.33,20-16.66,24.67c-3.34,4.66-21.84,35.83-21.84,35.83l-9.33-1.5     l3.25-51.25l4.75-18l14.75-30.5L379,128l59.5-45.25l21.75-14.5l34.58-18.92L503.5,44z'
	},
	
	{
		enable: true,
		name: 'Saint-Roman',
		abbreviation: 'SR',
		textX: 389,
		textY: 91,
		color: '#B12401',
		hoverColor: '#E32F02',
		selectedColor: '#feb41c',
		url: 'http://themeforest.net/user/lglab/?ref=LGLab',
		text: '<h1>Saint-Roman</h1><br /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>',
		path: 'M487.5,5.5l10,14.83l-5.83,18l3.16,11l-34.58,18.92l-21.75,14.5L379,128l-11.75,17.25l-14.75,30.5l-4.75,18     c0,0-7.75,2.5-9.75,2.5s-11.5-2.5-11.5-2.5l-8,21.25L300,229.25c0,0-9-1.75-12.5-1.75s-9.17,1.83-9.17,1.83l12.84-16.83l6.83-5.67     l8-11.66c0,0,16.33-14.34,17-16.34s1.72-13.82,3-16.16c1-1.84,6.5-9.17,8.17-12c1.51-2.57,4.16-26.67,4.16-28.67s6.34-5.83,9-7.17     c2.67-1.33,9.84-25,9.84-25l9.83-4.5l5.17-16.5c0,0,8.16,1.17,12.16,1.84c4,0.66,7.34-2,7.34-2l8.66-6.67l8.67-0.67l32.17-14.5     c0,0,6.83,1.17,12.16-2.16c5.34-3.34,22.5-23.67,22.5-23.67l-7.5-9l2.17-8.83c0,0,6.83,3.33,10.83,3.33S487.5,5.5,487.5,5.5z'
	},
	
	{
		enable: true,
		name: 'La Condamine',
		abbreviation: 'CO',
		textX: 187,
		textY: 393,
		color: '#9a9a68',
		hoverColor: '#E32F02',
		selectedColor: '#feb41c',
		url: 'http://themeforest.net/user/lglab/?ref=LGLab',
		text: '<h1>La Condamine</h1><br /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>',
		path: 'M354,344.67l3.67,4.33l-57.5,72.83L289,417.25l-43,12.5c0,0-7.75-0.25-9.5-0.25s-26.98,4.5-32,4.25     c-5-0.25-42.75-7.75-42.75-7.75s-3.5-16-3.75-20s-0.25-19-0.25-19l18-24c0,0,29-29,29.75-29.5s10.5-6.75,10.5-6.75s40.5-6,42.5-5.75     c0.07,0.01,0.15,0.02,0.24,0.04c2.51,0.45,12.76,3.71,12.76,3.71l2.43,4.44c-0.58,0.09-0.93,0.14-0.93,0.14l0.67,13.17l-2.5,0.17     l-1-8.5c0,0-7.84-2.17-9.84-2.17S220,336.5,218,337.17c-2,0.66-6.5,25.66-6.5,25.66l6.33,5.17l0.67,9l1.5-0.5l-1.17-20.17l2.93-9.38     c-0.9,5.12,1.57,29.72,1.57,29.72l4.34-0.67l-1.84-21.83h3l4.17,46.5h-2.17l-2.83-19.5l-3.5-0.17l1.17,20.67l-1.67,0.16l-2.83-19.66     l-2.84,0.5L218,396l4,10.33l-1,0.67l-5.5-12.83l-3.83,0.5l12.83,26.83l3.17-0.83l-2-9.84l1.5-0.5l2.83,10l1.83-0.83l-2.16-11.33     l2.16-0.67l2.67,11.17l10-2.34l-2.67-12.16l-2.33,0.66L239,400l5.83-1.5l2.17,4.17l-2.5,0.83l3.33,11.5l7.5-1.67L252.5,399     l2.17-1.17l3,14.84l6.83-2.84l-2.17-14.66l2-1l3,15l7-1.34l-1.5-10.16l2.17-0.34l1.33,9.67l4.34-1l-1-5l1.66-0.83l1.5,5l3.17-0.84     l-0.33-5H287l1.5,4.17l4.17-1.5l-2.5-25.17l4.83-0.16l1.33,10L305,393l7-0.67l4.33,1.67L354,344.67z'
	},

	{
		enable: true,
		name: 'Monte-Carlo',
		abbreviation: 'MC',
		textX: 316,
		textY: 264,
		color: '#59798e',
		hoverColor: '#E32F02',
		selectedColor: '#feb41c',
		url: 'http://themeforest.net/user/lglab/?ref=LGLab',
		text: '<h1>Monte-Carlo</h1><br /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>',
		path: 'M344.5,245l9.33,1.5c0,0-1.33,16.01-2.83,21.17s-8.17,24.66-8.17,24.66l2.17,7L337,312l-7,0.67l1.67,29.66     l-6,1.17l-3-21.83l-30.34,4.66L294,354l-5,0.33c0,0-0.52-22.75-1.83-25.16c-0.84-1.54-10.22-0.39-13.24,0.021l-2.43-4.44     c0,0-10.25-3.26-12.76-3.71l0.01-0.04l16.75-8.5c0,0,10.75-2,14-2.75s2.5,0.25,4.5-5s-1.5-8.25-1.5-9s-14.25-12.5-14.25-13.25     s1.5-5,1.75-6.25s-7-5.5-7-6.5s8-14.75,8-14.75l3-9l16-16.75L318.5,215l8-21.25c0,0,9.5,2.5,11.5,2.5s9.75-2.5,9.75-2.5L344.5,245z'
	},

	{
		enable: true,
		name: 'Monaco-Ville',
		abbreviation: 'MO',
		textX: 223,
		textY: 455,
		color: '#B12401',
		hoverColor: '#E32F02',
		selectedColor: '#feb41c',
		url: 'http://themeforest.net/user/lglab/?ref=LGLab',
		text: '<h1>Monaco-Ville</h1><br /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>',
		path: 'M300.17,421.83L299,436.67l-9.33,13.5l-1.34,6.5l-2,3.33l-10.5,10.5l-7-1.17c0,0-3.83-4.66-6.5-4     c-2.66,0.67-2,5.67-2,5.67l-7.66,5.67h-4.34l-3.33,4.66v4l-4,0.17l-5.5,5.83l-4.17,0.17l-3,3.17l-5.33,0.66h-12l-2.67,20.17l-4,0.5     c0,0,2.67-23.17,1.34-24.67c-0.92-1.021-3.34,2.67-5.34,1.34c-2-1.34-2-16.84-8-16.67c-3.33,0.09-10,7.83-10,7.83l-6.16,0.5     l-11.84-21.66v4.66H161l0.17-5.66l-2.34,1.16l-1.35-2.46l-2.48-0.2l-0.78,1.88l-0.72-0.3l-16.62-18.63L161.75,426     c0,0,37.75,7.5,42.75,7.75c5.02,0.25,30.25-4.25,32-4.25s9.5,0.25,9.5,0.25l43-12.5L300.17,421.83z'
	},
	
	{
		enable: true,
		name: 'Saint Michel',
		abbreviation: 'SM',
		textX: 260,
		textY: 205,
		color: '#9a9a68',
		hoverColor: '#E32F02',
		selectedColor: '#feb41c',
		url: 'http://themeforest.net/user/lglab/?ref=LGLab',
		text: '<h1>Saint Michel</h1><br /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>',
		path: 'M300,229.25L284,246l-3,9l-8.25-5.75l-0.75-6.5l-4,3.5l-5.67-5.58L274,228l4.33,1.33     c0,0,5.67-1.83,9.17-1.83S300,229.25,300,229.25z M 245,195 L 275,195 L 275,215 L 245,215 z'
	},

	{
		enable: true,
		name: 'Moneghetti',
		abbreviation: 'MG',
		textX: 171,
		textY: 325,
		color: '#59798e',
		hoverColor: '#E32F02',
		selectedColor: '#feb41c',
		url: 'http://themeforest.net/user/lglab/?ref=LGLab',
		text: '<h1>Moneghetti</h1><br /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>',
		path: 'M292.5,295.75c0,0.75,3.5,3.75,1.5,9s-1.25,4.25-4.5,5s-14,2.75-14,2.75l-16.75,8.5l-0.01,0.04     c-0.09-0.021-0.17-0.03-0.24-0.04c-2-0.25-42.5,5.75-42.5,5.75s-9.75,6.25-10.5,6.75S175.75,363,175.75,363l-18,24c0,0,0,15,0.25,19     s3.75,20,3.75,20l-24.87,17.12c0,0-6.38,2.76-8.55,3.55c-0.87,0.32-9.1,6.88-17.94,14.01l-0.14-0.18l-16.75-26l-12.49-12.75     c0.04-1.77,0.49-8.37,0.49-8.37s1.5-2.26,1.25-3.88c-0.37-2.43-12.42-15.5-12.42-15.5s-4.5-5.67-3.66-8.17     c1.5-4.5,38.83-41.5,42.83-43.83c3.64-2.12,31.5-24,31.5-24s18.67-19.33,23.33-21.33c4.67-2,8.84-7.17,8.84-7.17s-9.67-3.17-9-6.5     c0.66-3.33,2.5-4.33,2.5-4.33l13.66,4.66c0,0,19.67-18.66,23-20C206.67,262,217.67,250,217.67,250l0.16-4.67l13-13.66l11-6.5     l20.5,15.5l5.67,5.58l4-3.5l0.75,6.5L281,255c0,0-8,13.75-8,14.75s7.25,5.25,7,6.5s-1.75,5.5-1.75,6.25S292.5,295,292.5,295.75z'
	},

	{
		enable: true,
		name: 'Fontvieille',
		abbreviation: 'FO',
		textX: 124,
		textY: 519,
		color: '#B12401',
		hoverColor: '#E32F02',
		selectedColor: '#feb41c',
		url: 'http://themeforest.net/user/lglab/?ref=LGLab',
		text: '<h1>Fontvieille</h1><br /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>',
		path: 'M225,522.83l2,5.17l-48.17,30.67c0,0-40.05,42.03-43.16,40.66c-2.67-1.16-31.34-29-34.5-32     c-2.04-1.93-29.53-25.561-54.45-46.93l1.61-0.4c0,0,23.34-37.21,26.67-39.88c3.33-2.66,3.33-2.12,5.33-0.79     c2,1.34,5.29,1.05,7.42-0.45c1.56-1.11,12.5-10.03,22.64-18.2c8.84-7.13,17.07-13.689,17.94-14.01c2.17-0.79,8.55-3.55,8.55-3.55     l16.62,18.63l0.72,0.3l-0.05,0.12l2.36,1.45l-0.7,2.21l-2.83-2.66l-2.67,2.16l-2-0.66l-10,8l-0.5,2.16l10.5-7.66l0.17,2.16     L137.67,477l0.16,3.83l20-1.83l11.17,8.67l-1,1.66l-10-7l-7.67,0.34l-0.66,20l8.66-0.34l0.67,8.17l17.17-0.5l0.66-11.83l2.67,0.33     l0.67,11.67l8.16,0.33l1.02-3.06l1.15-7.61l1.5-0.33l0.17,9.5l-1.17,5c0,0,0,0,0,2s1.33,10,4,12.67c2.67,2.66,7.17,9,9.83,8.33     c2.67-0.67,14.17-8.17,14.17-8.17l0.83-3.83L225,522.83z'
	},
	
	{
		enable: true,
		name: 'La Colle',
		abbreviation: 'CL',
		textX: 42,
		textY: 479,
		color: '#9a9a68',
		hoverColor: '#E32F02',
		selectedColor: '#feb41c',
		url: 'http://themeforest.net/user/lglab/?ref=LGLab',
		text: '<h1>La Colle</h1><br /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>',
		path: 'M110.25,460.5l0.14,0.18c-10.14,8.17-21.08,17.09-22.64,18.2c-2.13,1.5-5.42,1.79-7.42,0.45     c-2-1.33-2-1.87-5.33,0.79C71.67,482.79,48.33,520,48.33,520l-1.61,0.4C25.42,502.12,6,485.5,6,485.5l21-26.67     c0,0,3.37-2.03,7.72-4.61c1.66-0.25,12.23-1.84,14.53-1.84c2.5,0,14,3.37,17.63,3.12c3.25-0.22,5.62-0.62,6.62-1.62     s6.5-5.13,6.5-5.13s0.96-5.71,0.25-6.5c-1.25-1.37-1.13-1.75-1.13-1.75s-0.12-11,0.63-13S81,423.25,81,422c0-0.07,0-0.15,0.01-0.25     L93.5,434.5L110.25,460.5z'
	},

	{
		enable: true,
		name: 'Les Révoires',
		abbreviation: 'RV',
		textX: 40,
		textY: 420,
		color: '#59798e',
		hoverColor: '#E32F02',
		selectedColor: '#feb41c',
		url: 'http://themeforest.net/user/lglab/?ref=LGLab',
		text: '<h1>Les Révoires</h1><br /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>',
		path: 'M81.01,421.75C81,421.85,81,421.93,81,422c0,1.25-0.5,3.5-1.25,5.5s-0.63,13-0.63,13s-0.12,0.38,1.13,1.75     c0.71,0.79-0.25,6.5-0.25,6.5s-5.5,4.13-6.5,5.13s-3.37,1.4-6.62,1.62c-3.63,0.25-15.13-3.12-17.63-3.12     c-2.3,0-12.87,1.59-14.53,1.84c7.42-4.42,17.69-10.47,18.95-10.89c2-0.66,12.66,0,12.66,0s6-2,6-4.66c0-2.67,0-11.34,0-11.34     l0.84-7.83l-3.84-12.17v-6.83l1-6.5c0,0,12.05,13.07,12.42,15.5c0.25,1.62-1.25,3.88-1.25,3.88S81.05,419.98,81.01,421.75z M 25,410 L 55,410 L 55,430 L 25,430 z'
	}
]

////////////////////
//Pins config
////////////////////
var pins = [
	{
		//text displayed in tooltip
		name: 'Casino de Monte-Carlo',
		//pin x position
		xPos: 324,
		//pin y position
		yPos: 294,
		//pin source if using an image
		src: 'http://freehtml5maps.com/images/map-marker-icon.png',
		//pin source image width
		srcWidth: 68,
		//pin source image height
		srcHeight: 102,
		//pin width
		pinWidth: 34,
		//pin height
		pinHeight: 51,
		//pin fill color
		color: '#ffc90e',
		//pin hover color
		hoverColor: '#E32F02',
		//pin selected color
		selectedColor: '#feb41c',
		//pin url is useText false
		url: 'http://themeforest.net/user/lglab/?ref=LGLab',
		//text displayed in textarea when pin is clicked and useText true
		text: '<h1>Casino de Monte-Carlo</h1><br /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>'
	}

]
