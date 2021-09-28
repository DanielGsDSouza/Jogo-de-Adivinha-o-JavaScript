function verificarNome (){
    nomePersonagem = document.getElementById('nome').value;
    nomes = ['Coelho Branco', 'White Rabbit', 'Coelho', 'Rainha de Copas', 'Rainha Vermelha',
    'Rainha', 'Queen of Hearts', 'Alice', 'Alice Lidell', 'Mad Hatter', 'Chapeleiro', 'Chapeleiro Maluco',
    'Chapeleiro Louco', 'Lebre', 'Lebre de Março', 'Arganaz', 'Pássaro Dodô', 'Dôdô', 'Gêmeos',
    'Tweedle Dee', 'Tweedle Dum', 'Tweedle Dee e tweedle Dum', 'Arganaz', 'Bill', 'Carpinteiro',
    'Cheshire Cat', 'Gato', 'Gato Risonho', 'Gato de Cheshire', 'Lagarta', 'Lagarta Azul', 'Caterpillar', 'Maçaneta', 'Maçaneta Falante',
    'Morsa'];

    if ('Coelho'.includes(nomePersonagem)) {
        document.getElementById('resultado').innerHTML = "Já dizia o Coelho Branco: 'É tarde, é tarde, é tarde!'... Algo me diz que o coelho não tem muito tempo disponível para levar a Alice até o País das Maravilhas. Mas não sejamos rudes... Chame-o de Sr.Coelho, e por favor, deixe-o ir antes que a Rainha mande os guardas atrás dele!"
    } 
    if ('Coelho Branco'.includes(nomePersonagem)) {
        document.getElementById('resultado').innerHTML = "Já dizia o Coelho Branco: 'É tarde, é tarde, é tarde!'... Algo me diz que o coelho não tem muito tempo disponível para levar a Alice até o País das Maravilhas. Mas não sejamos rudes... Chame-o de Sr.Coelho, e por favor, deixe-o ir antes que a Rainha mande os guardas atrás dele!"
    } 
    else if ('White Rabbit'.includes(nomePersonagem)) {
        document.getElementById('resultado').innerHTML = "Já dizia o Coelho Branco: 'É tarde, é tarde, é tarde!'... Algo me diz que o coelho não tem muito tempo disponível para levar a Alice até o País das Maravilhas. Mas não sejamos rudes... Chame-o de Sr.Coelho, e por favor, deixe-o ir antes que a Rainha mande os guardas atrás dele!"
    } 
    else if ('Rainha Vermelha'.includes(nomePersonagem)) {
        document.getElementById('resultado').innerHTML = "A Rainha é uma tirana. Você acha que ela convidaria a jovem Alice para o País das Maravilhas? Bom... Talvez para ter com quem jogar Croquet, mas eu não apostaria nisso. Agora é melhor você tentar novamente antes que ela decida cortar sua cabeça."
    } 
    else if ('Rainha de Copas'.includes(nomePersonagem)) {
        document.getElementById('resultado').innerHTML = "A Rainha é uma tirana. Você acha que ela convidaria a jovem Alice para o País das Maravilhas? Bom... Talvez para ter com quem jogar Croquet, mas eu não apostaria nisso. Agora é melhor você tentar novamente antes que ela decida cortar sua cabeça."
    } 
    else if ('Rainha', 'Queen of Hearts'.includes(nomePersonagem)) {
        document.getElementById('resultado').innerHTML = "A Rainha é uma tirana. Você acha que ela convidaria a jovem Alice para o País das Maravilhas? Bom... Talvez para ter com quem jogar Croquet, mas eu não apostaria nisso. Agora é melhor você tentar novamente antes que ela decida cortar sua cabeça."
    } 
    else if ('Alice', 'Alice Lidell'.includes(nomePersonagem)) {
        document.getElementById('resultado').innerHTML = "Parabéns! Você acertou! E acredite, por mais que você possa achar que o Coelho levou a jovem Alice para Wonderland, eu ainda acredito que sua grande curiosidade foi a responsável... No final, ela por si só seguiu até o final da toca do coelho, nos mostrando as maravilhas de um país único e fantasioso."
    } 
    else if ('Chapeleiro', 'Chapeleiro Louco'.includes(nomePersonagem)) {
        document.getElementById('resultado').innerHTML = "Existe duas regras. A 1° é: A cada período de tempo você deve revezar de lugar na mesa durante a hora do chá. Assim você nunca usará os mesmos utensilhos. E a 2° é: Por mais que exista dezenas de lugares vazios em uma mesa, você nunca deve se sentar sem ser convidado. Essas regras eu aprendi com o Chapeleiro e a Lebre... Parece loucura, não é? Mas não se preocupe, as melhores pessoas são loucas."
    } 
    else if ('Mad Hatter'.includes(nomePersonagem)) {
        document.getElementById('resultado').innerHTML = "Existe duas regras. A 1° é: A cada período de tempo você deve revezar de lugar na mesa durante a hora do chá. Assim você nunca usará os mesmos utensilhos. E a 2° é: Por mais que exista dezenas de lugares vazios em uma mesa, você nunca deve se sentar sem ser convidado. Essas regras eu aprendi com o Chapeleiro e a Lebre... Parece loucura, não é? Mas não se preocupe, as melhores pessoas são loucas."
    } 
    else if ('Chapeleiro Maluco'.includes(nomePersonagem)) {
        document.getElementById('resultado').innerHTML = "Existe duas regras. A 1° é: A cada período de tempo você deve revezar de lugar na mesa durante a hora do chá. Assim você nunca usará os mesmos utensilhos. E a 2° é: Por mais que exista dezenas de lugares vazios em uma mesa, você nunca deve se sentar sem ser convidado. Essas regras eu aprendi com o Chapeleiro e a Lebre... Parece loucura, não é? Mas não se preocupe, as melhores pessoas são loucas."
    }
    else if ('Lebre', 'Lebre de Março'.includes(nomePersonagem)) {
        document.getElementById('resultado').innerHTML = "A Lebre vai rir se você disser que não sabe o que é um 'Desaniversário', mas ela também não sabe explicar de fato o que é isso! Acho melhor você tentar de novo..."
    }
    else if ('Arganaz'.includes(nomePersonagem)) {
        document.getElementById('resultado').innerHTML = "Acho melhor você esperar ele acordar para perguntar quem trouxe a jovem Alice para o País das Mavrailhas..."
    }
    else if ('Dodô', 'Pássaro Dodô'.includes(nomePersonagem)) {
        document.getElementById('resultado').innerHTML = "Não acho que ele será de muita utilidade, pelo menos enquanto estiver cantando e fumando..."
    }
    else if ('Gêmeos'.includes(nomePersonagem)) {
        document.getElementById('resultado').innerHTML = "Será que gêmeos pensam igual? Acredito que não, mas tenho certeza de quê não foram os gêmeos Tweedle que levaram a Alice para o País das Maravilhas. Um conselho: Melhor procurar de novo antes que eles comecem a contar a históiria da Morsa e do Carpinteiro."
    }
    else if ('Tweedle Dee', 'Tweedle Dum'.includes(nomePersonagem)) {
        document.getElementById('resultado').innerHTML = "Será que gêmeos pensam igual? Acredito que não, mas tenho certeza de quê não foram os gêmeos Tweedle que levaram a Alice para o País das Maravilhas. Um conselho: Melhor procurar de novo antes que eles comecem a contar a históiria da Morsa e do Carpinteiro."
    }
    else if ('Tweedle Dee e Tweedle Dum'.includes(nomePersonagem)) {
        document.getElementById('resultado').innerHTML = "Será que gêmeos pensam igual? Acredito que não, mas tenho certeza de quê não foram os gêmeos Tweedle que levaram a Alice para o País das Maravilhas. Um conselho: Melhor procurar de novo antes que eles comecem a contar a históiria da Morsa e do Carpinteiro."
    }
    else if ('Bill'.includes(nomePersonagem)) {
        document.getElementById('resultado').innerHTML = "Pobre Bill... É um bom trabalhador, mas sequer sabe que a Alice é uma garota humana. A última vez que a 'viu' as coisas se complicaram um pouco..."
    }
    else if ('Carpinteiro'.includes(nomePersonagem)) {
        document.getElementById('resultado').innerHTML = "O Carpinteiro é bom rapaz, e ele resume aquele tipo de amigo que todos nós temos: O amigo que está sempre com fome."
    }
    else if ('Gato', 'Gato de Cheshire'.includes(nomePersonagem)) {
        document.getElementById('resultado').innerHTML = "Como diz o Cheshire Cat: 'Se você não sabe para onde quer ir, qualquer caminho serve!'... Esse é um bom conselho... Mas o gato nunca foi muito informativo, principalmente sobre a localização do Coelho Branco. Acho melhor procurar outra pessoa, mas lembre-se: 'Somos todos malucos aqui'."
    }
    else if ('Cheshire Cat'.includes(nomePersonagem)) {
        document.getElementById('resultado').innerHTML = "Como diz o Cheshire Cat: 'Se você não sabe para onde quer ir, qualquer caminho serve!'... Esse é um bom conselho... Mas o gato nunca foi muito informativo, principalmente sobre a localização do Coelho Branco. Acho melhor procurar outra pessoa, mas lembre-se: 'Somos todos malucos aqui'."
    }
    else if ('Gato Risonho'.includes(nomePersonagem)) {
        document.getElementById('resultado').innerHTML = "Como diz o Cheshire Cat: 'Se você não sabe para onde quer ir, qualquer caminho serve!'... Esse é um bom conselho... Mas o gato nunca foi muito informativo, principalmente sobre a localização do Coelho Branco. Acho melhor procurar outra pessoa, mas lembre-se: 'Somos todos malucos aqui'."
    }
    else if ('Lagarta', 'Lagarta Azul'.includes(nomePersonagem)) {
        document.getElementById('resultado').innerHTML = "'Quem - é - você?'... Se deixar, a Lagarta passará o dia inteiro te perguntando a mesma coisa, além de nunca parar de fumar. Acho melhor não insistir muito... Ela não é conhecida por ter uma boa paciência."
    }
    else if ('Caterpillar'.includes(nomePersonagem)) {
        document.getElementById('resultado').innerHTML = "'Quem - é - você?'... Se deixar, a Lagarta passará o dia inteiro te perguntando a mesma coisa, além de nunca parar de fumar. Acho melhor não insistir muito... Ela não é conhecida por ter uma boa paciência."
    }
    else if ('Maçaneta', 'Maçaneta Falante'.includes(nomePersonagem)) {
        document.getElementById('resultado').innerHTML = "Tudo bem que através de sua fechadura a jovem Alice pôde entrar no País das Maravilhas... Mas sério, a Maçaneta está presa a uma porta. Não poderia ser ele..."
    }
    else if ('Morsa'.includes(nomePersonagem)) {
        document.getElementById('resultado').innerHTML = "Faminta e até um pouco mal educada... A Morsa jamais perderia seu tempo procurando a jovem Alice."
    }
    else {
        document.getElementById('resultado').innerHTML = "Será que você colocou um nome válido? Tente novamente!" 
    }
}