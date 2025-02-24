var map = L.map('map').setView([-23.9608, -46.3336], 14); // Santos, Brasil

        L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="https://hot.openstreetmap.org">Humanitarian OpenStreetMap Team</a>'
        }).addTo(map);

        var pontos = [
        { nome: 'Cine Arte Posto 4', lat: -23.97072246903971, lon: -46.33026031420864, end:'Av. Vicente de Carvalho - Gonzaga, Santos - SP, 11045-501'},
        { nome: 'Cine Roxy 5', lat:-23.963940136613303, lon:  -46.33222216765343, end:'Av. Ana Costa, 443 - Gonzaga, Santos - SP, 11060-003'},
        { nome: 'Cine Indaiá', lat: -23.963227925856753, lon: -46.33209854576086, end:'Av. Ana Costa, 431 - Gonzaga, Santos - SP, 11060-003'},
        { nome: 'Cine e Teatro Coliseu', lat:-23.93653354209582, lon: -46.324482547999374, end:'R. Amador Bueno, 237 - Centro, Santos - SP, 11013-153'},
        { nome: 'Cine Brasília', lat: -23.97841281170945, lon: -46.29858982318317, end:'Av. Dr. Pedro Lessa, 487 - Ponta da Praia, Santos - SP, 11025-001' },
        { nome: 'Cine Independência', lat: -23.96812122415641, lon: -46.33274532163135, end:'Av. Ana Costa, 525 - Gonzaga, Santos - SP, 11060-003'},
        { nome: 'Cine Astor (depois Cine Cultura)', lat: -23.940551876294027, lon: -46.32153078044947, end:'Rua Sete de Setembro, 64, Vila Nova, Santos - SP, 11013-350 ' },
        { nome: 'Cine Gonzaga (depois Studio I e II', lat: -23.967790504464535, lon: -46.33306888501414, end:'Av. Ana Costa, 544 - Gonzaga, Santos - SP, 11060-001' },
        { nome: 'Cine Praia Palace', lat: -23.962186227425324, lon: -46.33266635182075, end:'Av. Ana Costa, 410 - Gonzaga, Santos - SP, 11060-002' },
        { nome: 'Cine Glória (depois Cinema 1)', lat: -23.97160580501271, lon: -46.325752331699384, end:'Av. Vicente de Carvalho, 19 - Gonzaga, Santos - SP, 11045-500'},
        { nome: 'Cine Caiçara (também Cine Miramar)', lat: -23.97151458369521, lon: -46.324370246411455, end:'Av. Conselheiro Nébias, 853 - Boqueirão, Santos - SP, 11045-003'},
        { nome: 'Cine Paramoun (também Cine Paratodos)', lat: -23.93473297016207, lon: -46.32905505664807, end:'Av. Visconde de São Leopoldo, 1 - Centro, Santos - SP, 11010-201'},
        { nome: 'Cine Macuco', lat: -23.97131890734606, lon: -46.30905329732112, end:'Av. Dr. Pedro Lessa, 1801 - Aparecida, Santos - SP, 11025-003'},
        { nome: 'Cine Avenida', lat: -23.952849799565637, lon:  -46.33699984348719, end:'Av. Bernardino de Campos, 151 - Vila Belmiro, Santos - SP, 11075-355'},
        { nome: 'Cine Marapé', lat: -23.956886195327378, lon: -46.344163714187545, end:'Av. Senador Pinheiro Machado, 677 - Campo Grande, Santos - SP, 11075-003'},
        { nome: 'Cine Santo Antônio', lat: -23.980624802020255, lon: -46.29517597440331, end:'Av. Dr. Pedro Lessa, 63 - Ponta da Praia, Santos - SP, 11025-001'},
        { nome: 'Cine Dom Pedro', lat: -23.949543357922458, lon: -46.320457524140544, end:'R. Campos Mello, 215 - Vila Matias, Santos - SP, 11015-012'},
        { nome: 'Cine Santos Futebol Clube', lat: -23.951286835037045, lon: -46.33876507805762, end:'Rua Princesa Isabel, S/N, Vila Belmiro, Santos - SP, 11075-501'},
        { nome: 'Cine Campo Grande (Ouro Verde)', lat: -23.953646780573564, lon: -46.33635090012295, end:'R. Carvalho de Mendonça, 395 - Marapé, Santos - SP, 11070-101'},
        { nome: 'Cine São Bento', lat: -23.932499086356316, lon: -46.33401930928717, end:'R. S. Bento, 39 - Valongo, Santos - SP, 11010-305'},
        { nome: 'Cine Itajubá', lat: -23.968649500097616, lon: -46.35253554033752, end:'Av. Pres. Wilson, 1955 - José Menino, Santos - SP, 11065-201'},
        { nome: 'Cine São José', lat: -23.948583288124496, lon: -46.320447172491114, end:'R. Campos Mello, 179 - Vila Matias, Santos - SP, 11015-012'},
        { nome: 'Cine Carlos Gomes', lat: -23.945447982323916, lon: -46.32841302560612, end:'R. Lucas Fortunato, 89 - Vila Matias, Santos - SP, 11075-200'},
        { nome: 'Cine Bandeirantes', lat: -23.94546777827033, lon: -46.328010809940565, end:'R. Lucas Fortunato, 79 - Vila Matias, Santos - SP, 11075-200'},
        { nome: 'Cine e Teatro Guarany', lat: -23.934958787297077, lon: -46.33172236320325, end:'Pr. dos Andradas, 100 - Centro, Santos - SP, 11010-100'},
        { nome: 'Cine Casino', lat: -23.969126000402035, lon: -46.333377095108325, end:'Av. Pres. Wilson, 1 - Gonzaga, Santos - SP, 11065-200'},
        { nome: 'Cine Atlântico', lat: -23.966721309227456, lon:  -46.333003662027814, end:'Av. Ana Costa, 532 - Gonzaga, Santos - SP, 11060-002'},
        { nome: 'Cine Alhambra', lat: -23.965268440696235, lon: -46.33131443784712, end:'R. José Caballero, 60 - Gonzaga, Santos - SP, 11055-300'}
        ];

        pontos.forEach(function(ponto) {
            L.marker([ponto.lat, ponto.lon]).addTo(map)
                .bindPopup(`Mapeamento Cinemas de Santos </br> <b>${ponto.nome}</b><p>${ponto.end}</p>`);
        });

        