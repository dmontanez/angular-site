function navDisplay() {
    $(document).ready(function() {
        $(".dropdown-menu li a").on('click', function(event) {
            var dropTitle = $(this).text() + " ";
           $(this).closest('div').find('button text').text(dropTitle);
        });

        var w = $(window).width();
            if( w < 650) {
                $(".dropdown.small").show();
                $(".nav-tabs").hide();
            }else {
                $(".nav-tabs").show();
                $(".dropdown.small").hide();
            }

        $(window).on("resize", function(event){
            w = $(window).width();
            if( w < 650) {
                $(".dropdown.small").show();
                $(".nav-tabs").hide();
            }else {
                $(".nav-tabs").show();
                $(".dropdown.small").hide();
            }
        });
    });
};