const btn = document.querySelector('button');
    
    btn.addEventListener("click", function(){
            const cor = document.querySelector('#cor');
            const largura = document.querySelector('#larg').value;
            const altura = document.querySelector('#alt').value;
            const numObj = document.querySelector('#numObj').value;
            const opcaoTexto = cor.options[cor.selectedIndex].value;

            for(let i = 0; i < numObj; i++){
                const obj = document.createElement('div');
                document.body.appendChild(obj);
                obj.setAttribute('class', opcaoTexto);
                obj.setAttribute('style', 'width:' + largura + ';height:' + altura + ';margin:20px');
            }
            
        });