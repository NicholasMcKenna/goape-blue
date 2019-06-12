$( document ).ready(function() {
    
    $('.couponLabel').click(function() {
        $('#couponId').toggleClass('visible');
        $('.addCouponCtl .button').toggleClass('visible');
        $('.addCouponCtl').toggleClass('code-active');
        $('.couponLabel').toggleClass('code-active');
    });

    // make the delivery address form 
	$("input[name=DeliveryMethod]").change(function(){
		$('#deliveryMethodSelection .DeliveryZipCode').append($('#deliveryMethodSelection #qasContainer'));
		$('#qasLink>span>a').css('padding','4px');
	});
});