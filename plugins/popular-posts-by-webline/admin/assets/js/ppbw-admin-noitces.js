// JS to handle admin notices for customize_remind_later button
jQuery(document).on('click', '.ppbw_customize_remind_later[data-action="ppbw_customize_remind_later"]', function (e) {
    console.log("1");
    e.preventDefault();
    document.cookie = 'ppbw_customize_remind_later=true; max-age=' + (7 * 24 * 60 * 60);
    jQuery(this).closest('.notice').fadeOut(300, function () {
        jQuery(this).remove();
    });
});

// JS to handle admin notices for rating_remind_later button
jQuery(document).on('click', '.ppbw_rating_remind_later[data-action="ppbw_rating_remind_later"]', function (e) {
    e.preventDefault();
    document.cookie = 'ppbw_rating_remind_later=true; max-age=' + (15 * 24 * 60 * 60);
    jQuery(this).closest('.notice').fadeOut(300, function () {
        jQuery(this).remove();
    });
});

// JS to handle close button generated by 'is-dismissible' class
jQuery(document).on('click', '.ppbw.notice.is-dismissible .notice-dismiss', function (e) {
    e.preventDefault();
    document.cookie = 'ppbw_dismissed=true; path=/';
    jQuery(this).closest('.notice').fadeOut(300, function () {
        jQuery(this).remove();
    });
});
