$(function() {
    $('#yes').click(function(event) {
        modal('我就知道您一定会愿意的。(^_^)', function() {
            $('.page_one').addClass('hide');
            $('.page_two').removeClass('hide');
            // typeWrite();
            fireworks();

        });
    });
    $('#no').click(function(event) {
        modal('李毅在这给您拜年了！', A);
    });
});

function A() {
    modal('不发红包的新年快乐，都是耍流氓！', B);
}

function B() {
    modal('我们之间，除了新年快乐，难道没有一个大点的红包吗？', C);
}

function C() {
    modal('红包发我多少，你就瘦多少', D);
}

function D() {
    modal('拒绝我，不存在的', E);
}

function E() {
    modal('如果再见不能红着眼，至少红包甩我脸', F);
}

function F() {
    modal('千山万水总是情，给个红包行不行', G);
}

function G() {
    modal('过年好，过年好，给个红包少不了！', H);
}

function H() {
    modal('叔叔阿姨新年好 红包随便给多少', I);
}

function I() {
    modal('爱你。么么哒！', J)
}

function J() {
    modal('什么也不说，能收到你的祝福和红包，我最开心', function() {
        fireworks();
    });
}

function fireworks() {
    $('.page_one').addClass('hide');
    initAnimate();
}

function modal(content, callback) {
    var tpl = '<div class="container">'+
        '<div class="mask"></div>'+
        '<div class="modal">'+
        '<p>'+ content +'</p>'+
        '<button type="button" id="confirm" class="confirm">确定</button>'+
        '</div>'+
        '</div>';
    $('body').append(tpl);
    $(document).on('click', '.confirm', function() {
        $('.container').remove();
        callback();
    });
}