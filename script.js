const AlleLänder = [
  {Abkürzung: "AD", Name: "Andorra"},
  {Abkürzung: "AE", Name: "United Arab Emirates"},
  {Abkürzung: "AF", Name: "Afghanistan"},
  {Abkürzung: "AG", Name: "Antigua and Barbuda"},
  {Abkürzung: "AI", Name: "Anguilla"},
  {Abkürzung: "AL", Name: "Albania"},
  {Abkürzung: "AM", Name: "Armenia"},
  {Abkürzung: "AO", Name: "Angola"},
  {Abkürzung: "AQ", Name: "Antarctica"},
  {Abkürzung: "AR", Name: "Argentina"},
  {Abkürzung: "AS", Name: "American Samoa"},
  {Abkürzung: "AT", Name: "Austria"},
  {Abkürzung: "AU", Name: "Australia"},
  {Abkürzung: "AW", Name: "Aruba"},
  {Abkürzung: "AX", Name: "\u00c5land Islands"},
  {Abkürzung: "AZ", Name: "Azerbaijan"},
  {Abkürzung: "BA", Name: "Bosnia and Herzegovina"},
  {Abkürzung: "BB", Name: "Barbados"},
  {Abkürzung: "BD", Name: "Bangladesh"},
  {Abkürzung: "BE", Name: "Belgium"},
  {Abkürzung: "BF", Name: "Burkina Faso"},
  {Abkürzung: "BG", Name: "Bulgaria"},
  {Abkürzung: "BH", Name: "Bahrain"},
  {Abkürzung: "BI", Name: "Burundi"},
  {Abkürzung: "BJ", Name: "Benin"},
  {Abkürzung: "BL", Name: "Saint Barthélemy"},
  {Abkürzung: "BM", Name: "Bermuda"},
  {Abkürzung: "BN", Name: "Brunei Darussalam"},
  {Abkürzung: "BO", Name: "Bolivia, Plurinational State of"},
  {Abkürzung: "BQ", Name: "Caribbean Netherlands"},
  {Abkürzung: "BR", Name: "Brazil"},
  {Abkürzung: "BS", Name: "Bahamas"},
  {Abkürzung: "BT", Name: "Bhutan"},
  {Abkürzung: "BV", Name: "Bouvet Island"},
  {Abkürzung: "BW", Name: "Botswana"},
  {Abkürzung: "BY", Name: "Belarus"},
  {Abkürzung: "BZ", Name: "Belize"},
  {Abkürzung: "CA", Name: "Canada"},
  {Abkürzung: "CC", Name: "Cocos (Keeling) Islands"},
  {Abkürzung: "CD", Name: "Congo, the Democratic Republic of the"},
  {Abkürzung: "CF", Name: "Central African Republic"},
  {Abkürzung: "CG", Name: "Republic of the Congo"},
  {Abkürzung: "CH", Name: "Switzerland"},
  {Abkürzung: "CI", Name: "C\u00f4te d'Ivoire"},
  {Abkürzung: "CK", Name: "Cook Islands"},
  {Abkürzung: "CL", Name: "Chile"},
  {Abkürzung: "CM", Name: "Cameroon"},
  {Abkürzung: "CN", Name: "China (People's Republic of China)"},
  {Abkürzung: "CO", Name: "Colombia"},
  {Abkürzung: "CR", Name: "Costa Rica"},
  {Abkürzung: "CU", Name: "Cuba"},
  {Abkürzung: "CV", Name: "Cape Verde"},
  {Abkürzung: "CW", Name: "Cura\u00e7ao"},
  {Abkürzung: "CX", Name: "Christmas Island"},
  {Abkürzung: "CY", Name: "Cyprus"},
  {Abkürzung: "CZ", Name: "Czech Republic"},
  {Abkürzung: "DE", Name: "Germany"},
  {Abkürzung: "DJ", Name: "Djibouti"},
  {Abkürzung: "DK", Name: "Denmark"},
  {Abkürzung: "DM", Name: "Dominica"},
  {Abkürzung: "DO", Name: "Dominican Republic"},
  {Abkürzung: "DZ", Name: "Algeria"},
  {Abkürzung: "EC", Name: "Ecuador"},
  {Abkürzung: "EE", Name: "Estonia"},
  {Abkürzung: "EG", Name: "Egypt"},
  {Abkürzung: "EH", Name: "Western Sahara"},
  {Abkürzung: "ER", Name: "Eritrea"},
  {Abkürzung: "ES", Name: "Spain"},
  {Abkürzung: "ET", Name: "Ethiopia"},
  {Abkürzung: "EU", Name: "Europe"},
  {Abkürzung: "FI", Name: "Finland"},
  {Abkürzung: "FJ", Name: "Fiji"},
  {Abkürzung: "FK", Name: "Falkland Islands (Malvinas)"},
  {Abkürzung: "FM", Name: "Micronesia, Federated States of"},
  {Abkürzung: "FO", Name: "Faroe Islands"},
  {Abkürzung: "FR", Name: "France"},
  {Abkürzung: "GA", Name: "Gabon"},
  {Abkürzung: "GB", Name: "United Kingdom"},
  {Abkürzung: "GD", Name: "Grenada"},
  {Abkürzung: "GE", Name: "Georgia"},
  {Abkürzung: "GF", Name: "French Guiana"},
  {Abkürzung: "GG", Name: "Guernsey"},
  {Abkürzung: "GH", Name: "Ghana"},
  {Abkürzung: "GI", Name: "Gibraltar"},
  {Abkürzung: "GL", Name: "Greenland"},
  {Abkürzung: "GM", Name: "Gambia"},
  {Abkürzung: "GN", Name: "Guinea"},
  {Abkürzung: "GP", Name: "Guadeloupe"},
  {Abkürzung: "GQ", Name: "Equatorial Guinea"},
  {Abkürzung: "GR", Name: "Greece"},
  {Abkürzung: "GS", Name: "South Georgia and the South Sandwich Islands"},
  {Abkürzung: "GT", Name: "Guatemala"},
  {Abkürzung: "GU", Name: "Guam"},
  {Abkürzung: "GW", Name: "Guinea-Bissau"},
  {Abkürzung: "GY", Name: "Guyana"},
  {Abkürzung: "HK", Name: "Hong Kong"},
  {Abkürzung: "HM", Name: "Heard Island and McDonald Islands"},
  {Abkürzung: "HN", Name: "Honduras"},
  {Abkürzung: "HR", Name: "Croatia"},
  {Abkürzung: "HT", Name: "Haiti"},
  {Abkürzung: "HU", Name: "Hungary"},
  {Abkürzung: "ID", Name: "Indonesia"},
  {Abkürzung: "IE", Name: "Ireland"},
  {Abkürzung: "IL", Name: "Israel"},
  {Abkürzung: "IM", Name: "Isle of Man"},
  {Abkürzung: "IN", Name: "India"},
  {Abkürzung: "IO", Name: "British Indian Ocean Territory"},
  {Abkürzung: "IQ", Name: "Iraq"},
  {Abkürzung: "IR", Name: "Iran, Islamic Republic of"},
  {Abkürzung: "IS", Name: "Iceland"},
  {Abkürzung: "IT", Name: "Italy"},
  {Abkürzung: "JE", Name: "Jersey"},
  {Abkürzung: "JM", Name: "Jamaica"},
  {Abkürzung: "JO", Name: "Jordan"},
  {Abkürzung: "JP", Name: "Japan"},
  {Abkürzung: "KE", Name: "Kenya"},
  {Abkürzung: "KG", Name: "Kyrgyzstan"},
  {Abkürzung: "KH", Name: "Cambodia"},
  {Abkürzung: "KI", Name: "Kiribati"},
  {Abkürzung: "KM", Name: "Comoros"},
  {Abkürzung: "KN", Name: "Saint Kitts and Nevis"},
  {Abkürzung: "KP", Name: "Korea, Democratic People's Republic of"},
  {Abkürzung: "KR", Name: "Korea, Republic of"},
  {Abkürzung: "KW", Name: "Kuwait"},
  {Abkürzung: "KY", Name: "Cayman Islands"},
  {Abkürzung: "KZ", Name: "Kazakhstan"},
  {Abkürzung: "LA", Name: "Laos (Lao People's Democratic Republic)"},
  {Abkürzung: "LB", Name: "Lebanon"},
  {Abkürzung: "LC", Name: "Saint Lucia"},
  {Abkürzung: "LI", Name: "Liechtenstein"},
  {Abkürzung: "LK", Name: "Sri Lanka"},
  {Abkürzung: "LR", Name: "Liberia"},
  {Abkürzung: "LS", Name: "Lesotho"},
  {Abkürzung: "LT", Name: "Lithuania"},
  {Abkürzung: "LU", Name: "Luxembourg"},
  {Abkürzung: "LV", Name: "Latvia"},
  {Abkürzung: "LY", Name: "Libya"},
  {Abkürzung: "MA", Name: "Morocco"},
  {Abkürzung: "MC", Name: "Monaco"},
  {Abkürzung: "MD", Name: "Moldova, Republic of"},
  {Abkürzung: "ME", Name: "Montenegro"},
  {Abkürzung: "MF", Name: "Saint Martin"},
  {Abkürzung: "MG", Name: "Madagascar"},
  {Abkürzung: "MH", Name: "Marshall Islands"},
  {Abkürzung: "MK", Name: "North Macedonia"},
  {Abkürzung: "ML", Name: "Mali"},
  {Abkürzung: "MM", Name: "Myanmar"},
  {Abkürzung: "MN", Name: "Mongolia"},
  {Abkürzung: "MO", Name: "Macao"},
  {Abkürzung: "MP", Name: "Northern Mariana Islands"},
  {Abkürzung: "MQ", Name: "Martinique"},
  {Abkürzung: "MR", Name: "Mauritania"},
  {Abkürzung: "MS", Name: "Montserrat"},
  {Abkürzung: "MT", Name: "Malta"},
  {Abkürzung: "MU", Name: "Mauritius"},
  {Abkürzung: "MV", Name: "Maldives"},
  {Abkürzung: "MW", Name: "Malawi"},
  {Abkürzung: "MX", Name: "Mexico"},
  {Abkürzung: "MY", Name: "Malaysia"},
  {Abkürzung: "MZ", Name: "Mozambique"},
  {Abkürzung: "NA", Name: "Namibia"},
  {Abkürzung: "NC", Name: "New Caledonia"},
  {Abkürzung: "NE", Name: "Niger"},
  {Abkürzung: "NF", Name: "Norfolk Island"},
  {Abkürzung: "NG", Name: "Nigeria"},
  {Abkürzung: "NI", Name: "Nicaragua"},
  {Abkürzung: "NL", Name: "Netherlands"},
  {Abkürzung: "NO", Name: "Norway"},
  {Abkürzung: "NP", Name: "Nepal"},
  {Abkürzung: "NR", Name: "Nauru"},
  {Abkürzung: "NU", Name: "Niue"},
  {Abkürzung: "NZ", Name: "New Zealand"},
  {Abkürzung: "OM", Name: "Oman"},
  {Abkürzung: "PA", Name: "Panama"},
  {Abkürzung: "PE", Name: "Peru"},
  {Abkürzung: "PF", Name: "French Polynesia"},
  {Abkürzung: "PG", Name: "Papua New Guinea"},
  {Abkürzung: "PH", Name: "Philippines"},
  {Abkürzung: "PK", Name: "Pakistan"},
  {Abkürzung: "PL", Name: "Poland"},
  {Abkürzung: "PM", Name: "Saint Pierre and Miquelon"},
  {Abkürzung: "PN", Name: "Pitcairn"},
  {Abkürzung: "PR", Name: "Puerto Rico"},
  {Abkürzung: "PS", Name: "Palestine"},
  {Abkürzung: "PT", Name: "Portugal"},
  {Abkürzung: "PW", Name: "Palau"},
  {Abkürzung: "PY", Name: "Paraguay"},
  {Abkürzung: "QA", Name: "Qatar"},
  {Abkürzung: "RE", Name: "Réunion"},
  {Abkürzung: "RO", Name: "Romania"},
  {Abkürzung: "RS", Name: "Serbia"},
  {Abkürzung: "RU", Name: "Russian Federation"},
  {Abkürzung: "RW", Name: "Rwanda"},
  {Abkürzung: "SA", Name: "Saudi Arabia"},
  {Abkürzung: "SB", Name: "Solomon Islands"},
  {Abkürzung: "SC", Name: "Seychelles"},
  {Abkürzung: "SD", Name: "Sudan"},
  {Abkürzung: "SE", Name: "Sweden"},
  {Abkürzung: "SG", Name: "Singapore"},
  {Abkürzung: "SH", Name: "Saint Helena, Ascension and Tristan da Cunha"},
  {Abkürzung: "SI", Name: "Slovenia"},
  {Abkürzung: "SJ", Name: "Svalbard and Jan Mayen Islands"},
  {Abkürzung: "SK", Name: "Slovakia"},
  {Abkürzung: "SL", Name: "Sierra Leone"},
  {Abkürzung: "SM", Name: "San Marino"},
  {Abkürzung: "SN", Name: "Senegal"},
  {Abkürzung: "SO", Name: "Somalia"},
  {Abkürzung: "SR", Name: "Suriname"},
  {Abkürzung: "SS", Name: "South Sudan"},
  {Abkürzung: "ST", Name: "Sao Tome and Principe"},
  {Abkürzung: "SV", Name: "El Salvador"},
  {Abkürzung: "SX", Name: "Sint Maarten (Dutch part)"},
  {Abkürzung: "SY", Name: "Syrian Arab Republic"},
  {Abkürzung: "SZ", Name: "Swaziland"},
  {Abkürzung: "TC", Name: "Turks and Caicos Islands"},
  {Abkürzung: "TD", Name: "Chad"},
  {Abkürzung: "TF", Name: "French Southern Territories"},
  {Abkürzung: "TG", Name: "Togo"},
  {Abkürzung: "TH", Name: "Thailand"},
  {Abkürzung: "TJ", Name: "Tajikistan"},
  {Abkürzung: "TK", Name: "Tokelau"},
  {Abkürzung: "TL", Name: "Timor-Leste"},
  {Abkürzung: "TM", Name: "Turkmenistan"},
  {Abkürzung: "TN", Name: "Tunisia"},
  {Abkürzung: "TO", Name: "Tonga"},
  {Abkürzung: "TR", Name: "Turkey"},
  {Abkürzung: "TT", Name: "Trinidad and Tobago"},
  {Abkürzung: "TV", Name: "Tuvalu"},
  {Abkürzung: "TW", Name: "Taiwan (Republic of China)"},
  {Abkürzung: "TZ", Name: "Tanzania, United Republic of"},
  {Abkürzung: "UA", Name: "Ukraine"},
  {Abkürzung: "UG", Name: "Uganda"},
  {Abkürzung: "UM", Name: "US Minor Outlying Islands"},
  {Abkürzung: "US", Name: "United States"},
  {Abkürzung: "UY", Name: "Uruguay"},
  {Abkürzung: "UZ", Name: "Uzbekistan"},
  {Abkürzung: "VA", Name: "Holy See (Vatican City State)"},
  {Abkürzung: "VC", Name: "Saint Vincent and the Grenadines"},
  {Abkürzung: "VE", Name: "Venezuela, Bolivarian Republic of"},
  {Abkürzung: "VG", Name: "Virgin Islands, British"},
  {Abkürzung: "VI", Name: "Virgin Islands, U.S."},
  {Abkürzung: "VN", Name: "Vietnam"},
  {Abkürzung: "VU", Name: "Vanuatu"},
  {Abkürzung: "WF", Name: "Wallis and Futuna Islands"},
  {Abkürzung: "WS", Name: "Samoa"},
  {Abkürzung: "XK", Name: "Kosovo"},
  {Abkürzung: "YE", Name: "Yemen"},
  {Abkürzung: "YT", Name: "Mayotte"},
  {Abkürzung: "ZA", Name: "South Africa"},
  {Abkürzung: "ZM", Name: "Zambia"},
  {Abkürzung: "ZW", Name: "Zimbabwe"}
]
const AlleLänderÜbrig = [
  {Abkürzung: "AD", Name: "Andorra"},
  {Abkürzung: "AE", Name: "United Arab Emirates"},
  {Abkürzung: "AF", Name: "Afghanistan"},
  {Abkürzung: "AG", Name: "Antigua and Barbuda"},
  {Abkürzung: "AI", Name: "Anguilla"},
  {Abkürzung: "AL", Name: "Albania"},
  {Abkürzung: "AM", Name: "Armenia"},
  {Abkürzung: "AO", Name: "Angola"},
  {Abkürzung: "AQ", Name: "Antarctica"},
  {Abkürzung: "AR", Name: "Argentina"},
  {Abkürzung: "AS", Name: "American Samoa"},
  {Abkürzung: "AT", Name: "Austria"},
  {Abkürzung: "AU", Name: "Australia"},
  {Abkürzung: "AW", Name: "Aruba"},
  {Abkürzung: "AX", Name: "\u00c5land Islands"},
  {Abkürzung: "AZ", Name: "Azerbaijan"},
  {Abkürzung: "BA", Name: "Bosnia and Herzegovina"},
  {Abkürzung: "BB", Name: "Barbados"},
  {Abkürzung: "BD", Name: "Bangladesh"},
  {Abkürzung: "BE", Name: "Belgium"},
  {Abkürzung: "BF", Name: "Burkina Faso"},
  {Abkürzung: "BG", Name: "Bulgaria"},
  {Abkürzung: "BH", Name: "Bahrain"},
  {Abkürzung: "BI", Name: "Burundi"},
  {Abkürzung: "BJ", Name: "Benin"},
  {Abkürzung: "BL", Name: "Saint Barthélemy"},
  {Abkürzung: "BM", Name: "Bermuda"},
  {Abkürzung: "BN", Name: "Brunei Darussalam"},
  {Abkürzung: "BO", Name: "Bolivia, Plurinational State of"},
  {Abkürzung: "BQ", Name: "Caribbean Netherlands"},
  {Abkürzung: "BR", Name: "Brazil"},
  {Abkürzung: "BS", Name: "Bahamas"},
  {Abkürzung: "BT", Name: "Bhutan"},
  {Abkürzung: "BV", Name: "Bouvet Island"},
  {Abkürzung: "BW", Name: "Botswana"},
  {Abkürzung: "BY", Name: "Belarus"},
  {Abkürzung: "BZ", Name: "Belize"},
  {Abkürzung: "CA", Name: "Canada"},
  {Abkürzung: "CC", Name: "Cocos (Keeling) Islands"},
  {Abkürzung: "CD", Name: "Congo, the Democratic Republic of the"},
  {Abkürzung: "CF", Name: "Central African Republic"},
  {Abkürzung: "CG", Name: "Republic of the Congo"},
  {Abkürzung: "CH", Name: "Switzerland"},
  {Abkürzung: "CI", Name: "C\u00f4te d'Ivoire"},
  {Abkürzung: "CK", Name: "Cook Islands"},
  {Abkürzung: "CL", Name: "Chile"},
  {Abkürzung: "CM", Name: "Cameroon"},
  {Abkürzung: "CN", Name: "China (People's Republic of China)"},
  {Abkürzung: "CO", Name: "Colombia"},
  {Abkürzung: "CR", Name: "Costa Rica"},
  {Abkürzung: "CU", Name: "Cuba"},
  {Abkürzung: "CV", Name: "Cape Verde"},
  {Abkürzung: "CW", Name: "Cura\u00e7ao"},
  {Abkürzung: "CX", Name: "Christmas Island"},
  {Abkürzung: "CY", Name: "Cyprus"},
  {Abkürzung: "CZ", Name: "Czech Republic"},
  {Abkürzung: "DE", Name: "Germany"},
  {Abkürzung: "DJ", Name: "Djibouti"},
  {Abkürzung: "DK", Name: "Denmark"},
  {Abkürzung: "DM", Name: "Dominica"},
  {Abkürzung: "DO", Name: "Dominican Republic"},
  {Abkürzung: "DZ", Name: "Algeria"},
  {Abkürzung: "EC", Name: "Ecuador"},
  {Abkürzung: "EE", Name: "Estonia"},
  {Abkürzung: "EG", Name: "Egypt"},
  {Abkürzung: "EH", Name: "Western Sahara"},
  {Abkürzung: "ER", Name: "Eritrea"},
  {Abkürzung: "ES", Name: "Spain"},
  {Abkürzung: "ET", Name: "Ethiopia"},
  {Abkürzung: "EU", Name: "Europe"},
  {Abkürzung: "FI", Name: "Finland"},
  {Abkürzung: "FJ", Name: "Fiji"},
  {Abkürzung: "FK", Name: "Falkland Islands (Malvinas)"},
  {Abkürzung: "FM", Name: "Micronesia, Federated States of"},
  {Abkürzung: "FO", Name: "Faroe Islands"},
  {Abkürzung: "FR", Name: "France"},
  {Abkürzung: "GA", Name: "Gabon"},
  {Abkürzung: "GB", Name: "United Kingdom"},
  {Abkürzung: "GD", Name: "Grenada"},
  {Abkürzung: "GE", Name: "Georgia"},
  {Abkürzung: "GF", Name: "French Guiana"},
  {Abkürzung: "GG", Name: "Guernsey"},
  {Abkürzung: "GH", Name: "Ghana"},
  {Abkürzung: "GI", Name: "Gibraltar"},
  {Abkürzung: "GL", Name: "Greenland"},
  {Abkürzung: "GM", Name: "Gambia"},
  {Abkürzung: "GN", Name: "Guinea"},
  {Abkürzung: "GP", Name: "Guadeloupe"},
  {Abkürzung: "GQ", Name: "Equatorial Guinea"},
  {Abkürzung: "GR", Name: "Greece"},
  {Abkürzung: "GS", Name: "South Georgia and the South Sandwich Islands"},
  {Abkürzung: "GT", Name: "Guatemala"},
  {Abkürzung: "GU", Name: "Guam"},
  {Abkürzung: "GW", Name: "Guinea-Bissau"},
  {Abkürzung: "GY", Name: "Guyana"},
  {Abkürzung: "HK", Name: "Hong Kong"},
  {Abkürzung: "HM", Name: "Heard Island and McDonald Islands"},
  {Abkürzung: "HN", Name: "Honduras"},
  {Abkürzung: "HR", Name: "Croatia"},
  {Abkürzung: "HT", Name: "Haiti"},
  {Abkürzung: "HU", Name: "Hungary"},
  {Abkürzung: "ID", Name: "Indonesia"},
  {Abkürzung: "IE", Name: "Ireland"},
  {Abkürzung: "IL", Name: "Israel"},
  {Abkürzung: "IM", Name: "Isle of Man"},
  {Abkürzung: "IN", Name: "India"},
  {Abkürzung: "IO", Name: "British Indian Ocean Territory"},
  {Abkürzung: "IQ", Name: "Iraq"},
  {Abkürzung: "IR", Name: "Iran, Islamic Republic of"},
  {Abkürzung: "IS", Name: "Iceland"},
  {Abkürzung: "IT", Name: "Italy"},
  {Abkürzung: "JE", Name: "Jersey"},
  {Abkürzung: "JM", Name: "Jamaica"},
  {Abkürzung: "JO", Name: "Jordan"},
  {Abkürzung: "JP", Name: "Japan"},
  {Abkürzung: "KE", Name: "Kenya"},
  {Abkürzung: "KG", Name: "Kyrgyzstan"},
  {Abkürzung: "KH", Name: "Cambodia"},
  {Abkürzung: "KI", Name: "Kiribati"},
  {Abkürzung: "KM", Name: "Comoros"},
  {Abkürzung: "KN", Name: "Saint Kitts and Nevis"},
  {Abkürzung: "KP", Name: "Korea, Democratic People's Republic of"},
  {Abkürzung: "KR", Name: "Korea, Republic of"},
  {Abkürzung: "KW", Name: "Kuwait"},
  {Abkürzung: "KY", Name: "Cayman Islands"},
  {Abkürzung: "KZ", Name: "Kazakhstan"},
  {Abkürzung: "LA", Name: "Laos (Lao People's Democratic Republic)"},
  {Abkürzung: "LB", Name: "Lebanon"},
  {Abkürzung: "LC", Name: "Saint Lucia"},
  {Abkürzung: "LI", Name: "Liechtenstein"},
  {Abkürzung: "LK", Name: "Sri Lanka"},
  {Abkürzung: "LR", Name: "Liberia"},
  {Abkürzung: "LS", Name: "Lesotho"},
  {Abkürzung: "LT", Name: "Lithuania"},
  {Abkürzung: "LU", Name: "Luxembourg"},
  {Abkürzung: "LV", Name: "Latvia"},
  {Abkürzung: "LY", Name: "Libya"},
  {Abkürzung: "MA", Name: "Morocco"},
  {Abkürzung: "MC", Name: "Monaco"},
  {Abkürzung: "MD", Name: "Moldova, Republic of"},
  {Abkürzung: "ME", Name: "Montenegro"},
  {Abkürzung: "MF", Name: "Saint Martin"},
  {Abkürzung: "MG", Name: "Madagascar"},
  {Abkürzung: "MH", Name: "Marshall Islands"},
  {Abkürzung: "MK", Name: "North Macedonia"},
  {Abkürzung: "ML", Name: "Mali"},
  {Abkürzung: "MM", Name: "Myanmar"},
  {Abkürzung: "MN", Name: "Mongolia"},
  {Abkürzung: "MO", Name: "Macao"},
  {Abkürzung: "MP", Name: "Northern Mariana Islands"},
  {Abkürzung: "MQ", Name: "Martinique"},
  {Abkürzung: "MR", Name: "Mauritania"},
  {Abkürzung: "MS", Name: "Montserrat"},
  {Abkürzung: "MT", Name: "Malta"},
  {Abkürzung: "MU", Name: "Mauritius"},
  {Abkürzung: "MV", Name: "Maldives"},
  {Abkürzung: "MW", Name: "Malawi"},
  {Abkürzung: "MX", Name: "Mexico"},
  {Abkürzung: "MY", Name: "Malaysia"},
  {Abkürzung: "MZ", Name: "Mozambique"},
  {Abkürzung: "NA", Name: "Namibia"},
  {Abkürzung: "NC", Name: "New Caledonia"},
  {Abkürzung: "NE", Name: "Niger"},
  {Abkürzung: "NF", Name: "Norfolk Island"},
  {Abkürzung: "NG", Name: "Nigeria"},
  {Abkürzung: "NI", Name: "Nicaragua"},
  {Abkürzung: "NL", Name: "Netherlands"},
  {Abkürzung: "NO", Name: "Norway"},
  {Abkürzung: "NP", Name: "Nepal"},
  {Abkürzung: "NR", Name: "Nauru"},
  {Abkürzung: "NU", Name: "Niue"},
  {Abkürzung: "NZ", Name: "New Zealand"},
  {Abkürzung: "OM", Name: "Oman"},
  {Abkürzung: "PA", Name: "Panama"},
  {Abkürzung: "PE", Name: "Peru"},
  {Abkürzung: "PF", Name: "French Polynesia"},
  {Abkürzung: "PG", Name: "Papua New Guinea"},
  {Abkürzung: "PH", Name: "Philippines"},
  {Abkürzung: "PK", Name: "Pakistan"},
  {Abkürzung: "PL", Name: "Poland"},
  {Abkürzung: "PM", Name: "Saint Pierre and Miquelon"},
  {Abkürzung: "PN", Name: "Pitcairn"},
  {Abkürzung: "PR", Name: "Puerto Rico"},
  {Abkürzung: "PS", Name: "Palestine"},
  {Abkürzung: "PT", Name: "Portugal"},
  {Abkürzung: "PW", Name: "Palau"},
  {Abkürzung: "PY", Name: "Paraguay"},
  {Abkürzung: "QA", Name: "Qatar"},
  {Abkürzung: "RE", Name: "Réunion"},
  {Abkürzung: "RO", Name: "Romania"},
  {Abkürzung: "RS", Name: "Serbia"},
  {Abkürzung: "RU", Name: "Russian Federation"},
  {Abkürzung: "RW", Name: "Rwanda"},
  {Abkürzung: "SA", Name: "Saudi Arabia"},
  {Abkürzung: "SB", Name: "Solomon Islands"},
  {Abkürzung: "SC", Name: "Seychelles"},
  {Abkürzung: "SD", Name: "Sudan"},
  {Abkürzung: "SE", Name: "Sweden"},
  {Abkürzung: "SG", Name: "Singapore"},
  {Abkürzung: "SH", Name: "Saint Helena, Ascension and Tristan da Cunha"},
  {Abkürzung: "SI", Name: "Slovenia"},
  {Abkürzung: "SJ", Name: "Svalbard and Jan Mayen Islands"},
  {Abkürzung: "SK", Name: "Slovakia"},
  {Abkürzung: "SL", Name: "Sierra Leone"},
  {Abkürzung: "SM", Name: "San Marino"},
  {Abkürzung: "SN", Name: "Senegal"},
  {Abkürzung: "SO", Name: "Somalia"},
  {Abkürzung: "SR", Name: "Suriname"},
  {Abkürzung: "SS", Name: "South Sudan"},
  {Abkürzung: "ST", Name: "Sao Tome and Principe"},
  {Abkürzung: "SV", Name: "El Salvador"},
  {Abkürzung: "SX", Name: "Sint Maarten (Dutch part)"},
  {Abkürzung: "SY", Name: "Syrian Arab Republic"},
  {Abkürzung: "SZ", Name: "Swaziland"},
  {Abkürzung: "TC", Name: "Turks and Caicos Islands"},
  {Abkürzung: "TD", Name: "Chad"},
  {Abkürzung: "TF", Name: "French Southern Territories"},
  {Abkürzung: "TG", Name: "Togo"},
  {Abkürzung: "TH", Name: "Thailand"},
  {Abkürzung: "TJ", Name: "Tajikistan"},
  {Abkürzung: "TK", Name: "Tokelau"},
  {Abkürzung: "TL", Name: "Timor-Leste"},
  {Abkürzung: "TM", Name: "Turkmenistan"},
  {Abkürzung: "TN", Name: "Tunisia"},
  {Abkürzung: "TO", Name: "Tonga"},
  {Abkürzung: "TR", Name: "Turkey"},
  {Abkürzung: "TT", Name: "Trinidad and Tobago"},
  {Abkürzung: "TV", Name: "Tuvalu"},
  {Abkürzung: "TW", Name: "Taiwan (Republic of China)"},
  {Abkürzung: "TZ", Name: "Tanzania, United Republic of"},
  {Abkürzung: "UA", Name: "Ukraine"},
  {Abkürzung: "UG", Name: "Uganda"},
  {Abkürzung: "UM", Name: "US Minor Outlying Islands"},
  {Abkürzung: "US", Name: "United States"},
  {Abkürzung: "UY", Name: "Uruguay"},
  {Abkürzung: "UZ", Name: "Uzbekistan"},
  {Abkürzung: "VA", Name: "Holy See (Vatican City State)"},
  {Abkürzung: "VC", Name: "Saint Vincent and the Grenadines"},
  {Abkürzung: "VE", Name: "Venezuela, Bolivarian Republic of"},
  {Abkürzung: "VG", Name: "Virgin Islands, British"},
  {Abkürzung: "VI", Name: "Virgin Islands, U.S."},
  {Abkürzung: "VN", Name: "Vietnam"},
  {Abkürzung: "VU", Name: "Vanuatu"},
  {Abkürzung: "WF", Name: "Wallis and Futuna Islands"},
  {Abkürzung: "WS", Name: "Samoa"},
  {Abkürzung: "XK", Name: "Kosovo"},
  {Abkürzung: "YE", Name: "Yemen"},
  {Abkürzung: "YT", Name: "Mayotte"},
  {Abkürzung: "ZA", Name: "South Africa"},
  {Abkürzung: "ZM", Name: "Zambia"},
  {Abkürzung: "ZW", Name: "Zimbabwe"}
]
const LänderAuswahl = []
const TestArray = []
const RichtigeLänder = []
let falscheLösung1 = 0;
let Lösung
let Score = 0;
let RichtigeAntwort = null
let Mistakes = 0; 
let Timeout;
var correctSound = document.getElementById("correctSound");
var wrongSound = document.getElementById("wrongSound");
//var deathSound = document.getElementById("deathSound"); (nicht implementiert)
let Streak = 0;

function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

function check(e) {
//eval.
  if (e == RichtigeAntwort) {
    richtigeAntwort(); 
    correctSound.play();
  }
  else {
    falscheantwort(); 
    wrongSound.play();
  }
document.getElementById("StreakDisplay").innerHTML = "Streak:" + Streak;

wait(150)
randomLand() } 

//hide / unhide
function ButtonsHide() {
    document.getElementById("allbuttons").hidden = true;
    document.getElementById("angezeigteFlagge").style.display = "none";}
  function ButtonsUnhide() {
    document.getElementById("allbuttons").hidden = false;
    document.getElementById("angezeigteFlagge").style.display = "block";}


//HAUPTFUNKTION:
function randomLand() {
//zufälliges Land/Flagge auswählen und anzeigen:
    arrayLänge = AlleLänder.length;
    let AlleLänderÜbrigLänge = AlleLänderÜbrig.length;
//Schluss
    if (AlleLänderÜbrigLänge == 0 || Mistakes == 6) {
      ButtonsHide() 
      document.getElementById("Feedback").hidden = false;
      let totalScore = document.getElementById("totalScore1")
      totalScore.innerHTML = `You had ${Score} / 251 Flags correct!`
      if (Mistakes == 6) {
        document.getElementById("FeedbackText").innerHTML = "You Died!"
      }
      else {
        document.getElementById("FeedbackText").innerHTML = "Well done!"
      }
    }
//-->zufälliges Land/Flagge weiter auswählen und anzeigen:
  let LandIndexAlle = Math.floor(Math.random() * arrayLänge)
  let LandIndex = Math.floor(Math.random() * AlleLänderÜbrigLänge)
  let Land = AlleLänderÜbrig[LandIndex].Abkürzung;
  let LandName = AlleLänderÜbrig[LandIndex].Name;
  let angezeigteFlagge = document.getElementById("angezeigteFlagge")
    angezeigteFlagge.src = "/Bilder/" + Land + ".png";
//wiederholungen verhindern
    AlleLänderÜbrig.splice(LandIndex, 1)
    console.log(AlleLänderÜbrigLänge)

//zufälliger richtiger Button auswählen:
    Lösung = [Math.floor(Math.random() * 4)]
    RichtigeAntwort = document.getElementById("Button" + Lösung);
    RichtigeAntwort.innerHTML = LandName;
  
//entfernt richtiges Land aus Alle Länder um zu verhindern, dass andere optionen = Lösung sind
    LänderAuswahl.push(AlleLänder[LandIndexAlle])
    AlleLänder.splice(LandIndexAlle, 1)
    arrayLänge = AlleLänder.length;

//andere Falsche  Buttons auswählen
    for (let i = 0; i < 4; i++) {
      if (i != Lösung) {
        const FalscheAntwort = document.getElementById("Button" + i);
        let FalscherLandIndex = [Math.floor(Math.random() * arrayLänge)]
        let FalscherName0 = AlleLänder[FalscherLandIndex].Name;
        LänderAuswahl.push(AlleLänder[FalscherLandIndex])
        AlleLänder.splice(FalscherLandIndex, 1)
        arrayLänge = AlleLänder.length;

        FalscheAntwort.innerHTML = FalscherName0;
        //Land in Liste hinzufügen
      }
    }
 //alle flaggen zurück in ein array 
    for (let y = 0; y <= 3; y++) {
      AlleLänder.push(LänderAuswahl[y])
    }
   LänderAuswahl.splice(0,4)
}

function richtigeAntwort() {
Streak++
Score ++;
const ScoreJetzt = document.getElementById("ScoreAnzeige");
ScoreJetzt.innerHTML = Score;
}
function falscheantwort() {
  Streak = 0; 
  Mistakes ++;
//Lebensanzeige
  let Hearts = document.getElementById("Hearts")
  Hearts.src = "/HeartsBilder/" + Mistakes + "Fehler.png";
}

//alles zurücksetzen
function restart() {
  document.getElementById("angezeigteFlagge").hidden = false;
  Score = 0;
  Mistakes = 0;
   Hearts.src = "/HeartsBilder/" + Mistakes + "Fehler.png";
  const ScoreJetzt = document.getElementById("ScoreAnzeige");
ScoreJetzt.innerHTML = Score;
  ButtonsUnhide()
  document.getElementById("Feedback").hidden = true;
  arrayLänge = AlleLänder.length - 1;
  AlleLänderÜbrig.splice(0,251)
  for (let m = 0; m <= arrayLänge; m++) {
  AlleLänderÜbrig.push(AlleLänder[m])}
  console.log(AlleLänderÜbrig)
  randomLand()
}
// Initialisieren
randomLand()
//console.log("init:" RichtigeAntwort)
