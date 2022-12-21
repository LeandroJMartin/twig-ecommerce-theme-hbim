(function($){
    $(".lazy").lazyload();

    if($.fn.jquery != '1.6.2'){

        $('.banner-home-slide').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="165.116 0 369.767 700" width="50" height="50" class="slick-arrow arrow-prev"><path d="M170.965,363.918l330.214,330.214c3.814,3.961,8.948,5.868,13.937,5.868c4.987,0,10.122-2.054,13.936-5.868c7.775-7.774,7.775-20.244,0-28.019L212.92,349.981L529.051,33.85c7.775-7.775,7.775-20.244,0-28.019 c-7.774-7.775-20.244-7.775-28.019,0L170.819,336.045C163.19,343.674,163.19,356.289,170.965,363.918z"/></svg>',
            nextArrow: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="165.116 0 369.767 700" width="50" height="50" class="slick-arrow arrow-next"><path d="M529.18,336.045L198.966,5.831c-7.774-7.775-20.244-7.775-28.019,0c-7.775,7.775-7.775,20.244,0,28.019l316.131,316.131L170.948,666.113c-7.775,7.774-7.775,20.244,0,28.019c3.813,3.814,8.948,5.868,13.936,5.868c4.988,0,10.122-1.907,13.937-5.868l330.214-330.214C536.809,356.289,536.809,343.674,529.18,336.045z"/></svg>',

            responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }]
        });
    }

})(jQuery);

// COLOR APPLY
;(function( $ ){

    "use strict";

    $.fn.colorApply = function( params ) {

        var options = $.extend( {
            'scope'  : $(document),
            'page'   : $('body').data('page')
        }, params);


        var methods = {
            init : function( ){

                this.setHeaderColor()
                    .setFooterColor()
                    .setElementsColor()
                    .setColorsByPage( options.page );

                return this;
            },


            setOptions : function( key, value ) {
                options[key] = value;
                return this;
            },


            getOptions : function( key ){
                return options[key];
            },

            setHeaderColor : function() {
                this.setOptions('scope', $('#NavSuperior'));

                $('.icon-busca', this.getOptions('scope')).addClass('color-tone-1');
                $('#NavSuperior').addClass('bg-tone-1');

                $('.nav-cliente a, .carrinho-compras li, .carrinho-compras a', this.getOptions('scope')).addClass('color-tone-2');
                $('.busca-botao', this.getOptions('scope')).addClass('bg-tone-2');


                $('.nav-cliente', this.getOptions('scope')).addClass('color-tone-5');

                $('#busca-palavra', this.getOptions('scope')).addClass('color-tone-7');

                return this;
            },

            setFooterColor : function() {
                this.setOptions('scope', $('#NavInferior'));

                $('.nav-pages', this.getOptions('scope')).addClass('bg-tone-1');

                $('#NavInferior').addClass('bg-tone-4');

                $('.redes-sociais a, .rodape-info .atendimento-fale-conosco, .atendimento .atendimento-fale-conosco a', this.getOptions('scope')).addClass('color-tone-6');

                $('.nav-pages li, .nav-pages a, .rodape-info h6, .rodape-info li, .atendimento li, .atendimento a, .copyright-mensagem', this.getOptions('scope')).not('.atendimento-fale-conosco, .atendimento-fale-conosco a').addClass('color-tone-10');

                $('.nav-pages a').hover(function(){
                    $(this).removeClass('color-tone-10').addClass('color-tone-6');
                }, function(){
                    $(this).removeClass('color-tone-6').addClass('color-tone-10');
                });

                $('.rodape-info, .rodape-info > ul > li', this.getOptions('scope')).addClass('border-tone-10');
                $('.copyright-mensagem').addClass('bg-tone-10');

                return this;
            },

            setElementsColor : function() {
                this.setOptions('scope', $('#div2bg'));

                $('.menu-esquerdo .nivel-2 a, .news h5, .news .news-nome, .news-nome-label, .breadcrumb, .breadcrumb a', this.getOptions('scope')).addClass('color-tone-1');
                $('.menu-esquerdo h3', this.getOptions('scope')).addClass('bg-tone-1');
                $('#menu-esquerdo, .menu-esquerdo .nivel-2, .menu-esquerdo .nivel-2 a, .breadcrumb', this.getOptions('scope')).addClass('border-tone-1');

                $('.por-preco, .precoAvista, .txt-por, .precoAvista, #a_partir, .PrecoPrincipal', this.getOptions('scope')).addClass('color-tone-2');
                $('.news-botao', this.getOptions('scope')).addClass('bg-tone-2');


                $('.menu-esquerdo h3 a, .menu-esquerdo h3 p, .menu-esquerdo .menu-icons', this.getOptions('scope')).addClass('color-tone-3');
                $('.menu-esquerdo h3', this.getOptions('scope')).addClass('border-tone-2');

                $('.menu-esquerdo .nivel-2').addClass('bg-tone-3');

                $('.menu-esquerdo .nivel-2 li', this.getOptions('scope')).hover(function(){
                    $(this).addClass('bg-tone-5');
                }, function(){
                    $(this).removeClass('bg-tone-5');
                });

                $('.vitrine-geral li, .vitrine-imagem', this.getOptions('scope')).addClass('border-tone-5');
                $('.vitrine-imagem', this.getOptions('scope')).addClass('border-opacity-25');

                $('#news', this.getOptions('scope')).addClass('bg-tone-5');

                $('.vitrine-geral .preco-de, .vitrine-geral .vitrine-parcela, #news-email', this.getOptions('scope')).addClass('color-tone-7');

                $('.vitrine-geral .vitrine-nome', this.getOptions('scope')).addClass('color-tone-9');

                return this;
            },

            setColorsByPage : function( page ) {

                switch(page){
                    case 'catalog':
                    case 'search':
                        this.setVitrine();
                        break;
                    case 'checkout_cart':
                    case 'finalizar_dados':
                    case 'checkout_payment':
                    case 'finalizar_finalizar':
                    case 'finalizar_presentes':
                    case 'login':
                    case 'register':
                        this.setCheckout();
                        break;
                    case 'product' :
                        this.setProduto();
                        break;
                }

                return this;
            },

            setProduto : function(){
                this.setOptions('scope', $('#Page'));

                $('.produto-nome, .varTit, #quantidade > label, #ProdAbas a, .produtos-relacionados-text, .cepbox-text, .icon-video', this.getOptions('scope')).addClass('color-tone-1');
                $('.varCont').addClass('border-tone-1');


                $('.produto-preco, .produto-calcular-frete', this.getOptions('scope')).addClass('bg-tone-5');
                $('.produto-preco, .produto-calcular-frete', this.getOptions('scope')).addClass('border-tone-5');

                // tone 6
                $('.produto-formas-pagamento a', this.getOptions('scope')).addClass('color-tone-6');

                $('.produto-dados, .relacionado-preco, .select', this.getOptions('scope')).addClass('color-tone-7');
                $('.select, .produto-imagem-miniatura', this.getOptions('scope')).addClass('border-tone-7');

                $('.relacionado-nome', this.getOptions('scope')).addClass('color-tone-9');


                return this;
            },

            setVitrine : function(){
                this.setOptions('scope', $('#Page'));

                $('.catalogo-nome, .filtros, .visual-type, .visual-type a, .catalogo-pages, .btn-proxima-pagina a, .btn-proxima-pagina, .btn-pagina-anterior, .btn-pagina-anterior a, .nomeProd a', this.getOptions('scope'))
                    .addClass('color-tone-1');

                $('.catalogo-filtros', this.getOptions('scope')).addClass('bg-tone-1 bg-opacity-15');
                $('.catalogo-nome, .catalogo-pagination, #destaqueCatalogo', this.getOptions('scope')).addClass('border-tone-1');

                $('.selectedPg', this.getOptions('scope')).addClass('bg-tone-2');


                $('.btns-paginator, .btns-paginator a', this.getOptions('scope'))
                    .not('.btn-proxima-pagina, .btn-pagina-anterior, .btn-proxima-pagina a, .btn-pagina-anterior a')
                    .addClass('color-tone-7');

                return this;
            },

            setCheckout : function() {
                this.setOptions('scope', $('#Page'));

                $('.carrinho-tabs li', this.getOptions('scope')).addClass('bg-tone-1');
                $('.passo-num, .carrinho-heading, h1, h3', this.getOptions('scope')).addClass('color-tone-1');
                $('.carrinho-tabs .passo-num', this.getOptions('scope')).addClass('bg-tone-5');

                return this;
            }
        };

        return this.each(function() {

            methods.init();

        });

    };

})( jQuery );

// DEFAULT
jQuery(function(){

    //Aparecer Barra Topo Flutuante
    jQuery(window).scroll(function(){
        if (jQuery(window).scrollTop() > 202) {
            jQuery('#barratopofix').fadeIn('fast');
        }else{
            jQuery('#barratopofix').fadeOut('fast');
        }
    });



    // Voltar ao Topo (Fade-in e Fade-out)
    jQuery(window).scroll(function(){
        if (jQuery(window).scrollTop() > 202) {
            jQuery('#voltaraotopo').fadeIn('fast');
        }else{
            jQuery('#voltaraotopo').fadeOut('fast');
        }
    });


    // Voltar ao Topo (Efeito rolar)
    jQuery('#voltaraotopo').click(function (){
        jQuery('html,body').animate({
           scrollTop : jQuery('#page-top').offset().top
        },1500);

    });


    //Grade e Lista pg Catalogo
    jQuery(function(){
        jQuery('#list').click(function(){
              jQuery('.product').removeClass('col-sm-4 grid');
              jQuery('.product').addClass('col-md-12 list');
        });

        jQuery('#grid').click(function(){
              jQuery('.product').removeClass('col-md-12 list');
              jQuery('.product').addClass('col-sm-4 grid');
        });
    });


    //Menu Responsivo
    jQuery(function(){

        /* MAIN MENU */
        jQuery('#main-menu-mob > li:has(ul.sub-menu-mob)').addClass('parent-mob');
        jQuery('ul.sub-menu-mob > li:has(ul.sub-menu-mob) > a').addClass('parent-mob');

        jQuery('#menu-toggle-mob').click(function() {
            jQuery('#main-menu-mob').slideToggle(300);
            return false;
        });

        jQuery(window).resize(function() {
            if (jQuery(window).width() > 1024) {
                jQuery('#main-menu-mob').removeAttr('style');
            }
        });

    });


    //Menu Responsivo - Busca
    jQuery(function(){

        /* MAIN MENU */
        jQuery('#main-menu-mob2 > li:has').addClass('parent-mob2');

        jQuery('#menu-toggle-mob2').click(function() {
            jQuery('#main-menu-mob2').slideToggle(300);
            return false;
        });

        jQuery(window).resize(function() {
            if (jQuery(window).width() > 1024) {
                jQuery('#main-menu-mob2').removeAttr('style');
            }
        });

    });

});

// OPEN-MOBILE V2
/**
 * Plugins - Init
 **/
;
(function ($) {
    $('head').append('<meta http-equiv="X-UA-Compatible" content="IE=edge" />');
    $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">');
    $('head').append('<meta name="mobileoptimized" content="0" />');


    var windowsize = $(window).width(); // when the browser resizes, reset the width
    if (windowsize <= 1024) {

        $(window).resize(function () {
            var windowsize = $(window).width(); // when the browser resizes, reset the width
            $('html').css('width', windowsize);
            $('header').css('width', windowsize);
            $('body').css('width', windowsize);
            $('#NavCentral').css('width', windowsize);
            $('footer').css('width', windowsize);
            $('#NavSuperior').css('width', windowsize);
            $('#div2bg').css('width', windowsize);
            $('#div1bg').css('width', windowsize);
            $('#NavInferior').css('width', windowsize);
            $('#Body').css('width', windowsize);
            $('#Page').css('width', windowsize);
            $('#NavLogoTray').css('display', 'none');
        });

        $('#wrapper').append('<div class="fundo-loading"><img src="https://images.tcdn.com.br/img/arquivos/372058/images/responsivo/loading.gif"></div>');
    }

    $(document).ready(function () {
        var windowsize = $(window).width(); // when the browser resizes, reset the width

        if(windowsize <=600 ){
             function openLightWindow(url, titulo, altura, largura, iframeNome) {

            var myLightWindow = new lightwindow();

            myLightWindow.activateWindow({
                href: url,
                title: 'ligthMobile',
                width: largura,
                height: altura,
                type: 'external'
            });
            (function ($) {
                var cssLink = document.createElement("link")
                cssLink.href = "file://path/to/style.css";
                cssLink.rel = "stylesheet";
                cssLink.type = "text/css";
                $("#lightwindow_iframe").load(function () {
                    var $head = $("#lightwindow_iframe").contents().find("head");
                    $head.append($("<link/>",
                            {rel: "stylesheet", href: "https://bbelintanitray.github.io/tema-mobile.css?v=11", type: "text/css"}));
                })

            })(jQuery);
            return false;
            }
        }

        if (windowsize <= 600) {





            $("LINK[href*='theme-advanced.css']").remove();
            $("LINK[href*='theme-custom.css']").remove();

            $('#container_thumb').removeAttr('href');
            $('.produto-zoom-detalhe').remove();



            $('.busca-palavra').attr('value', '');
            $('.busca-palavra').attr('placeholder', 'Buscar na loja');

            var corfundo = $('body').css('background-color');
            var corimagem = $('body').css('background-image');

            $('#logotipo').css('background-color', corfundo);
            $('#logotipo').css('background-image', corimagem);


            // $('button').addClass('bgcolor');
            // $('.botao-commerce').addClass('bgcolor');

                $('button').addClass('bgcolor');
                $('.botao-commerce').addClass('bgcolor');
                console.log($('#button-buy').find('img').length);

                if ($('#button-buy').find('img').length > 0) {
                    $('#button-buy img').css('display', 'block');
                    $('#button-buy').removeClass('bgcolor');
                }
                else {
                    $('#button-buy').html('COMPRAR');
                }

            $('header').find('.hamburguer').click(function() {
              $('html, body').animate({ scrollTop: 0 }, 0);
            $('header').css('position', 'relative');
            $('.first-level').fadeIn('fast');
            if (!$('.fundo-close').length) {
                $('body > div').before('<div class="fundo-close"></div>');
            } else {
                $('.fundo-close').fadeIn('fast');
            }
            $('.close-x').click(function() {
                $('.fundo-close').fadeOut('fast');
                $('.first-level').fadeOut('fast');
                $('header').css('position', 'fixed');

            })
        })



//            $('.menu-conta').click(function () {
//                if ($('#NavLateralEsquerda').css('display') == "block") {
//                    $('#NavLateralEsquerda').toggle('fast');
//                    $('.hamburguer').css('background', '  url(https://images.tcdn.com.br/img/arquivos/mobile/images/mobile/hamburguer-tema.png) center center no-repeat transparent');
//                }
//
//                if ($('.cabecalho .caixa-overflow').css('display') == "none") {
//                    $('.menu-conta').css('background', 'url(https://images.tcdn.com.br/img/arquivos/mobile/images/mobile/hamburguer-tema-x.png?v=7) center center no-repeat transparent');
//                }
//                else {
//                    $('.menu-conta').css('background', 'url(https://images.tcdn.com.br/img/arquivos/mobile/images/mobile/conta-tema.png?v=2) no-repeat scroll center center transparent');
//                }
//
//                $('.cabecalho .caixa-overflow').toggle('fast');
//            });


            $('.hamburguer').click(function () {
                if ($('.cabecalho .caixa-overflow').css('display') == "block") {
                    $('.cabecalho .caixa-overflow').toggle('fast');
                }
                $('html, body').scrollTop(0);
                $('#NavLateralEsquerda').toggle('fast');
                $('.env-busca').fadeOut('fast');
            })

            $('header').find('.lupa-resp').click(function () {
                $('.env-busca').toggle('fast');
                $('.cabecalho .caixa-overflow').fadeOut('fast');
                $('#NavLateralEsquerda').fadeOut('fast');
                $('.busca-palavra').focus();

            });

            $('header').find('.login-resp').click(function () {
                var loja = $('input[name="loja"]').val();
                document.location.href = 'login_layout.php?loja=' + loja + '&origem=central&f=';
            });

            $('header').find('.carrinho-resp').click(function () {
                var loja = $('input[name="loja"]').val();
                document.location.href = 'carrinho.php?loja=' + loja;
            });


            $('html').css('width', windowsize);
            $('header').css('width', windowsize);
            $('body').css('width', windowsize);
            $('#NavCentral').css('width', windowsize);
            $('footer').css('width', windowsize);
            $('#NavSuperior').css('width', windowsize);
            $('#div2bg').css('width', windowsize);
            $('#div1bg').css('width', windowsize);
            $('#NavInferior').css('width', windowsize);
            $('#Body').css('width', windowsize);
            $('#Body').css('min-width', windowsize);
            $('#Page').css('width', windowsize);
            $('#NavLogoTray').css('display', 'none');

            if ($('#tabela_carrinho').length) {

                $('#tabela_carrinho tr').not('#tabela_carrinho tr:first-child').each(function () {
                    var nome = $(this).find('strong').html();
                    $(this).before('<tr><td colspan="6" class="nome-produto-carrinho">' + nome + '</td></tr>');
                    $(this).find('td:nth-child(2)').hide();
                });

                $('.nome-produto-carrinho td:first-child').remove();
                $('table.tablePage:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > th:nth-child(1)').attr('colspan', '4');
                $('div.board:nth-child(4) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > th:nth-child(1)').attr('colspan', '8');
                $('div.board:nth-child(4) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1)').attr('colspan', '8');
                $('div.board:nth-child(4) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(2)').remove();
                $('div.board:nth-child(4) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(2)').remove();
            }

            if ($('.caixa-detalhes-compra').length) {
                $('.caixa-detalhes-compra tr:first-child').remove();

                $('.tit-nome-produto').each(function () {
                    var nome = $(this).html();
                    $(this).parent('tr').before('<tr><td colspan="6" class="nome-produto-pagamento">' + nome + '</td></tr>');
                    $(this).remove();
                });

                $('.tit-produto-total').attr('colspan', '3');

            }
            /* Carrinho */


            $('#quant').replaceWith($('#quant').clone().attr('type', 'number'));
            $('#email_login').replaceWith($('#email_login').clone().attr('type', 'email'));
            $('#email_cadastro').replaceWith($('#email_cadastro').clone().attr('type', 'email'));

            $('#numero_cartao').replaceWith($('#numero_cartao').clone().attr('type', 'number'));
            $('#codigo_seguranca').replaceWith($('#codigo_seguranca').clone().attr('type', 'number'));
            $('#validade_cartao_mes').replaceWith($('#validade_cartao_mes').clone().attr('type', 'number'));
            $('#validade_cartao_ano').replaceWith($('#validade_cartao_ano').clone().attr('type', 'number'));

            $('#cep1').attr('pattern','[0-9]*');
            $('#cep1').attr('inputmode','numeric');

            $('#cep2').attr('pattern','[0-9]*');
            $('#cep2').attr('inputmode','numeric');
            $('#cep_1').attr('pattern','[0-9]*');
            $('#cep_1').attr('inputmode','numeric');

            $('#cep_2').attr('pattern','[0-9]*');
            $('#cep_2').attr('inputmode','numeric');



            $('#cep_cadastro').attr('pattern','[0-9]*');
            $('#cep_cadastro').attr('inputmode','numeric');

            $('#cep_cadastro_2').attr('pattern','[0-9]*');
            $('#cep_cadastro_2').attr('inputmode','numeric');




            if($('#pf_cpf_cliente').length) $('#pf_cpf_cliente').replaceWith($('#pf_cpf_cliente').clone().attr('type', 'tel'));
            if($('#pj_cpf_cliente').length) $('#pj_cpf_cliente').replaceWith($('#pj_cpf_cliente').clone().attr('type', 'tel'));
            if($('#ie').length) $('#ie').replaceWith($('#ie').clone().attr('type', 'tel'));

            if($('#cnpj').length) $('#cnpj').replaceWith($('#cnpj').clone().attr('type', 'tel'));

            if($('#telefone_cliente_2').length) $('#telefone_cliente_2').replaceWith($('#telefone_cliente_2').clone().attr('type', 'tel'));
            if($('#telefone_cliente').length) $('#telefone_cliente').replaceWith($('#telefone_cliente').clone().attr('type', 'tel'));

            if($('#pf_data_nascimento').length) $('#pf_data_nascimento').replaceWith($('#pf_data_nascimento').clone().attr('type', 'tel'));
            if($('#pj_data_nascimento').length) $('#pj_data_nascimento').replaceWith($('#pj_data_nascimento').clone().attr('type', 'tel'));
            if($('#pf_rg_cliente').length) $('#pf_rg_cliente').replaceWith($('#pf_rg_cliente').clone().attr('type', 'tel'));

            if($('#codigo_seguranca').length) $('#codigo_seguranca').replaceWith($('#codigo_seguranca').clone().attr('type', 'tel'));
            $('#codigo_seguranca').attr('pattern','[0-9]*');
             $('#codigo_seguranca').attr('inputmode','numeric');

             if($('#email_login').length) $('#email_login').replaceWith($('#email_login').clone().attr('type', 'email'));
             if($('#email_cadastro').length) $('#email_cadastro').replaceWith($('#email_cadastro').clone().attr('type', 'email'));
             if($('#email_cliente').length) $('#email_cliente').replaceWith($('#email_cliente').clone().attr('type', 'email'));



            $('#search-key').replaceWith($('#search-key').clone().attr('type', 'search'));




            var f = $('iframe#none');
            f.load(function () {
                f.contents().find('.img_lighwindow').css('max-width', '100%');
            });


            $('#search-key').replaceWith($('#search-key').clone().attr('type', 'search'));

            $('.fundo-loading').remove();

            $('#FormasPagamento #ProdBlock').each(function () {
                $(this).click(function () {
                    $(this).siblings('.lista-formas-pagamento').toggle('slow');
                })
            })

            if ($(location).attr('pathname') == "/loja/retorno_pagamento.php") {
                $('#Page').addClass('msg-finalizar');
                $('#Page p').addClass('msg-p-finalizar');
                $('#Page p').addClass('msg-p-finalizar');
            }

            if ($(location).attr('pathname') == "/loja/carrinho.php") {
                // $('div.container:nth-child(4)').remove();
                // $('.container3').css('display', 'block');
                $('.prodBox').remove();
            }


            $('div.container:nth-child(14)').remove();


            if ($(location).attr('pathname') == "/loja/central_detalhe_pedido.php") {
                $('p').css('display', 'block');
                $('p').css('padding', '10px 0');
                $('.tablePage img').css('display', 'none');
                $('.tablePage tr th:nth-child(3)').css('display', 'none');
                $('.tablePage tr td:nth-child(4)').css('display', 'none');
                $('.tablePage tr').find('[colspan=4]').attr('colspan', '3');
            }

            if ($(location).attr('pathname') == "/loja/central_cliente.php") {
                $('#ProdBlock').remove();
                $('.central-breadcrumb').remove();
            }

            if ($(location).attr('pathname') == "/loja/central_confirmar_pagamento.php") {
                $('form').find('input[type=text]').css('width', '100%');
                $('form').find('textarea').css('width', '100%');
                $('form').find('br').css('display', 'none');
                $('form').find('p').css('margin', '0');
                $('form').find('p').css('padding', '0 10px');
                $('form').find('label').css('margin', '0');
                $('form').find('input[type=image]').attr('src', 'https://images.tcdn.com.br/img/arquivos/mobile/images/mobile/bt-confirmar-pagamento.png');
                $('.Pedidos > tbody:nth-child(1) > tr:nth-child(1) > th:nth-child(4)').css('display','none');
            }



    //         }


    //      if($('#fotoMobile').children().length <= 1) {

    //            $('#fotoMobile').slick({
    //               dots: true,
    //               arrows: true
    //            });

    // } else {
    //     $('#fotoMobile').slick({

    //           dots:false,
    //             arrows: true,
    //             infinite: false,
    //               slidesToShow: 1,
    //               slidesToScroll: 1,
    //               centerMode: false,
    //               centerPadding: '0',
    //               mobileFirst: true,
    //               swipe: true,
    //               swipeToSlide:true,
    //               accessibility: true,
    //               adaptiveHeight: true


    //     });
    // }


        $('.separador-paginas').remove();
        $('.selectedPg').prev().css('display','inline-block');
        $('.selectedPg').next().css('display','inline-block');




            $(window).scroll(function () {
                if ($('.caixa-overflow').css('display') != "none") {
                    $('.caixa-overflow').fadeOut();
                    $('.menu-conta').css('background', 'url(https://images.tcdn.com.br/img/arquivos/mobile/images/mobile/conta-tema.png?v=2) no-repeat scroll center center transparent');
                }
            })

            var sair = $("html").attr("data-store");
            $('.central-menu').append('<div class="icoFilho central-icons"> <p>Sair</p><a href="/loja/logout.php?loja=' + sair + '"></a></div>');




            // var numItems = $('.prodBox').length;

            // for (var i = 0; i < numItems; i++) {
            //     $('.prodBox').eq(i).appendTo($('.abasProduto').find('li').eq(i));
            // }


            var aberto = false;
            $('.abasProduto > ul').append('<li class="mais-info"><a>Mais<br> Informacoes<span class="ico-seta" style="right:5px !important; top: 21px !important"></span></a></li>').click(function(){
                if(aberto == false){
                    $('.abasProduto  > ul li').css('display','table');
                    aberto = true;
                }
                else {
                     $('.abasProduto  > ul li').css('display','none');
                    aberto = false;
                }
            });


            $('.abasProduto > ul li').not('.mais-info').click(function(){
               $("html, body").animate({ scrollTop:($(this).offset().top-75) }, 600);
            });

            $(document).ready(function(){
                $('.vitrine-geral').append('<ul class="vitrine-mobile"></ul>');
                $('.vitrine-geral ul li').each(function(){
                    $(this).appendTo('.vitrine-mobile');
                })
                $('.vitrine-geral ul').not('.vitrine-mobile').remove();

                $('.vitrine').append('<ul class="vitrine-mobile"></ul>');
                $('.vitrine ul li').each(function(){
                    $(this).appendTo('.vitrine-mobile');
                })
                $('.vitrine ul').not('.vitrine-mobile').remove();

            })



            var loja = $('input[name="loja"]').val();

            $('.catalogo-filtros').before('<div class="aplicar-filtro">Filtrar Resultados<span class="ico-seta"></span></div>');
            $('.selectedPg').prev().css('display','inline-block');
            $('.selectedPg').next().css('display','inline-block');

            $('.aplicar-filtro').click(function(){
                $('.catalogo-form-filtros').slideToggle('slow');
                $('.busca-form-filtros').slideToggle('slow');
                if($('.ico-seta').css('transform') == "none" || $('.ico-seta').css('transform') == 0 ){
                    $('.ico-seta').css('transform','rotate(180deg)');
                }
                else {
                 $('.ico-seta').css('transform','');
                }
            });

    }
  })

})(jQuery);

