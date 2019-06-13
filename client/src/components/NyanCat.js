let _nyan = 0;
let __nyan = [[
"+      o     +              o      ",
"    +             o     +       +  ",
"o          +                       ",
"    o  +           +        +      ",
"+        o     o       +        o  ",
"-_-_-_-_-_-_-_,------,      o      ",
"_-_-_-_-_-_-_-|   /\\_/\\            ",
"-_-_-_-_-_-_-~|__( ^ .^)  +     +  ",
"_-_-_-_-_-_-_-\"\"  \"\"               ",
"+      o         o   +       o     ",
"    +         +                    ",
"o        o         o      o     +  ",
"    o           +                  ",
"+      +     o        o      +     "],
[
"+      o     +              +      ",
"    o             o     o       +  ",
"o          +                       ",
"    +  o           +        o      ",
"o        o     o       +        o  ",
"_-_-_-_-_-_-_-,------,      +      ",
"-_-_-_-_-_-_-_|   /\\_/\\            ",
"_-_-_-_-_-_-_-|__( ^ .^)  o     +  ",
"-_-_-_-_-_-_-_ \"\"  \"\"              ",
"+      +         o   +       o     ",
"    o         +                    ",
"+        +         +      +     o  ",
"    +           o                  ",
"+      o     o        o      +     "
]]

function nyan(){
    // eslint-disable-next-line no-restricted-syntax
    console.clear();
    console.log(__nyan[_nyan].join("\n"))
    if(_nyan == 0){ _nyan = 1; } else { _nyan = 0; }
}

global.setInterval(nyan, 250)