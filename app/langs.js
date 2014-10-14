var langs =
[['Afrikaans',       ['af-ZA']],
 ['Bahasa Indonesia',['id-ID']],
 ['Bahasa Melayu',   ['ms-MY']],
 ['Català',          ['ca-ES']],
 ['Čeština',         ['cs-CZ']],
 ['Deutsch',         ['de-DE']],
 ['English-Aus',     ['en-AU']],
 ['English-Can',     ['en-CA']],
 ['English-Ind',     ['en-IN']],
 ['English-NZ',      ['en-NZ']],
 ['English-SAfrica', ['en-ZA']],
 ['English-UK',      ['en-GB']],
 ['English-US',      ['en-US']],
 ['Español-Arg',     ['es-AR']], 
 ['Español-Bol',     ['es-BO']], 
 ['Español-Chi',     ['es-CL']], 
 ['Español-Col',     ['es-CO']], 
 ['Español-CR',      ['es-CR']], 
 ['Español-Ecu',     ['es-EC']], 
 ['Español-Sal',     ['es-SV']], 
 ['Español-Esp',     ['es-ES']], 
 ['Español-Gua',     ['es-GT']],
 ['Español-Hon',     ['es-HN']], 
 ['Español-Mex',     ['es-MX']], 
 ['Español-Nic',     ['es-NI']], 
 ['Español-Pan',     ['es-PA']], 
 ['Español-Par',     ['es-PY']], 
 ['Español-Per',     ['es-PE']],
 ['Español-PR',      ['es-PR']], 
 ['Español-DO',      ['es-DO']], 
 ['Español-Uru',     ['es-UY']], 
 ['Español-Ven',     ['es-VE']], 
 ['Euskara',         ['eu-ES']],
 ['Français',        ['fr-FR']],
 ['Galego',          ['gl-ES']],
 ['Hrvatski',        ['hr_HR']],
 ['Italiano',        ['it-IT']],
 ['Magyar',          ['hu-HU']],
 ['Nederlands',      ['nl-NL']],
 ['Polski',          ['pl-PL']],
 ['Português-Bra',   ['pt-BR']],
 ['Portugues-Por'    ['pt-PT']],
 ['Română',          ['ro-RO']],
 ['Slovenčina',      ['sk-SK']],
 ['Suomi',           ['fi-FI']],
 ['Svenska',         ['sv-SE']],
 ['Türkçe',          ['tr-TR']],
 ['български',       ['bg-BG']],
 ['Pусский',         ['ru-RU']],
 ['Српски',          ['sr-RS']],
 ['한국어',            ['ko-KR']],
 ['普通话 (中国大陆)',  ['cmn-Hans-CN']],
 ['普通话 (香港)',     ['ccmn-Hans-HK']],
 ['中文 (台灣)',       ['cmn-Hant-TW']],
 ['粵語 (香港)',       ['yue-Hant-HK']],
 ['日本語',           ['ja-JP']],
 ['Lingua latīna',   ['la']]];

 var langs2 = 
 [['Afrikaans',       ['af-ZA']],
 ['Bahasa Indonesia',['id-ID']],
 ['Bahasa Melayu',   ['ms-MY']],
 ['Català',          ['ca-ES']],
 ['Čeština',         ['cs-CZ']],
 ['Deutsch',         ['de-DE']],
 ['English',         ['en-AU', 'Australia'],
                     ['en-CA', 'Canada'],
                     ['en-IN', 'India'],
                     ['en-NZ', 'New Zealand'],
                     ['en-ZA', 'South Africa'],
                     ['en-GB', 'United Kingdom'],
                     ['en-US', 'United States']],
 ['Español',         ['es-AR', 'Argentina'],
                     ['es-BO', 'Bolivia'],
                     ['es-CL', 'Chile'],
                     ['es-CO', 'Colombia'],
                     ['es-CR', 'Costa Rica'],
                     ['es-EC', 'Ecuador'],
                     ['es-SV', 'El Salvador'],
                     ['es-ES', 'España'],
                     ['es-US', 'Estados Unidos'],
                     ['es-GT', 'Guatemala'],
                     ['es-HN', 'Honduras'],
                     ['es-MX', 'México'],
                     ['es-NI', 'Nicaragua'],
                     ['es-PA', 'Panamá'],
                     ['es-PY', 'Paraguay'],
                     ['es-PE', 'Perú'],
                     ['es-PR', 'Puerto Rico'],
                     ['es-DO', 'República Dominicana'],
                     ['es-UY', 'Uruguay'],
                     ['es-VE', 'Venezuela']],
 ['Euskara',         ['eu-ES']],
 ['Français',        ['fr-FR']],
 ['Galego',          ['gl-ES']],
 ['Hrvatski',        ['hr_HR']],
 ['IsiZulu',         ['zu-ZA']],
 ['Íslenska',        ['is-IS']],
 ['Italiano',        ['it-IT', 'Italia'],
                     ['it-CH', 'Svizzera']],
 ['Magyar',          ['hu-HU']],
 ['Nederlands',      ['nl-NL']],
 ['Norsk bokmål',    ['nb-NO']],
 ['Polski',          ['pl-PL']],
 ['Português',       ['pt-BR', 'Brasil'],
                     ['pt-PT', 'Portugal']],
 ['Română',          ['ro-RO']],
 ['Slovenčina',      ['sk-SK']],
 ['Suomi',           ['fi-FI']],
 ['Svenska',         ['sv-SE']],
 ['Türkçe',          ['tr-TR']],
 ['български',       ['bg-BG']],
 ['Pусский',         ['ru-RU']],
 ['Српски',          ['sr-RS']],
 ['한국어',            ['ko-KR']],
 ['中文',             ['cmn-Hans-CN', '普通话 (中国大陆)'],
                     ['cmn-Hans-HK', '普通话 (香港)'],
                     ['cmn-Hant-TW', '中文 (台灣)'],
                     ['yue-Hant-HK', '粵語 (香港)']],
 ['日本語',           ['ja-JP']],
 ['Lingua latīna',   ['la']]];


var outlangs =
[['Afrikaans',       ['af']],
 ['Indonesian',      ['id']],
 ['Bahasa Melayu',   ['ms']],
 ['Català',          ['ca']],
 ['Čeština',         ['cs']],
 ['Deutsch',         ['de']],
 ['English',         ['en']],
 ['Spanish',         ['es']], 
 ['Euskara',         ['eu']],
 ['French',          ['fr']],
 ['Galego',          ['gl']],
 ['Hrvatski',        ['hr']],
 ['Italiano',        ['it']],
 ['Magyar',          ['hu']],
 ['Hindi',           ['hi']],
 ['Nederlands',      ['nl']],
 ['Polski',          ['pl']],
 ['Português-Bra',   ['pt']],
 ['Portugues-Por'    ['pt']],
 ['Română',          ['ro']],
 ['Slovenčina',      ['sk']],
 ['Suomi',           ['fi']],
 ['Svenska',         ['sv']],
 ['Türkçe',          ['tr']],
 ['български',       ['bg']],
 ['Pусский',         ['ru']],
 ['Српски',          ['sr']],
 ['한국어',            ['ko']],
 ['中文 (中国大陆)',   ['zh-CN']],
 ['中文 (台灣)',       ['zh-CN']],
 ['日本語',           ['ja']],
 ['Lingua latīna',   ['la']]];