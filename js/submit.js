
/*Dont go away script*/
$(function() {

	$('form').submit(function(event) {
				event.preventDefault();
				$.ajax({
					type: "POST",
					url: "php/smart.php",
					data: $(this).serialize()
				}).done(function() {
					$(this).find("input").val("");
					alert("Сообщение успешно отправлено. Благодарю!");
					$("form").trigger("reset");
				});
				return false;
			});
});

