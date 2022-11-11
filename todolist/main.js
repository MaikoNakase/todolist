$(function () {
	var list = [];
	var i = 0;

	for(var key in localStorage){
		list[key] = localStorage.getItem(key);
	}

	for(i in list){
		console.log(i);
		cleateLi(list[i]);
	}

	i++;

	$('#save').click(function(){
		var memo = $('#memo').val();

		if(!memo) return;
		localStorage.setItem(i, memo);

		cleateLi(memo);
		$('#memo').val('');

		i++;
        
	});

	function cleateLi(value){
		var li = $('<li>').html(value).addClass('todo').attr('data-todo',i);

		$('ul').append(li);

		$('ul').on('click', '.todo', function(){
			localStorage.removeItem($(this).data('todo'));
			$(this).remove();
			console.log($(this).data('todo'));
		});
	}

	$('#clear').click(function(){
		localStorage.clear();
		$('li').remove();
	});
})