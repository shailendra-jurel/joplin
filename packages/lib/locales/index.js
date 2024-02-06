var locales = {};
var stats = {};
locales['en_GB'] = require('./en_GB.json');
locales['ar'] = require('./ar.json');
locales['bg_BG'] = require('./bg_BG.json');
locales['bs_BA'] = require('./bs_BA.json');
locales['ca'] = require('./ca.json');
locales['cs_CZ'] = require('./cs_CZ.json');
locales['da_DK'] = require('./da_DK.json');
locales['de_DE'] = require('./de_DE.json');
locales['el_GR'] = require('./el_GR.json');
locales['en_US'] = require('./en_US.json');
locales['eo'] = require('./eo.json');
locales['es_ES'] = require('./es_ES.json');
locales['et_EE'] = require('./et_EE.json');
locales['eu'] = require('./eu.json');
locales['fa'] = require('./fa.json');
locales['fi_FI'] = require('./fi_FI.json');
locales['fr_FR'] = require('./fr_FR.json');
locales['gl_ES'] = require('./gl_ES.json');
locales['hr_HR'] = require('./hr_HR.json');
locales['hu_HU'] = require('./hu_HU.json');
locales['id_ID'] = require('./id_ID.json');
locales['it_IT'] = require('./it_IT.json');
locales['ja_JP'] = require('./ja_JP.json');
locales['ko'] = require('./ko.json');
locales['nb_NO'] = require('./nb_NO.json');
locales['nl_BE'] = require('./nl_BE.json');
locales['nl_NL'] = require('./nl_NL.json');
locales['pl_PL'] = require('./pl_PL.json');
locales['pt_BR'] = require('./pt_BR.json');
locales['pt_PT'] = require('./pt_PT.json');
locales['ro'] = require('./ro.json');
locales['ru_RU'] = require('./ru_RU.json');
locales['sl_SI'] = require('./sl_SI.json');
locales['sr_RS'] = require('./sr_RS.json');
locales['sv'] = require('./sv.json');
locales['th_TH'] = require('./th_TH.json');
locales['tr_TR'] = require('./tr_TR.json');
locales['uk_UA'] = require('./uk_UA.json');
locales['vi'] = require('./vi.json');
locales['zh_CN'] = require('./zh_CN.json');
locales['zh_TW'] = require('./zh_TW.json');
stats['ar'] = {"percentDone":82,"pluralForms":"nplurals=6; plural=(n==0 ? 0 : n==1 ? 1 : n==2 ? 2 : n%100>=3 && n%100<=10 ? 3 : n%100>=11 && n%100<=99 ? 4 : 5);"};
stats['eu'] = {"percentDone":21,"pluralForms":"nplurals=2; plural=(n != 1);"};
stats['bs_BA'] = {"percentDone":53,"pluralForms":"nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);"};
stats['bg_BG'] = {"percentDone":42,"pluralForms":"nplurals=2; plural=(n != 1);"};
stats['ca'] = {"percentDone":90,"pluralForms":"nplurals=2; plural=(n != 1);"};
stats['hr_HR'] = {"percentDone":95,"pluralForms":"nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);"};
stats['cs_CZ'] = {"percentDone":92,"pluralForms":"nplurals=3; plural=(n==1) ? 0 : (n>=2 && n<=4) ? 1 : 2;"};
stats['da_DK'] = {"percentDone":99,"pluralForms":"nplurals=2; plural=(n != 1);"};
stats['de_DE'] = {"percentDone":99,"pluralForms":"nplurals=2; plural=(n != 1);"};
stats['et_EE'] = {"percentDone":41,"pluralForms":"nplurals=2; plural=(n != 1);"};
stats['en_GB'] = {"percentDone":100};
stats['en_US'] = {"percentDone":100,"pluralForms":"nplurals=2; plural=(n != 1);"};
stats['es_ES'] = {"percentDone":91,"pluralForms":"nplurals=2; plural=(n != 1);"};
stats['eo'] = {"percentDone":23,"pluralForms":"nplurals=2; plural=(n != 1);"};
stats['fi_FI'] = {"percentDone":92,"pluralForms":"nplurals=2; plural=(n != 1);"};
stats['fr_FR'] = {"percentDone":99,"pluralForms":"nplurals=2; plural=(n > 1);"};
stats['gl_ES'] = {"percentDone":27,"pluralForms":"nplurals=2; plural=(n != 1);"};
stats['id_ID'] = {"percentDone":82,"pluralForms":"nplurals=1; plural=0;"};
stats['it_IT'] = {"percentDone":95,"pluralForms":"nplurals=2; plural=(n != 1);"};
stats['hu_HU'] = {"percentDone":72,"pluralForms":"nplurals=2; plural=(n != 1);"};
stats['nl_BE'] = {"percentDone":73,"pluralForms":"nplurals=2; plural=(n != 1);"};
stats['nl_NL'] = {"percentDone":95,"pluralForms":"nplurals=2; plural=(n != 1);"};
stats['nb_NO'] = {"percentDone":81,"pluralForms":"nplurals=2; plural=(n != 1);"};
stats['fa'] = {"percentDone":98,"pluralForms":"nplurals=2; plural=(n==0 || n==1);"};
stats['pl_PL'] = {"percentDone":99,"pluralForms":"nplurals=3; plural=(n==1 ? 0 : n%10>=2 && n%10<=4 && (n%100<12 || n%100>14) ? 1 : 2);"};
stats['pt_BR'] = {"percentDone":99,"pluralForms":"nplurals=2; plural=(n > 1);"};
stats['pt_PT'] = {"percentDone":67,"pluralForms":"nplurals=2; plural=(n != 1);"};
stats['ro_RO'] = {"percentDone":99,"pluralForms":"nplurals=3; plural=(n==1 ? 0 : n==0 || (n!=1 && n%100>=1 && n%100<=19) ? 1 : 2);"};
stats['sl_SI'] = {"percentDone":74,"pluralForms":"nplurals=4; plural=(n%100==1 ? 0 : n%100==2 ? 1 : n%100==3 || n%100==4 ? 2 : 3);"};
stats['sv'] = {"percentDone":95,"pluralForms":"nplurals=2; plural=(n != 1);"};
stats['th_TH'] = {"percentDone":34,"pluralForms":"nplurals=1; plural=0;"};
stats['vi'] = {"percentDone":72,"pluralForms":"nplurals=1; plural=0;"};
stats['tr_TR'] = {"percentDone":99,"pluralForms":"nplurals=2; plural=(n != 1);"};
stats['uk_UA'] = {"percentDone":93,"pluralForms":"nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<12 || n%100>14) ? 1 : 2);"};
stats['el_GR'] = {"percentDone":99,"pluralForms":"nplurals=2; plural=(n != 1);"};
stats['ru_RU'] = {"percentDone":94,"pluralForms":"nplurals=2; plural=(n > 1);"};
stats['sr_RS'] = {"percentDone":60,"pluralForms":"nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<12 || n%100>14) ? 1 : 2);"};
stats['zh_CN'] = {"percentDone":99,"pluralForms":"nplurals=1; plural=0;"};
stats['zh_TW'] = {"percentDone":98,"pluralForms":"nplurals=1; plural=0;"};
stats['ja_JP'] = {"percentDone":96,"pluralForms":"nplurals=1; plural=0;"};
stats['ko'] = {"percentDone":82,"pluralForms":"nplurals=1; plural=0;"};
module.exports = { locales: locales, stats: stats };