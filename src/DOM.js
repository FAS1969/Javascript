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
}