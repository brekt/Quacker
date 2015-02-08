forms

	post form

navigation
	sign in or sign up
		if no cookie, sign-up or sign in
		if cookie, sign out
	search
	home	

pages
	home page
		user section
		all posts by timestamp

	results page
		all posts by query and timestamp

quacker database
	table of users
		user_id
		user_name
		user_email
		user_password
		
	table of is_following
		follower_id
		followed_id

	table of quacks
		quack_id
		quack_user_id
		quack_content
		quack_timestamp

	table of tags
		tag_id
		tag_name

	table of quack tags
		ref_quack_id
		ref_tag_id	



form submit a quack
	routes js file using knex

