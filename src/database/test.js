const Database = require('./db');

Database.then(function(db) {
    // inserir dados na tabela
    db.run(`
        INSERT INTO orphanages (
            lat,
            lng,
            name,
            whatsapp,
            images,
            instructions,
            opening_hours,
            open_on_weekends
        ) VALUES (
            "-27.222633",
            "-49.6455874",
            "Lar das meninas",
            "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
            "https://images.unsplash.com/photo-1597552816350-edd306e5c06f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "Venha quando se sentir a vontade e traga muito amor e paciência para dar.",
            "Horário de visitas Das 18h até 8h",
            "1"
        );  
    `)
    // consultar dados da tabela
})