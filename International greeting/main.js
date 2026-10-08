function greetUser(language) {
    if(language=="French")
    {
        return "Bonjour";
    }
    else if(language=="English")
    {
        return "Hello";
    }
     else if(language=="Spanish")
    {
        return "Hola";
    }
     else if(language=="Italian")
    {
        return "Ciao";
    }
     else
    {
        return "Hello";
    }
}
console.log(greetUser("Spanish"));