function loadPageToCorrectHash() {
    var windowHash = window.location.hash;
    var sectionId = ('a[href='+ windowHash + ']');


    $('.tabs ' + windowHash).fadeIn(400).css('display', 'flex').siblings().hide();

    $(sectionId).parent().addClass('active').siblings().removeClass('active');

    // WHY won't this work? 
    // $(document).scrollTOP(0);
}





$(document).ready(function() {

    loadPageToCorrectHash();



//js to toggle tab-content on mainpage
    $('.tabs .tab-links a').click(function(e)  {
        var currentAttrValue = $(this).attr('href');
 
        // Show/Hide Tabs
        $('.tabs ' + currentAttrValue).fadeIn(400).css('display', 'flex').siblings().hide();
 
        // Change/remove current tab to active
        $(this).parent('li').addClass('active').siblings().removeClass('active');

        //change url on click
        document.location.hash = currentAttrValue;
        e.preventDefault();

        $(document).scrollTop(0);
    });



    $('#js-mobile-menu-button').click(function() {
        $('.mobile-menu').slideToggle('fast');
    });

});
