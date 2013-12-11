# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Project.delete_all

Project.create!(
		name: 'VVMC',
		description: %{This is a description for VVMC project that I've stored so many times before.},
		imageUrl: 'vvmc.png',
		tags: 'c#, asp.net, umbraco, html, js, css',
		liveUrl: 'http://www.vvmc.com'
	)
Project.create!(
		name: 'MountainGames',
		description: %{This is a description for VVMC project that I've stored so many times before.},
		imageUrl: 'teva.png',
		tags: 'c#, asp.net, umbraco, html, js, css',
		liveUrl: 'http://www.mountaingames.com'
	)
Project.create!(
		name: 'MissionBay',
		description: %{This is a description for Mission Bay project that I've stored so many times before.},
		imageUrl: 'missionbay.png',
		tags: 'c#, asp.net, umbraco, html, js, css',
		liveUrl: 'http://www.acc-missionbayconferencecenter.com'
	)
Project.create!(
		name: 'VRI',
		description: %{This is a description for Vail Resorts project that I've stored so many times before.},
		imageUrl: 'vvmc.png',
		tags: 'c#, asp.net, umbraco, html, js, css',
		liveUrl: 'http://www.snow.com'
	)
Project.create!(
		name: 'BHCVB',
		description: %{This is a description for Beverly Hills project that I've stored so many times before.},
		imageUrl: 'bhcvb.png',
		tags: 'c#, asp.net, umbraco, html, js, css',
		liveUrl: 'http://www.lovebeverlyhills.com'
	)