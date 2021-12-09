'use strict'
{
  //------------------------ поиск по аттрибуту
  console.log(Object.entries(document.getElementsByTagName('*')).filter((elem) => elem[1].getAttribute('val') == 124));
  console.log(document.querySelectorAll('*[val="124"]'));
  //------------------------ быстрое добавление в дом
  let fragment = document.createDocumentFragment(),
    list = ['foo', 'bar', 'baz'],
    ul, el, text;
  ul = document.createElement('ul');
  fragment.appendChild(ul);
  for (let i = 0; i < list.length; i++) {
    el = document.createElement('li');
    text = document.createTextNode(list[i]);
    el.appendChild(text);
    ul.appendChild(el);
  }
  console.log(fragment.html);
  document.body.appendChild(fragment);
  console.log();
  //------------------------ событие на удаление/добавление элемента в дом
  $('body').on('DOMNodeInserted', function (e) {
    console.log(e.target, ' was inserted');
  });

  $('body').on('DOMNodeRemoved', function (e) {
    console.log(e.target, ' was removed');
  });

  //------------------------ работа с localStorage
  /* // Два варианта добавления данных
   localStorage.userName = "Петя";
   localStorage.setItem("favoriteColor", "чёрный");

   // После добавления в localStorage, они будут там
   // до тех пор, пока их явно не удалить
   alert(`${localStorage.userName} предпочитает ${localStorage.favoriteColor} цвет.`);

   // А теперь удалим данные из хранилища
   localStorage.removeItem("userName");
   localStorage.removeItem("favoriteColor");
   const myError = new Error('please improve your code');
   console.log(myError.stack);
   try {
     throw myError;
   } catch (err) {
     console.error(err.stack); // в консоль попадает сообщение об ошибке и стек ошибки
   } finally {
     console.log('finally'); // этот код будет выполнен в любом случае
   }*/

   //------------------------- параметры get запроса
   function getSearchParams(k) {
    var p = {};
    location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (s, k, v) {
      p[k] = v;
    });
    return k ? p[k] : p;
  }

  function getQueryParam(param) {
    const search = window.location.search;
    //const search = '?ticket=%5B000033%5D&qualcomm=Testing';
    const params = new URLSearchParams(search.substring(1));
    return params.get(param);
  }
  //--------------------------- проверка xml
  const testValue = `<PARAM_NAME>Typ dveří</PARAM_NAME>
  <VAL>jednokridle</VAL>`;

  validateXML(testValue);
  function checkErrorXML(x) {
    let xt = '';
    let h3OK = 1;
    checkXML(x);
    return xt;
    function checkXML(n) {
      let l, i, nam;
      nam = n.nodeName;
      if (nam == 'h3') {
        if (h3OK == 0) {
          return;
        }
        h3OK = 0;
      }
      if (nam == '#text') {
        xt = xt + n.nodeValue + '\n';
      }
      l = n.childNodes.length;
      for (i = 0; i < l; i++) {
        checkXML(n.childNodes[i]);
      }
    }
  }

  function validateXML(txt) {
    // code for IE
    if (window.ActiveXObject) {
      const xmlDoc = new ActiveXObject('Microsoft.XMLDOM');
      xmlDoc.async = false;
      xmlDoc.loadXML(txt);
      if (xmlDoc.parseError.errorCode != 0) {
        txt = 'Error Code: ' + xmlDoc.parseError.errorCode + '\n';
        txt = txt + 'Error Reason: ' + xmlDoc.parseError.reason;
        txt = txt + 'Error Line: ' + xmlDoc.parseError.line;
        return false;
      } else {
        return true;
      }
    }
    // code for Mozilla, Firefox, Opera, etc.
    else if (document.implementation.createDocument) {
      try {
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(txt, 'application/xml');
      } catch (err) {
        alert(err.message);
        return false;
      }

      if (xmlDoc.getElementsByTagName('parsererror').length > 0) {
        alert(checkErrorXML(xmlDoc.getElementsByTagName('parsererror')[0]));
        return false;
      } else {
        return true;
      }
    } else {
      alert('Your browser cannot handle XML validation');
      return false;
    }
  }
  //--------------------------- чтение xml
  let parser = new DOMParser();

  const xmlStr =
    '<?xml version="1.0" encoding="utf-8"?><SHOP xmlns="http://www.zbozi.cz/ns/offer/1.0"><SHOPITEM><ITEM_ID>3581</ITEM_ID><PRODUCTNAME><![CDATA[VILEN DOOR Interi\u00e9rov\u00e9 dve\u0159e ANITA 5/5 - Dub Wotan]]></PRODUCTNAME><PRODUCT><![CDATA[Interi\u00e9rov\u00e9 dve\u0159e ANITA 5/5 - Dub Wotan]]></PRODUCT><DESCRIPTION><![CDATA[  ]]></DESCRIPTION><CATEGORYTEXT>D\u016fm, byt a zahrada | Stavebniny | Stavebn\u00ed v\u00fdpln\u011b | Dve\u0159e a p\u0159\u00edslu\u0161enstv\u00ed | Interi\u00e9rov\u00e9 dve\u0159e</CATEGORYTEXT><MANUFACTURER><![CDATA[VILEN DOOR]]></MANUFACTURER><URL>https://test.optim-door.cz/interierove-dvere/zbozi-skladem/dvere-anita/anita-5-5-dub-wotan</URL><DELIVERY_DATE>0</DELIVERY_DATE><IMGURL>https://test.optim-door.cz/image/cache/catalog/dvere-devilen/anita/dvere-anita-5-5-dub-wotan-500x500.jpg</IMGURL><PRICE_VAT>3328</PRICE_VAT><SHOP_DEPOTS>13329802</SHOP_DEPOTS><PARAM><PARAM_NAME>Druh dve\u0159\u00ed</PARAM_NAME>\r\n<VAL>prosklene</VAL></PARAM><PARAM><PARAM_NAME>Typ dve\u0159\u00ed</PARAM_NAME>\r\n<VAL>jednokridle</VAL></PARAM><PARAM><PARAM_NAME>Odst\u00edn d\u0159eva</PARAM_NAME>\r\n<VAL>dub</VAL></PARAM><PARAM><PARAM_NAME>V\u00fd\u0161ka</PARAM_NAME>\r\n<VAL>197 cm</VAL></PARAM></SHOPITEM><SHOPITEM><ITEM_ID>3582</ITEM_ID><PRODUCTNAME><![CDATA[VILEN DOOR Interi\u00e9rov\u00e9 dve\u0159e ANITA 5/5 - Jasan \u0161ed\u00fd]]></PRODUCTNAME><PRODUCT><![CDATA[Interi\u00e9rov\u00e9 dve\u0159e ANITA 5/5 - Jasan \u0161ed\u00fd]]></PRODUCT><DESCRIPTION><![CDATA[  ]]></DESCRIPTION><CATEGORYTEXT>D\u016fm, byt a zahrada | Stavebniny | Stavebn\u00ed v\u00fdpln\u011b | Dve\u0159e a p\u0159\u00edslu\u0161enstv\u00ed | Interi\u00e9rov\u00e9 dve\u0159e</CATEGORYTEXT><MANUFACTURER><![CDATA[VILEN DOOR]]></MANUFACTURER><URL>https://test.optim-door.cz/interierove-dvere/zbozi-skladem/dvere-anita/anita-5-5-jasan-sedy</URL><DELIVERY_DATE>0</DELIVERY_DATE><IMGURL>https://test.optim-door.cz/image/cache/catalog/dvere-devilen/anita/dvere-anita-5-5-jesion-szary-500x500.jpg</IMGURL><PRICE_VAT>3328</PRICE_VAT><SHOP_DEPOTS>13329802</SHOP_DEPOTS><PARAM><PARAM_NAME>Druh dve\u0159\u00ed</PARAM_NAME>\r\n<VAL>prosklene</VAL>/PARAM><PARAM><PARAM_NAME>Typ dve\u0159\u00ed</PARAM_NAME>\r\n<VAL>jednokridle</VAL></PARAM><PARAM><PARAM_NAME>Odst\u00edn d\u0159eva</PARAM_NAME>\r\n<VAL>dub</VAL></PARAM><PARAM><PARAM_NAME>V\u00fd\u0161ka</PARAM_NAME>\r\n<VAL>197 cm</VAL></PARAM><PARAM><PARAM_NAME>\u0160\u00ed\u0159ka</PARAM_NAME>\r\n<VAL>60 cm</VAL></PARAM><PARAM><PARAM_NAME>\u0160\u00ed\u0159ka</PARAM_NAME>\r\n<VAL>70 cm</VAL></PARAM><PARAM><PARAM_NAME>\u0160\u00ed\u0159ka</PARAM_NAME>\r\n<VAL>80 cm</VAL></PARAM></SHOPITEM><SHOPITEM><ITEM_ID>280</ITEM_ID><PRODUCTNAME><![CDATA[ERKADO \u0421elosklen\u011bn\u00e9 Dvere GRAF 1 ]]></PRODUCTNAME><PRODUCT><![CDATA[\u0421elosklen\u011bn\u00e9 Dvere GRAF 1 ]]></PRODUCT><DESCRIPTION><![CDATA[POZOR: Uvedena\u0301 grafika modelu GRAF se ty\u0301ka\u0301 pouze kr\u030ci\u0301dla v s\u030ci\u0301r\u030cce 80. U ostatni\u0301ch s\u030ci\u0301r\u030cek se mohou vyskytnout male\u0301 rozdi\u0301ly v proporci\u0301ch grafiky. Pr\u030ci\u0301 objedna\u0301ni\u0301 uved\u030cte pantovou stranu, jestli je matna\u0301(A) nebo hladka\u0301(R). Dver\u030ce GRAF lze objednat pouze vc\u030cetne\u030c kova\u0301ni\u0301.\r\n\r\nKONSTRUKCE\r\n\r\n     Tvrzene\u0301 matne\u0301 sklo o tlous\u030ct\u030cce 8 mm.\r\n     Mle\u0301c\u030cne\u0301 sklo s c\u030cerne\u030c malovany\u0301mi nebo pi\u0301skovany\u0301mi vzory.\r\n     Moz\u030cnost volby matne\u0301 (A-avers) a hladke\u0301 (R-revers) strany.\r\n\r\n\r\nRA\u0301MOVA\u0301 A OBLOZ\u030cKOVA\u0301 ZA\u0301RUBEN\u030c\r\n\r\n     Na vy\u0301be\u030cr jsou za\u0301rubne\u030c ve vs\u030cech nabi\u0301zeny\u0301ch dekorech za ceny standardni\u0301ch za\u0301rubni\u0301.\r\n]]></DESCRIPTION><CATEGORYTEXT>D\u016fm, byt a zahrada | Stavebniny | Stavebn\u00ed v\u00fdpln\u011b | Dve\u0159e a p\u0159\u00edslu\u0161enstv\u00ed | Interi\u00e9rov\u00e9 dve\u0159e</CATEGORYTEXT><MANUFACTURER><![CDATA[ERKADO]]></MANUFACTURER><URL>https://test.optim-door.cz/interierove-dvere/sklenene-dvere/interierove-dvere-graf-1</URL><DELIVERY_DATE>30</DELIVERY_DATE><IMGURL>https://test.optim-door.cz/image/cache/catalog/dvere/Celosklenene-dvere/GRAF/GRAF_001-500x500.jpg</IMGURL><PRICE_VAT>6413</PRICE_VAT><PARAM><PARAM_NAME>Druh dve\u0159\u00ed</PARAM_NAME>\r\n<VAL>celosklen\u011bn\u00e9</VAL></PARAM><PARAM><PARAM_NAME>Typ dve\u0159\u00ed</PARAM_NAME>\r\n<VAL>jednokridle</VAL></PARAM></SHOPITEM></SHOP>';

  console.log(parser.parseFromString(xmlStr, 'text/xml'));

}
