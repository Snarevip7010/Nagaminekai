//ロード時、画面サイズがスマホサイズ(559px以下)になった時にギャラリー画像にtarget=_blankを付与
window.onload = $(function(){
        var windowWidth = $(window).outerWidth();
        var maxwidth = 559;
        if(windowWidth > maxwidth) {
            $(".activeblank").attr('target', '_blank');
            $(".activeblank").attr('rel', 'noopener noreferrer');
        }
});